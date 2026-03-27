// src/pages/ProductPage.jsx
import { useParams } from "react-router-dom";
import { useState } from "react";
import useFetch from "../hooks/useFetch";
import { useCart } from "../context/CartContext";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import styles from "../styles/ProductPage.module.css";
import Loader from "../components/Loader";

export default function ProductPage() {
  const { id } = useParams();
  const { data: product, loading, error } = useFetch(
    `https://fakestoreapi.com/products/${id}`
  );
  const { addToCart } = useCart();
  const [qty, setQty] = useState(1);

  if (loading) return <Loader />;
  if (error) return <div>Error loading product.</div>;
  if (!product) return <div>Product not found.</div>;

  const handleAddToCart = () => {
    addToCart(
      {
        id: product.id,
        title: product.title,
        price: product.price,
        image: product.image || product.thumbnail,
      },
      qty
    );
    toast.success(`${product.title} added to cart!`, { autoClose: 2000 });
  };

  const increaseQty = () => setQty((prev) => prev + 1);
  const decreaseQty = () => setQty((prev) => (prev > 1 ? prev - 1 : 1));

  return (
    <div className={styles.productPage}>
      <div className={styles.imageContainer}>
        <img src={product.image || product.thumbnail} alt={product.title} />
      </div>

      <div className={styles.details}>
        <h1>{product.title}</h1>
        <p className={styles.price}>${product.price.toFixed(2)}</p>
        <p className={styles.description}>{product.description}</p>
        <p>Stock: {product.stock}</p>

        <div className={styles.rating}>
          {Array.from({ length: 5 }, (_, i) => (
            <span
              key={i}
              style={{
                color: i < Math.round(product.rating?.rate || 0)
                  ? "#ffc107"
                  : "#ddd",
              }}
            >
              ★
            </span>
          ))}
          <span style={{ marginLeft: "8px" }}>
            {(product.rating?.rate || 0).toFixed(1)}
          </span>
        </div>

        {/* QUANTITY + ADD TO CART */}
        <div className={styles.cartControls}>
          <div className={styles.qtyContainer}>
            <button onClick={decreaseQty} className={styles.qtyBtn}>
              -
            </button>
            <input
              type="number"
              min="1"
              value={qty}
              onChange={(e) => setQty(Number(e.target.value))}
            />
            <button onClick={increaseQty} className={styles.qtyBtn}>
              +
            </button>
          </div>

          <button onClick={handleAddToCart} className={styles.addToCartBtn}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}