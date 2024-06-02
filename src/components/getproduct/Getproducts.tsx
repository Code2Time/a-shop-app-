import axios from "axios";
import { useEffect, useState } from "react";
import { Iproducts } from "../types/Iproducts";

function Getproducts() {
  const [products, setProducts] = useState<Iproducts[]>([]);
  var array = [];

  useEffect(() => {
    axios
      .get("https://api.escuelajs.co/api/v1/categories ")
      .then((res) => setProducts(res.data));
  }, []);

  array = products.slice(1);

  return (
    <div>
      {array.map((item) => (
        <div key={item.id}>
          <img src={item.image} alt="" className="w-20 h-20" />
          <h1>{item.price}</h1>
        </div>
      ))}
    </div>
  );
}

export default Getproducts;
