import "./App.css";

import { Route, Routes } from "react-router";

import AboutHer from "./pages/About/AboutHer";
import BlogPage from "./pages/Blog/BlogPage";
import BlogPostPage from "./pages/Blog/BlogPostPage";
import Footer from "./components/Footer/Footer";
import { Helmet } from "react-helmet-async";
import IndividualProduct from "./pages/IndividualProduct/IndividualProduct";
import LandingPage from "./pages/LandingPage/LandingPage";
import Navbar from "./components/Navbar/Navbar";
import ProductSubCategories from "./pages/ProductSubCategories/ProductSubCategories";
import Products from "./pages/Products/Products";
import Reviews from "./pages/Reviews/Reviews";
import ScrollToTop from "./ScrollToTop";
import SearchResults from "./pages/SearchResults/SearchResults"; // 🆕

function App() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.svg" />
      </Helmet>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<AboutHer />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/search" element={<SearchResults />} /> {/* 🆕 */}
        <Route path="/products/:id" element={<ProductSubCategories />} />
        <Route
          path="/products/:id/:productId"
          element={<IndividualProduct />}
        />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:slug" element={<BlogPostPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
