import "../styles/globals.css";
import { ApolloProvider } from "@apollo/client";
import apolloClient from "../apolloClient/apolloClient";
import Navbar from "../Components/Navbar";

function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={apolloClient}>
      <Navbar />
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default MyApp;
