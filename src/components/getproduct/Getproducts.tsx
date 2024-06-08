import axios from "axios";
import { useEffect, useState } from "react";
import { Iproducts } from "../types/Iproducts";

function Getproducts() {
  // const [products, setProducts] = useState<Iproducts[]>([]);
  // var array = [];

  useEffect(() => {
fetch('https://fakestoreapi.com/products')
.then(res => console.log(res.json()))


  }, []);

  // array = products.slice(1);

  return <div>
{/* <img src="https://cdn.dummyjson.com/products/images/beauty/Eyeshadow%20Palette%20with%20Mirror/1.png" alt="" />
<img src="https://cdn.dummyjson.com/products/images/beauty/Powder%20Canister/1.png" alt="" /> */}
  </div>;
}

export default Getproducts;
