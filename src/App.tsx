import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/home/Home";
import PageNotFound from "./pages/pagenotfound/PageNotFound";
import { ShoppingCardProvider } from "./context/ShppingCartContext";
import ScrollToTop from "./scroll/ScrollToTop";
import Location from "./pages/location/Location";
import About from "./pages/about/About";
import Products from "./pages/products/Products";

function App() {
  return (
    <ShoppingCardProvider>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="*" element={<PageNotFound />} />
        <Route path="/location" element={<Location />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </ShoppingCardProvider>
  );
}

export default App;
