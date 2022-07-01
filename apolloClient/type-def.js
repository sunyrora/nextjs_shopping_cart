import { gql } from "@apollo/client";

export const typeDefs = gql`
  type Cart {
    itemCount: Int!
    subTotal: Int!
    cartItems: [Product]
  }

  extend type Product {
    qty: Int!
  }

  extend type Query {
    cart: cart!
  }
`;
