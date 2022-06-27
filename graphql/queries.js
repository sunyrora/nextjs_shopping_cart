import { gql } from "apollo-server-micro";

const GET_PRODUCT_LIST = gql`
  query getProductList {
    products {
      id
      name
      description
      price
      countInStock
      imageUrl
    }
  }
`;

export { GET_PRODUCT_LIST };
