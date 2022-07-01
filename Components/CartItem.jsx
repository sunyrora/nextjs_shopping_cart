import Link from "next/link";
import { FaTrash } from "react-icons/fa";
import styles from "./styles/CartItem.module.css";

const CartItem = ({ item, onClickDelete, onChangeQty }) => {
  return (
    <div className={styles.cartitem}>
      <div className={styles.cartitem__image}>
        <img src={item.imageUrl} alt={item.name} />
      </div>
      <Link href={`/product/${item.id}`} className={styles.cartitem__name}>
        <a>
          <p>{item.name}</p>
        </a>
      </Link>

      <p className={styles.cartitem__price}>
        ${item.price * item.qty} ({item.price}/unit)
      </p>
      <select
        className={styles.cartitem__select}
        value={item.qty}
        onChange={(e) => onChangeQty(item.id, e.target.value)}
      >
        {[...Array(item.countInStock).keys()].map((x) => (
          <option key={x + 1} value={x + 1}>
            {x + 1}
          </option>
        ))}
      </select>

      <button
        className={styles.cartitem__deletebtn}
        onClick={(e) => onClickDelete(item.id)}
      >
        <FaTrash />
      </button>
    </div>
  );
};

export default CartItem;
