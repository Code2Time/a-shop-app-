import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/home/Home";
import PageNotFound from "./pages/pagenotfound/PageNotFound";
import { ShoppingCardProvider } from "./context/ShppingCartContext";
import ScrollToTop from "./scroll/ScrollToTop";
import Location from "./pages/location/Location";
import About from "./pages/about/About";
import Store from "./pages/Store/Store";
import Product from "./pages/product/Product";
import Cart from "./pages/cart/Cart";

function App() {
  return (
    <ShoppingCardProvider>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Store" element={<Store />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/location" element={<Location />} />
        <Route path="/about" element={<About />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </ShoppingCardProvider>
  );
}

export default App;
