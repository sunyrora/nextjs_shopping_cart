import { InMemoryCache, ApolloClient, HttpLink } from "@apollo/client";

// ApolloClient
let client;

// cache
const cache = new InMemoryCache();

// export const apolloClient = () => client ?? createApolloClient();
const apolloClient = new ApolloClient({
  uri: "http://localhost:3000/api/graphql",
  cache: cache,
});

// const apolloClient = new ApolloClient({
//   link: new HttpLink({
//     uri: "http://localhost:3000/api/graphql",
//   }),
//   cache: cache,
// });

export default apolloClient;
