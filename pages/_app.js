import "../styles/globals.css";
import { ApolloProvider, useApolloClient } from "@apollo/client";
import apolloClient from "../apolloClient/apolloClient";
import Navbar from "../Components/Navbar";

function MyApp({ Component, pageProps }) {
  // const apolloClient = useApolloClient(ApolloProvider);

  console.log("MyApp Component: ", Component);

  return (
    <ApolloProvider client={apolloClient}>
      <Navbar />
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default MyApp;
