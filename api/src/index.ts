import schema from './schema'
import { ApolloServer } from 'apollo-server-lambda'

const { STAGE } = process.env
const isProd = STAGE === 'prod'
const offlineMode = STAGE === 'offline'

export const setupApollo = () => {
  const server = new ApolloServer({
    schema,
    debug: !isProd,
    introspection: !isProd,
    playground: offlineMode ? { endpoint: '/offline/graphql' } : false,
  })

  return server.createHandler()
}

export const handler = setupApollo()
