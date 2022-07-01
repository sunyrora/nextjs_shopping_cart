import { useState } from "react";
import styles from "./styles/ProductDetails.module.css";

import * as CartMutations from "../apolloClient/cartMutations";

const ProductDetails = ({ product }) => {
  const [qty, setQty] = useState(1);

  return (
    <div className={styles.productscreen}>
      <div className={styles.productscreen__left}>
        <div className={styles.left__image}>
          <img src={product.imageUrl} alt={product.name} />
        </div>
        <div className={styles.left__info}>
          <p className={styles.left__name}>{product.name}</p>
          <p>Price: ${product.price}</p>
          <p>Description: {product.description}</p>
        </div>
      </div>
      <div className={styles.productscreen__right}>
        <div className={styles.right__info}>
          <p>
            Price: <span>${product.price}</span>
          </p>
          <p>
            Status:
            <span>
              {product.countInStock
                ? `In Stock (${product.countInStock})`
                : `Out of Stock`}
            </span>
          </p>
          <p>
            Qty
            <select
              value={qty}
              onChange={(e) => {
                setQty(e.target.value);
              }}
            >
              {[...Array(product.countInStock).keys()].map((x) => (
                <option key={x + 1} value={x + 1}>
                  {x + 1}
                </option>
              ))}
            </select>
          </p>
          <p>
            <button
              type="button"
              onClick={(e) => CartMutations.addToCart(product, qty)}
            >
              Add to cart
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
