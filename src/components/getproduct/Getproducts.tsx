import axios from "axios";
import { useEffect, useState } from "react";
import { Iproducts } from "../types/Iproducts";

function Getproducts() {
  const [products, setProducts] = useState<Iproducts[]>([]);
  // var array = [];

  useEffect(() => {
    axios
      .get('https://dummyjson.com/products?limit=20&skip=10')
      .then((res) => console.log(res.data.products));
  }, []);
console.log(products)
  // array = products.slice(1);

  return <div>

  </div>;
}

export default Getproducts;
