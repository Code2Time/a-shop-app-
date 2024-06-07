import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/home/Home";
import PageNotFound from "./pages/pagenotfound/PageNotFound";
import { ShoppingCardProvider } from "./context/ShppingCartContext";
import Categories from "./pages/categories/Categories";
import ScrollToTop from "./scroll/ScrollToTop";
import Location from "./pages/location/Location";

function App() {
  return (
    <ShoppingCardProvider>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="*" element={<PageNotFound />} />
        <Route path="/location" element={<Location />} />
      </Routes>
    </ShoppingCardProvider>
  );
}

export default App;
