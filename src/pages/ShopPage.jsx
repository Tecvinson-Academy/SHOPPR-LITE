import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import useFetch from "../hooks/useFetch";
import styles from "../styles/Shop.module.css";
import { toast } from "react-toastify";

function ShopPage() {
  const { data: products, loading, error } = useFetch(
    "https://fakestoreapi.com/products"
  );

  const { addToCart } = useCart();

  // Filters & Sorting
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [sortOption, setSortOption] = useState("default");

  // Safe: always call hooks first
  const filteredProducts = useMemo(() => {
    if (!products) return [];

    let result = products.filter((product) => {
      const matchSearch = product.title
        .toLowerCase()
        .includes(search.toLowerCase());
      const matchCategory = category === "all" || product.category === category;
      return matchSearch && matchCategory;
    });

    // Sorting
    switch (sortOption) {
      case "topRated":
        result.sort((a, b) => (b.rating?.rate || 0) - (a.rating?.rate || 0));
        break;
      case "priceLow":
        result.sort((a, b) => a.price - b.price);
        break;
      case "priceHigh":
        result.sort((a, b) => b.price - a.price);
        break;
      case "featured":
        result.sort(() => Math.random() - 0.5);
        break;
      default:
        break;
    }

    return result;
  }, [products, search, category, sortOption]);

  const handleAdd = (product) => {
    addToCart(product);
    toast.success("Product added to cart 🛒");
  };

  // Conditional UI after hooks
  if (loading) return <p>Loading products...</p>;
  if (error) return <p>Error loading products</p>;

  return (
    <div className={styles.shopPage}>
      <h1>Shop</h1>

      {/* SEARCH + CATEGORY */}
      <div className={styles.filters}>
        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className={styles.search}
        />
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className={styles.select}
        >
          <option value="all">All Categories</option>
          <option value="men's clothing">Men's Clothing</option>
          <option value="women's clothing">Women's Clothing</option>
          <option value="electronics">Electronics</option>
          <option value="jewelery">Jewelery</option>
        </select>
      </div>

      {/* TOP BAR: TOTAL PRODUCTS + SORT */}
      <div className={styles.topBar}>
        <div className={styles.totalProducts}>
          Total Products: {filteredProducts.length}
        </div>
        <div className={styles.sortOptions}>
          <select
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
          >
            <option value="topRated">Top Rated</option>
            <option value="featured">Featured</option>
            <option value="priceLow">Price: Low → High</option>
            <option value="priceHigh">Price: High → Low</option>
          </select>
        </div>
      </div>

      {/* PRODUCTS GRID */}
      <div className={styles.productsGrid}>
        {filteredProducts.map((product) => (
          <div key={product.id} className={styles.productCard}>
            <Link
              to={`/product/${product.id}`}
              className={styles.productLink}
            >
              <div className={styles.imageWrapper}>
                <img
                  src={product.image || product.thumbnail}
                  alt={product.title}
                  className={styles.productImage}
                />
              </div>
            </Link>

            <h3 className={styles.productName}>{product.title}</h3>

            {/* Rating */}
            <p className={styles.rating}>
              {Array.from({ length: 5 }, (_, i) => (
                <span
                  key={i}
                  style={{
                    color:
                      i < Math.round(product.rating?.rate || 0)
                        ? "#ffc107"
                        : "#ddd",
                  }}
                >
                  ★
                </span>
              ))}{" "}
              <span style={{ marginLeft: "5px", color: "#111" }}>
                {product.rating?.rate?.toFixed(1) || "0.0"}
              </span>
            </p>

            <p className={styles.productPrice}>${product.price}</p>

            <button
              className={styles.addToCartBtn}
              onClick={() => handleAdd(product)}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ShopPage;