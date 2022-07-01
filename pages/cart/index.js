import { useQuery, useReactiveVar } from "@apollo/client";
import { cart, initialCart } from "../../apolloClient/cache";
import { GET_CART_ITEMS } from "../../apolloClient/cartQueries";
import CartScreen from "../../Containers/CartScreen";

export default function CartPage() {
  const cartItems = useReactiveVar(cart);
  return <CartScreen cart={cartItems} />;
}

// export async function getServerSideProps(ctx) {
//     return {
//         props: {
//             pageComponentProps
//         }
//     }
// }
