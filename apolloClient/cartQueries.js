import { gql } from "@apollo/client";

// queries for static states on client side

const GET_CART_ITEMS = gql`
  query GetCartItems {
    cart @client
  }
`;

export { GET_CART_ITEMS };
