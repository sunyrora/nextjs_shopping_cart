import Link from "next/link";
import styles from "./styles/CartScreen.module.css";

// Components
import CartItem from "../Components/CartItem";

const CartScreen = ({ cart }) => {
  const { cartItems, itemCount, subTotal } = cart;

  const handleRemoveFromCart = (e) => {};
  const handleQtyChange = (e) => {};

  return (
    <div className={styles.cartscreen}>
      <div className={styles.cartscreen__left}>
        <h2>Shopping Cart</h2>
        {cartItems?.length === 0 ? (
          <div>
            Your cart is empty.{" "}
            <Link href="/">
              <a>Go back</a>
            </Link>
          </div>
        ) : (
          cartItems?.map((item) => (
            <CartItem
              key={item.id}
              item={item}
              onClickDelete={handleRemoveFromCart}
              onChangeQty={handleQtyChange}
            />
          ))
        )}
      </div>
      <div className={styles.cartscreen__right}>
        <div className={styles.cartscreen__info}>
          <p>Subtotal {cart.itemCount} items</p>
          <p>${cart.subTotal}</p>
        </div>
        <div>
          <button>Proceed to Checkout</button>
        </div>
      </div>
    </div>
  );
};

export default CartScreen;
