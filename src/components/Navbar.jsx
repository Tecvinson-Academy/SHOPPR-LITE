import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

function Navbar() {
  const { cart = [] } = useCart(); // <-- default to empty array

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <nav style={{ display: "flex", justifyContent: "space-between", padding: "15px 40px", backgroundColor: "rgba(54, 95, 125, 0.9)", color: "#fff" }}>
      <div>
        <Link to="/" style={{ color: "#fff", textDecoration: "none", fontWeight: "bold", fontSize: "1.2rem" }}>
          Shoppr
        </Link>
      </div>
      <div style={{ display: "flex", gap: "20px" }}>
        <Link to="/" style={{ color: "#fff", textDecoration: "none" }}>Home</Link>
        <Link to="/shop" style={{ color: "#fff", textDecoration: "none" }}>Shop</Link>
        <Link to="/blog" style={{ color: "#fff", textDecoration: "none" }}>Blog</Link>
        <Link to="/cart" style={{ color: "#fff", textDecoration: "none", position: "relative" }}>
          Cart
          {totalItems > 0 && (
            <span style={{
              position: "absolute",
              top: "-8px",
              right: "-12px",
              backgroundColor: "#ff6b6b",
              color: "#fff",
              borderRadius: "50%",
              padding: "2px 6px",
              fontSize: "0.8rem"
            }}>
              {totalItems}
            </span>
          )}
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;