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
