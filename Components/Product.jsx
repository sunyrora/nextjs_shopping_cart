import styles from "./styles/Product.module.css";
import Link from "next/link";
import Image from "next/image";

const Product = ({ product }) => {
  const { _id, name, description, price, imageUrl } = product;

  return (
    <div className={styles.product}>
      <img src={imageUrl} alt={name} />
      {/* <Image src={imageUrl} width="100%" height="170px" /> */}

      <div className={styles.product__info}>
        <p className={styles.info__description}>{description}</p>
        <p className={styles.info__name}>{name}</p>
        <p className={styles.info__price}>${price}</p>
        <Link href={`/product/${_id}`}>
          <a className={styles.info__button}>View</a>
        </Link>
      </div>
    </div>
  );
};

export default Product;
