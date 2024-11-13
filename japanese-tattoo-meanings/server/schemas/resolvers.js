const typeDefs = gql`
  type User {
    id: ID!
    username: String!
    name: String
    location: String
    tattooStyle: String
    price: Float
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
    updateProfile: async (_, { bio, website, location, style, price }, { user }) => {
      if (!user) throw new Error('You are not authenticated!');

      const updatedUser = await User.findByIdAndUpdate(
        user.id,
        { bio, website, location, style, price },
        { new: true }
      );

      return updatedUser;
    },
  },

  //   addProfileImage: async (_, { image }, { user }) => {
  //     if (!user) throw new Error('You are not authenticated!');

  //     const updatedUser = await User.findByIdAndUpdate( user.id, { $push: { portfolioImages: image } }, { new: true });
  // },
};

module.exports = { typeDefs, resolvers };
