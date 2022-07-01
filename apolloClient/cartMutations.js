import { cart } from "./cache";

const getCartItemCount = (cartItems) =>
  cartItems?.reduce((acc, item) => acc + Number(item?.qty), 0);
const getCartSubTotal = (cartItems) =>
  cartItems?.reduce(
    (price, item) => price + Number(item?.price) * Number(item?.qty),
    0
  );

// mutations for static states on client side
const addToCart = (product, qty) => {
  const existing = cart();

  let cartItems = existing;
  const existItem = existing.cartItems.find((item) => item.id === product.id);

  const addItem = {
    ...product,
    price: Number(product.price),
    qty: Number(qty),
  };

  if (existItem) {
    cartItems = existing.cartItems.map((item) => {
      if (item.id === existItem.id) {
        const newQty = Number(item.qty) + Number(addItem.qty);
        console.log("newQty: ", newQty);
        if (newQty > addItem.countInStock) {
          alert(`Only ${item.countInStock} product(s) in stok.
            You have already added ${item.qty} into your cart.
          `);
          return item;
        } else {
          return { ...item, qty: newQty };
        }
      } else {
        return item;
      }
    });
  } else {
    cartItems = [...existing.cartItems, addItem];
  }

  console.log("new cartItems", cartItems);
  const itemCount = getCartItemCount(cartItems);
  const subTotal = getCartSubTotal(cartItems);

  cart({ itemCount, subTotal, cartItems: [...cartItems] });
};

export { addToCart };
