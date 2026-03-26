import { Link } from "react-router-dom";
import "../styles/Home.module.css";

function HomePage() {
  return (
    <div style={{ padding: "40px", textAlign: "center" }}>

      <h1>
        🏠 Welcome to Shoppr Lite
      </h1>

      <p style={{ marginTop: "20px" }}>
        Discover amazing products at the best prices.
      </p>

      <Link to="/shop">
        <button
          style={{
            marginTop: "30px",
            padding: "12px 25px",
            borderRadius: "8px",
            border: "none",
            background: "rgba(0,123,255,0.9)",
            color: "#fff",
            fontSize: "16px",
            cursor: "pointer"
          }}
        >
          Go To Shop 🛍
        </button>
      </Link>

    </div>
  );
}

export default HomePage;