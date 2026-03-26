import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";


import HomePage from "./pages/HomePage";
import ShopPage from "./pages/ShopPage";
import ProductPage from "./pages/ProductPage";
import CartPage from "./pages/CartPage";
import BlogPage from "./pages/BlogPage";
import PostPage from "./pages/PostPage";
import NotFoundPage from "./pages/NotFoundPage";
import Footer from "./components/Footer";

function App() {
  return (
    <div>

      <Navbar />

      <Routes>

        {/* Home */}
        <Route
          path="/"
          element={<HomePage />}
        />

        {/* Shop */}
        <Route
          path="/shop"
          element={<ShopPage />}
        />

        {/* Product Details */}
        <Route
          path="/product/:id"
          element={<ProductPage />}
        />

        {/* Cart */}
        <Route
          path="/cart"
          element={<CartPage />}
        />

        {/* Blog */}
        <Route
          path="/blog"
          element={<BlogPage />}
        />

        <Route
          path="/post/:id"
          element={<PostPage />}
        />

        {/* Not Found */}
        <Route
          path="*"
          element={<NotFoundPage />}
           
        />
        <Route
          path="*"
          element={<Footer/>}>
        </Route>

      </Routes>

    </div>
  );
}

export default App;