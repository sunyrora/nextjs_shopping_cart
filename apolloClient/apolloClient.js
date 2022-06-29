import { InMemoryCache, ApolloClient, HttpLink } from "@apollo/client";

/* let apolloClient = null;

const createApolloClient = () => {
  const cache = new InMemoryCache();
  return new ApolloClient({
    uri: "http://localhost:3000/api/graphql",
    cache: cache,
  });
};

const useApollo = () => (apolloClient = apolloClient ?? createApolloClient());

export { useApollo }; */

// cache
const cache = new InMemoryCache();

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
