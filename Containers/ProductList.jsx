import Product from "../Components/Product";
import styles from "./styles/ProductList.module.css";

export default function ProductList({ products }) {
  return (
    <>
      <div className={styles.homescreen}>
        <h2 className={styles.homescreen__title}>Latest Products</h2>

        <div className={styles.homescreen__products}>
          {products?.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </div>
      </div>
    </>
  );
}
