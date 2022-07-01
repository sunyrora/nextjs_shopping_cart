import { InMemoryCache, ApolloClient, HttpLink } from "@apollo/client";
import { cache } from "./cache";
import { typeDefs } from "./type-def";

// cache
// const cache = new InMemoryCache();

const apolloClient = new ApolloClient({
  // uri: "http://localhost:3000/api/graphql",
  uri: `http://localhost:${process.env.PORT}/api/graphql`,
  cache: cache,
  typeDefs,
  connectToDevTools: process.env.NODE_ENV !== "production",
});

export default apolloClient;
