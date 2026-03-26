import React from "react";
import { useCart } from "../context/CartContext";

function CartPage() {
  const { cart, removeFromCart, increaseQty, decreaseQty, total } = useCart();

  if (cart.length === 0)
    return <p style={{ padding: "40px" }}>Your cart is empty.</p>;

  return (
    <div style={{ padding: "40px" }}>
      <h1>Shopping Cart</h1>
      {cart.map((item) => (
        <div
          key={item.id}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: "20px",
            borderBottom: "1px solid #ddd",
            paddingBottom: "10px",
          }}
        >
          <img
            src={item?.thumbnail || "/assets/logo.png"}
            alt={item?.title || "Product Image"}
            style={{ width: "120px", height: "120px", objectFit: "cover", borderRadius: "6px" }}
          />
          <div style={{ flex: 1, marginLeft: "20px" }}>
            <h3>{item?.title || "Untitled"}</h3>
            <p style={{ fontWeight: "bold", color: "#444" }}>
              ${((item?.price ?? 0)).toFixed(2)}
            </p>
            <div style={{ display: "flex", gap: "10px", marginTop: "10px" }}>
              <button onClick={() => decreaseQty(item.id)}>-</button>
              <span>{item.quantity}</span>
              <button onClick={() => increaseQty(item.id)}>+</button>
            </div>
          </div>
          <button
            onClick={() => removeFromCart(item.id)}
            style={{
              backgroundColor: "#ff6b6b",
              border: "none",
              color: "#fff",
              padding: "8px 12px",
              borderRadius: "6px",
              cursor: "pointer",
            }}
          >
            Remove
          </button>
        </div>
      ))}
      <h2>Total: ${total.toFixed(2)}</h2>
    </div>
  );
}

export default CartPage;