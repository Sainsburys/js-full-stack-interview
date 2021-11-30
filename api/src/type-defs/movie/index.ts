import { gql } from 'apollo-server-lambda'

const typeDefs = gql`
  type Query {
    movie(id: ID!): Movie
  }

  type Movie {
    id: String
    displayName: String
  }
`

export default typeDefs
