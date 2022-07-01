import styles from "./styles/Navbar.module.css";
import Link from "next/link";
import { FaShoppingCart } from "react-icons/fa";
import { useReactiveVar } from "@apollo/client";
import { cart } from "../apolloClient/cache";

export default function Navbar() {
  const cartItems = useReactiveVar(cart);

  return (
    <nav className={styles.navbar}>
      <div className={styles.navbar__logo}>
        <h2>
          <Link href="/">Next.js Shopping cart</Link>
        </h2>
      </div>

      <ul className={styles.navbar__links}>
        <div className={styles.navbar__links__full}>
          <li>
            <Link href="/cart">
              <a className={styles.cart__link}>
                <FaShoppingCart />
                <span>Cart</span>
                <span className={styles.cartlogo__badge}>
                  {cartItems.itemCount}
                </span>
              </a>
            </Link>
          </li>
          <li>
            <Link href="/">Shop</Link>
          </li>
        </div>
        <div className={styles.navbar__links__mini}>
          <li>
            <Link href="/cart">
              <a className={styles.cart__link}>
                <FaShoppingCart />
                <span className={styles.cartlogo__badge}>
                  {cartItems.itemCount}
                </span>
              </a>
            </Link>
          </li>
        </div>
      </ul>
      <div className={styles.hamberger__menu} /* onClick={setSidehrefggle} */>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </nav>
  );
}
