import axios from "axios";
import { useEffect, useState } from "react";
import { Iproducts } from "../types/Iproducts";

function Getproducts() {
  const [products, setProducts] = useState<Iproducts[]>([]);
  // var array = [];

  useEffect(() => {
fetch('https://dummyjson.com/products/categories')
.then(res => res.json())
.then(console.log);
  }, []);

  // array = products.slice(1);

  return <div>

  </div>;
}

export default Getproducts;
