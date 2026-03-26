import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

function ProductCard({ product }) {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <div
      style={{
        border: "1px solid #ddd",
        borderRadius: "8px",
        padding: "15px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        backgroundColor: "#fff",
      }}
    >
      <Link to={`/product/${product.id}`}>
        <img
          src={product?.thumbnail || "/assets/logo.png"}
          alt={product?.title || "Product Image"}
          style={{ width: "100%", height: "200px", objectFit: "cover", borderRadius: "6px" }}
        />
      </Link>
      <div style={{ marginTop: "10px", flexGrow: 1 }}>
        <h3 style={{ fontSize: "1rem", margin: "5px 0" }}>{product?.title || "Untitled"}</h3>
        <p style={{ fontWeight: "bold", margin: "5px 0", color: "#444" }}>
          ${((product?.price ?? 0)).toFixed(2)}
        </p>
      </div>
      <button
        onClick={handleAddToCart}
        style={{
          backgroundColor: "rgba(54, 95, 125, 0.8)",
          color: "#fff",
          border: "none",
          borderRadius: "6px",
          padding: "10px",
          cursor: "pointer",
          marginTop: "10px",
        }}
      >
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;