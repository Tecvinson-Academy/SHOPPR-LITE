import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import HomePage from "./pages/HomePage";
import ShopPage from "./pages/ShopPage";
import CartPage from "./pages/CartPage";
import BlogPage from "./pages/BlogPage";
import ProductPage from "./pages/ProductPage";
import PostPage from "./pages/PostPage";
import NotFoundPage from "./pages/NotFoundPage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* Home */}
          <Route index element={<HomePage />} />

          {/* Shop */}
          <Route path="shop" element={<ShopPage />} />

          {/* Single Product */}
          <Route path="product/:id" element={<ProductPage />} />

          {/* Cart */}
          <Route path="cart" element={<CartPage />} />

          {/* Blog */}
          <Route path="blog" element={<BlogPage />} />

          {/* Blog Post */}
          <Route path="blog/:id" element={<PostPage />} />

          {/* 404 */}
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>

      {/* Toast container — only once in your app */}
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
}

export default App;