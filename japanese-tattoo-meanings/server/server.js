// server.js
require('dotenv').config();
const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const { ApolloServer, gql } = require('apollo-server-express');
const User = require('./models/User');

const app = express();
const port = process.env.PORT || 4001;

app.use(express.json());

const typeDefs = gql`
  type User {
    id: ID!
    username: String!
    bio: String
    website: String
    images: [String]
    location: String
    style: String
    price: Float
  }

  type Query {
    me: User
  }

  type Mutation {
    register(username: String!, password: String!): String
    login(username: String!, password: String!): String
    updateProfile(bio: String, website: String, images: [String], location: String, style: String, price: Float): User
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
    register: async (_, { username, password }) => {
      const hashedPassword = await bcrypt.hash(password, 10);
      const newUser = new User({ username, password: hashedPassword });
      await newUser.save();
      return 'User registered successfully';
    },
    login: async (_, { username, password }) => {
      const user = await User.findOne({ username });
      if (!user) throw new Error('Invalid credentials');

      const isValid = await bcrypt.compare(password, user.password);
      if (!isValid) throw new Error('Invalid credentials');

      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
        expiresIn: '1h',
      });
      console.log(token)
      return token;
    },
    updateProfile: async (_, { bio, website, images, location, style, price }, { user }) => {
      if (!user) throw new Error('You are not authenticated!');
      const updatedUser = await User.findByIdAndUpdate(
        user.id,
        { bio, website, images, location, style, price },
        { new: true }
      );
      return updatedUser;
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
        // Ensure to split 'Bearer ' from token
        console.log('Token:', token); // After obtaining the token
        const artist = jwt.verify(token.split(' ')[1], process.env.JWT_SECRET);


        return { artist };
      } catch (err) {
        console.error(err);
        throw new Error('Invalid token');
      }
    }
    return {};
  },
  });

  await server.start();
  server.applyMiddleware({ app });

  mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(port, () => console.log(`Server running at http://localhost:${port}${server.graphqlPath}`)))
    .catch(err => console.error(err));
};

startServer();
