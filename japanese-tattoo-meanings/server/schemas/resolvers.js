// schema.js
const typeDefs = gql`
  type User {
    id: ID!
    username: String!
    name: String
    location: String
    tattooStyle: String
    price: Float
    profilePicture: String
    portfolioImages: [String]
  }

  type Query {
    me: User
  }

  type Mutation {
    register(username: String!, password: String!): String
    login(username: String!, password: String!): String
    updateProfile(
      name: String
      location: String
      tattooStyle: String
      price: Float
      profilePicture: String
      portfolioImages: [String]
    ): User
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
    updateProfile: async (_, { name, location, tattooStyle, price, profilePicture, portfolioImages }, { user }) => {
      if (!user) throw new Error('You are not authenticated!');
      const updatedUser = await User.findByIdAndUpdate(
        user.id,
        { name, location, tattooStyle, price, profilePicture, portfolioImages },
        { new: true }
      );
      return updatedUser;
    },
  },
};
