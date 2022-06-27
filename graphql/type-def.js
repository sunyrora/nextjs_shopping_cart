import { gql } from "apollo-server-micro";

export const typeDefs = gql`
  type Product {
    id: ID!
    name: String!
    description: String!
    price: Int!
    countInStock: Int!
    imageUrl: String!
  }

  type Query {
    products: [Product]
    product(id: ID!): Product
  }
`;
