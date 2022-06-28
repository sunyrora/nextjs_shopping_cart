import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

import ProductList from "../Containers/ProductList";
import apolloClient from "../apolloClient/apolloClient";
import { GET_PRODUCT_LIST } from "../graphql/queries";

export default function Home({ products }) {
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

  // console.log("data: ", data);

  return {
    props: {
      products: data.products,
    },
  };
};
