import axios from "axios";
import { useEffect, useState } from "react";
import { Iproducts } from "../types/Iproducts";

function Getproducts() {
  const [products, setProducts] = useState<Iproducts[]>([]);
  // var array = [];

  useEffect(() => {
    axios
      .get(`https://api.escuelajs.co/api/v1/products?offset=0&limit=10`)
      .then((res) => setProducts(res.data));
  }, []);
console.log(products)
  // array = products.slice(1);

  return <div>

  </div>;
}

export default Getproducts;
