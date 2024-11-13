require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const { ApolloServer, gql } = require('apollo-server-express');
const User = require('./models/User');
const uploadRoutes = require('./routes/cloudinaryUploads');

const app = express();
const port = process.env.PORT || 4001;

// Enable CORS for all origins
app.use(cors());

// Middleware to parse JSON requests
app.use(express.json());

// Cloudinary upload routes
app.use('/api/uploads', uploadRoutes);

// GraphQL type definitions
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

// GraphQL resolvers
const resolvers = {
  Query: {
    me: async (_, __, { user }) => {
      if (!user) throw new Error('You are not authenticated!');
      console.log('Fetching user data for:', user.id);
      return await User.findById(user.id);
    },
  },
  Mutation: {
    register: async (_, { username, password }) => {
      const hashedPassword = await bcrypt.hash(password, 10);
      const newUser = new User({ username, password: hashedPassword });
      await newUser.save();
      console.log('User registered successfully:', username);
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
      console.log('Generated token for user:', username);
      return token;
    },
    updateProfile: async (_, { bio, website, images, location, style, price }, { user }) => {
      if (!user) {
        console.log('User is not authenticated!');
        throw new Error('You are not authenticated!');
      }

      console.log('Received profile update data:', { bio, website, images, location, style, price });

      const updatedUser = await User.findByIdAndUpdate(
        user.id,
        { bio, website, images, location, style, price },
        { new: true }
      );

      console.log('Updated user profile:', updatedUser);
      return updatedUser;
    },
  },
};

// Start Apollo Server
const startServer = async () => {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: ({ req }) => {
      const token = req.headers.authorization || '';
      if (token) {
        try {
          const decoded = jwt.verify(token.split(' ')[1], process.env.JWT_SECRET);
          console.log('Decoded user:', decoded);
          return { user: decoded };
        } catch (err) {
          console.error('Invalid token:', err);
          throw new Error('Invalid token');
        }
      }
      return {};
    },
  });

  await server.start();
  server.applyMiddleware({ app });

  // Connect to MongoDB
  mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => {
      app.listen(port, () => {
        console.log(`Server running at http://localhost:${port}${server.graphqlPath}`);
      });
    })
    .catch((err) => console.error('MongoDB connection error:', err));
};

// Initialize the server
startServer().catch((err) => console.error('Error starting server:', err));
