import { useState } from "react";
import ProductCard from "../components/ProductCard";
import Loader from "../components/Loader";
import { useFetch } from "../hooks/useFetch";

function ShopPage() {

  const { data, loading, error } =
    useFetch("https://dummyjson.com/products?limit=30");

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");

  if (loading) return <Loader />;

  if (error) {
    return <p style={{ padding: "40px" }}>
      Error loading products.
    </p>;
  }

  const filteredProducts =
    data.products.filter(product => {

      const matchSearch =
        product.title
          .toLowerCase()
          .includes(search.toLowerCase());

      const matchCategory =
        category === "all" ||
        product.category === category;

      return matchSearch && matchCategory;

    });

  return (

    <div style={{ padding: "40px" }}>

      <h1 style={{
        textAlign: "center",
        marginBottom: "30px"
      }}>
        🛍 Shop Products
      </h1>

      {/* SEARCH + FILTER */}

      <div className="filter-bar">

        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
        />

        <select
          value={category}
          onChange={(e) =>
            setCategory(e.target.value)
          }
        >

          <option value="all">
            All
          </option>

          <option value="beauty">
            Beauty
          </option>

          <option value="fragrances">
            Fragrances
          </option>

          <option value="furniture">
            Furniture
          </option>

        </select>

      </div>

      {/* PRODUCTS */}

      <div className="product-grid">

        {filteredProducts.map(product => (

          <ProductCard
            key={product.id}
            product={product}
          />

        ))}

      </div>

    </div>

  );

}

export default ShopPage;