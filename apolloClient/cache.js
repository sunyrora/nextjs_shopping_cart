import { InMemoryCache, ReactiveVar, makeVar } from "@apollo/client";

/*
@ catItems 
[{ 
    id,,
    name,
    description,
    price,
    countInStock,
    imageUrl,
    qty
}, ...]
*/
export const initialCart = {
  itemCount: 0,
  subTotal: 0,
  cartItems: [],
};
export const cart = makeVar(initialCart);

export const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        cart: {
          read: () => cart(),
        },
      },
    },
  },
});
