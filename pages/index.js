import { useEffect } from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";

import ProductList from "../Containers/ProductList";
import apolloClient from "../apolloClient/apolloClient";
import { GET_PRODUCT_LIST } from "../graphql/queries";
import { setCart } from "../apolloClient/cartMutations";
import { KEY_CART_LOCALSTORAGE } from "../utils/constants";

export default function Home({ products }) {
  useEffect(() => {
    // To make cart items stay when refresh page
    const cartLocalStorage = localStorage.getItem(KEY_CART_LOCALSTORAGE);
    if (cartLocalStorage) {
      setCart(JSON.parse(cartLocalStorage));
    }
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Product List - Next.js Shopping Cart</title>
        <meta name="description" content="Product List" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ProductList products={products} />

      <footer className={styles.footer}></footer>
    </div>
  );
}

// You should use getServerSideProps when:
// - Only if you need to pre-render a page whose data must be fetched at request time
export const getServerSideProps = async () => {
  const { data } = await apolloClient.query({
    query: GET_PRODUCT_LIST,
  }); // your fetch function here

  return {
    props: {
      products: data.products,
    },
  };
};
