// Corrected typeDefs
const typeDefs = gql`
  type User {
    id: ID!
    username: String!
    name: String
    location: String
    tattooStyle: String
    price: Float
    bio: String
    website: String
  }

  type Query {
    me: User
  }

  type Mutation {
    register(username: String!, password: String!): String
    login(username: String!, password: String!): String
    updateProfile(
      name: String,
      location: String,
      tattooStyle: String,
      price: Float,
      bio: String,
      website: String
    ): User
  }
`;
