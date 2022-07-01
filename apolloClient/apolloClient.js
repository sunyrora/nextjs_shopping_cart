import { ApolloClient } from "@apollo/client";
import { cache } from "./cache";
import { typeDefs } from "./type-def";

const apolloClient = new ApolloClient({
  uri: process.env.GRAPH_URI,
  // uri: `http://localhost:${process.env.PORT}/api/graphql`,
  cache: cache,
  typeDefs,
  connectToDevTools: process.env.NODE_ENV !== "production",
});

export default apolloClient;
