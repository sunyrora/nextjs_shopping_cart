import { useReactiveVar } from "@apollo/client";
import { cart } from "../../apolloClient/cache";
import CartScreen from "../../Containers/CartScreen";

export default function CartPage() {
  const cartItems = useReactiveVar(cart);
  return <CartScreen cart={cartItems} />;
}
