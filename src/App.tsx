import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/home/Home";
import PageNotFound from "./pages/pagenotfound/PageNotFound";
import {  ShoppingCardProvider } from "./context/ShppingCartContext";

function App() {
  return (
    <ShoppingCardProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </ShoppingCardProvider>
  );
}

export default App;
