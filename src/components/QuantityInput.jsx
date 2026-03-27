import { useCart } from "../context/CartContext";

function QuantityInput({ item }) {
  const {
    increaseQty,
    decreaseQty,
  } = useCart();

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "10px",
        marginTop: "8px",
      }}
    >
      <button
        onClick={() =>
          decreaseQty(item.id)
        }
      >
        −
      </button>

      <span>
        {item.quantity}
      </span>

      <button
        onClick={() =>
          increaseQty(item.id)
        }
      >
        +
      </button>
    </div>
  );
}

export default QuantityInput;