import apolloClient from "../../apolloClient/apolloClient";
import { GET_PRODUCT_BY_ID } from "../../graphql/queries";
import ProductDetails from "../../Containers/ProductDetails";

export default function Product({ product }) {
  return <ProductDetails product={product} />;
}

export async function getServerSideProps(context) {
  const { id } = context.params; // Use context.params to get dynamic params

  const { data } = await apolloClient.query({
    query: GET_PRODUCT_BY_ID,
    variables: { id },
  });

  return {
    props: {
      product: data.product,
    },
  };
}
