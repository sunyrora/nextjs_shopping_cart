import { products as sampleProducts } from "./sampleData";

export const resolvers = {
  Query: {
    products: () => {
      return sampleProducts;
    },
    product: (parent, args) => {
      const { id } = args;
      return sampleProducts.find((product) => product.id === id);
    },
  },
};
