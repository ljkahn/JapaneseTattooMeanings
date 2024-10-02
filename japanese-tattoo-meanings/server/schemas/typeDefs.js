const typeDefs = gql`
  type User {
    id: ID!
    username: String!
    bio: String
    website: String
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
    updateProfile(
      bio: String
      website: String
      location: String
      style: String
      price: Float
    ): User
  }
`;
