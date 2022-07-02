import { ApolloClient } from "@apollo/client";
import { cache } from "./cache";
import { typeDefs } from "./type-def";

// const uri = `${process.env.GRAPH_URI}:${process.env.PORT}/${process.env.GRAPH_ENDPOINT}`;

const apolloClient = new ApolloClient({
  uri: process.env.GRAPH_URI,
  // uri: `http://localhost:${process.env.PORT}/api/graphql`,
  // uri,
  cache: cache,
  typeDefs,
  connectToDevTools: process.env.NODE_ENV !== "production",
});

export default apolloClient;
