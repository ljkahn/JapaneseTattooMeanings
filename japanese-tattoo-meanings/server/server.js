require('dotenv').config();
const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const { ApolloServer, gql } = require('apollo-server-express');
const { getOpenAiResponse } = require('../client/utils/openAi');
const User = require('./models/User');
const authMiddleware = require('./utils/auth');

const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());

const typeDefs = gql`
  type User {
    id: ID!
    username: String!
    role: String!
  }

  type Query {
    me: User
  }

  type Mutation {
    register(username: String!, password: String!, role: String!): String
    login(username: String!, password: String!): String
  }
`;

const resolvers = {
  Query: {
    me: async (_, __, { user }) => {
      if (!user) throw new Error('You are not authenticated!');
      return await User.findById(user.id);
    },
  },
  Mutation: {
    register: async (_, { username, password, role }) => {
      const hashedPassword = await bcrypt.hash(password, 10);
      const newUser = new User({
        username,
        password: hashedPassword,
        role,
      });
      await newUser.save();
      return 'User registered successfully';
    },
    login: async (_, { username, password }) => {
      const user = await User.findOne({ username });
      if (!user) throw new Error('Invalid credentials');

      const isValid = await bcrypt.compare(password, user.password);
      if (!isValid) throw new Error('Invalid credentials');

      const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, {
        expiresIn: '1h',
      });
      return token;
    },
  },
};

const startServer = async () => {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: ({ req }) => {
      const token = req.headers.authorization || '';
      if (token) {
        try {
          const user = jwt.verify(token.split(' ')[1], process.env.JWT_SECRET);
          return { user };
        } catch (err) {
          console.error(err);
        }
      }
      return {};
    },
  });

  await server.start();
  server.applyMiddleware({ app });

  // Suggest endpoint
  app.post('/suggest', async (req, res) => {
    const { theme } = req.body;

    try {
      console.log(`received request with theme: ${theme}`);
      const response = await getOpenAiResponse(`suggest tattoo ideas related to the theme: ${theme}. Do not suggest Japanese characters. Only suggest gods/goddesses, supernatural figures, flora, fauna, Suikoden, and folklore figures. Here are some examples of acceptable suggestions: 
        - Amaterasu (goddess of the sun)
        - Kitsune (supernatural fox)
        - Sakura (cherry blossoms)
        - Kirin (mythical creature)
        - Byakkotai (group of teenage samurai)
        Do not include any Japanese kanji or characters.`);

      // Filter suggestions to exclude Japanese characters
      const filteredSuggestions = response.split('\n').filter(suggestion => {
        const lowerSuggestion = suggestion.toLowerCase();
        return !lowerSuggestion.includes('character') &&
               !lowerSuggestion.includes('kanji') &&
               !lowerSuggestion.includes('japanese character') &&
               !lowerSuggestion.match(/[一-龯]/);  // regex to match kanji characters
      });

      res.json({ reply: filteredSuggestions.join('\n') });
    } catch (error) {
      console.error('error in /suggest endpoint:', error);
      res.status(500).send('Error processing suggestion request');
    }
  });

  // Debugging line to check if the environment variables are loaded correctly
  console.log('MONGO_URI:', process.env.MONGODB_URI);
  console.log('JWT_SECRET:', process.env.JWT_SECRET);

  // Connect to MongoDB and start server
  mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(port, () => console.log(`server running at http://localhost:${port}${server.graphqlPath}`)))
    .catch(err => console.error(err));
};

startServer();
