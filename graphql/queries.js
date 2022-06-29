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

const GET_PRODUCT_BY_ID = gql`
  query getProductById($id: ID!) {
    product(id: $id) {
      id
      name
      description
      price
      countInStock
      imageUrl
    }
  }
`;

export { GET_PRODUCT_LIST, GET_PRODUCT_BY_ID };
