// server.js
require('dotenv').config();
const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const { ApolloServer, gql } = require('apollo-server-express');
const Artist = require('./models/Artist');
const authMiddleware = require('./utils/auth');

const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());

const typeDefs = gql`
  type Artist {
    id: ID!
    username: String!
    bio: String
    website: String
    images: [String]
  }

  type Query {
    me: Artist
  }

  type Mutation {
    register(username: String!, password: String!): String
    login(username: String!, password: String!): String
    updateProfile(bio: String, website: String, images: [String]): Artist
  }
`;

const resolvers = {
  Query: {
    me: async (_, __, { artist }) => {
      if (!artist) throw new Error('You are not authenticated!');
      return await Artist.findById(artist.id);
    },
  },
  Mutation: {
    register: async (_, { username, password }) => {
      const hashedPassword = await bcrypt.hash(password, 10);
      const newArtist = new Artist({ username, password: hashedPassword });
      await newArtist.save();
      return 'Artist registered successfully';
    },
    login: async (_, { username, password }) => {
      const artist = await Artist.findOne({ username });
      if (!artist) throw new Error('Invalid credentials');

      const isValid = await bcrypt.compare(password, artist.password);
      if (!isValid) throw new Error('Invalid credentials');

      const token = jwt.sign({ id: artist._id }, process.env.JWT_SECRET, {
        expiresIn: '1h',
      });
      return token;
    },
    updateProfile: async (_, { bio, website, images }, { artist }) => {
      if (!artist) throw new Error('You are not authenticated!');
      const updatedArtist = await Artist.findByIdAndUpdate(
        artist.id,
        { profile: { bio, website, images } },
        { new: true }
      );
      return updatedArtist;
    }
  }
};

const startServer = async () => {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: ({ req }) => {
      const token = req.headers.authorization || '';
      if (token) {
        try {
          const artist = jwt.verify(token.split(' ')[1], process.env.JWT_SECRET);
          return { artist };
        } catch (err) {
          console.error(err);
        }
      }
      return {};
    },
  });

  await server.start();
  server.applyMiddleware({ app });

  console.log('MONGO_URI:', process.env.MONGODB_URI);
  console.log('JWT_SECRET:', process.env.JWT_SECRET);

  mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(port, () => console.log(`server running at http://localhost:${port}${server.graphqlPath}`)))
    .catch(err => console.error(err));
};

startServer();
