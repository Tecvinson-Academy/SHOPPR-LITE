import { useCart } from "../context/CartContext";
import QuantityInput from "../components/QuantityInput";

import styles from "../styles/Cart.module.css";

function CartPage() {
  const {
    cart,
    removeFromCart,
    clearCart,
  } = useCart();

  /* =========================
     CALCULATIONS
  ========================== */

  const subtotal = cart.reduce(
    (sum, item) =>
      sum + item.price * item.quantity,
    0
  );

  const SHIPPING_COST = 10;
  const FREE_SHIPPING_THRESHOLD = 100;

  const shipping =
    subtotal >= FREE_SHIPPING_THRESHOLD
      ? 0
      : SHIPPING_COST;

  const tax = subtotal * 0.05;

  const total =
    subtotal + shipping + tax;

  const remaining =
    FREE_SHIPPING_THRESHOLD -
    subtotal;

  const progress = Math.min(
    (subtotal /
      FREE_SHIPPING_THRESHOLD) *
      100,
    100
  );

  /* =========================
     EMPTY CART
  ========================== */

  if (cart.length === 0) {
    return (
      <div className={styles.emptyCart}>
        <h2>Your cart is empty 🛒</h2>
        <p>Add products from the shop.</p>
      </div>
    );
  }

  /* =========================
     CLEAR CART
  ========================== */

  const handleClearCart = () => {
    const confirmClear =
      window.confirm(
        "Are you sure you want to clear the cart?"
      );

    if (confirmClear) {
      clearCart();
    }
  };

  /* =========================
     UI
  ========================== */

  return (
    <div className={styles.cartPage}>
      <h1>Your Cart</h1>
console.log(cart);
      {cart.map((item) => (
        <div
          key={item.id}
          className={styles.cartItem}
        >
          {/* IMAGE */}
          <img
            src={item.image}
            alt={item.title}
            className={styles.image}
          />

          {/* DETAILS */}
          <div className={styles.details}>
            <h3>{item.title}</h3>

            <p className={styles.price}>
              ${item.price}
            </p>

            {/* QUANTITY */}
            <QuantityInput
              item={item}
            />

            {/* REMOVE */}
            <button
              className={styles.removeBtn}
              onClick={() =>
                removeFromCart(
                  item.id
                )
              }
            >
              Remove ❌
            </button>
          </div>
        </div>
      ))}

      {/* =========================
          FREE SHIPPING BAR
      ========================== */}

      <div className={styles.shippingBox}>
        {subtotal <
        FREE_SHIPPING_THRESHOLD ? (
          <p>
            You're $
            {remaining.toFixed(2)} away
            from FREE shipping 🚚
          </p>
        ) : (
          <p>
            🎉 You qualified for FREE
            shipping!
          </p>
        )}

        <div className={styles.progressBar}>
          <div
            className={
              styles.progressFill
            }
            style={{
              width: `${progress}%`,
            }}
          />
        </div>
      </div>

      {/* =========================
          ORDER SUMMARY
      ========================== */}

      <div className={styles.summary}>
        <h2>Order Summary</h2>

        <p>
          Subtotal: $
          {subtotal.toFixed(2)}
        </p>

        <p>
          Shipping: $
          {shipping.toFixed(2)}
        </p>

        <p>
          Tax (5%): $
          {tax.toFixed(2)}
        </p>

        <hr />

        <h3>
          Total: $
          {total.toFixed(2)}
        </h3>

        <button
          className={
            styles.clearBtn
          }
          onClick={handleClearCart}
        >
          Clear Cart 🧹
        </button>
      </div>
    </div>
  );
}

export default CartPage;