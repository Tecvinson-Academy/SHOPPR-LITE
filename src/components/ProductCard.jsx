// src/components/ProductCard.jsx
import { Link } from "react-router-dom";
import styles from "../styles/ProductCard.module.css";

export default function ProductCard({ product, handleAdd }) {
  return (
    <div className={styles.productCard}>
      <Link to={`/product/${product.id}`} className={styles.link}>
        <div className={styles.imageWrapper}>
          <img
            src={product.image || product.thumbnail}
            alt={product.title}
            className={styles.productImage}
          />
        </div>
        <h3 className={styles.title}>{product.title}</h3>
        <p className={styles.price}>${product.price}</p>
      </Link>

      <button
        className={styles.addToCartBtn}
        onClick={() => handleAdd(product)}
      >
        Add to Cart
      </button>
    </div>
  );
}