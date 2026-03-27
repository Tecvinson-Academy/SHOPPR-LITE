import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

function Navbar() {
  const { cart = [] } = useCart();
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <nav style={navStyle}>
      {/* LEFT — LINKS */}
      <div style={leftStyle}>
        <Link to="/" style={logoStyle}>
          Shoppr
        </Link>

        <div style={linksStyle}>
          <Link to="/" style={linkStyle}>Home</Link>
          <Link to="/shop" style={linkStyle}>Shop</Link>
          <Link to="/blog" style={linkStyle}>Blog</Link>
        </div>
      </div>

      {/* RIGHT — CART */}
      <div style={rightStyle}>
        <Link to="/cart" style={{ ...linkStyle, position: "relative" }}>
          🛒 Cart
          {totalItems > 0 && (
            <span style={badgeStyle}>{totalItems}</span>
          )}
        </Link>
      </div>
    </nav>
  );
}

/* ================== STYLES ================== */

const navStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "15px 30px",
  backgroundColor: "rgba(54, 95, 125, 0.95)",
  color: "#fff",
  flexWrap: "wrap",
};

const leftStyle = {
  display: "flex",
  alignItems: "center",
  gap: "25px",
};

const rightStyle = {
  display: "flex",
  alignItems: "center",
};

const logoStyle = {
  color: "#fff",
  fontWeight: "bold",
  fontSize: "1.3rem",
  textDecoration: "none",
};

const linksStyle = {
  display: "flex",
  gap: "18px",
};

const linkStyle = {
  color: "#fff",
  textDecoration: "none",
  fontWeight: "500",
};

const badgeStyle = {
  position: "absolute",
  top: "-8px",
  right: "-12px",
  backgroundColor: "#ff6b6b",
  color: "#fff",
  borderRadius: "50%",
  padding: "2px 6px",
  fontSize: "0.8rem",
};

export default Navbar;