import CartScreen from "../../Containers/CartScreen";

const cart = {
  itemCount: 0,
  subTotal: 0,
  cartItems: [],
};
export default function CartPage() {
  return <CartScreen cart={cart} />;
}

// export async function getServerSideProps(ctx) {
//     return {
//         props: {
//             pageComponentProps
//         }
//     }
// }
