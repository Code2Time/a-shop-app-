import { useParams } from "react-router-dom";
import { ProductsData } from "../Store/ProductsData";
import { useEffect, useState } from "react";
import { Iallproducts } from "../../components/types/Iproducts";
import Navbar from "../../components/navbar/Navbar";
import Head from "../../components/Head/Head";
import './product.css'
function Product() {
  const param = useParams<{ id: any }>();
  const [products, setProducts] = useState<Iallproducts[]>([]);
  useEffect(() => {
    setProducts(ProductsData);
  }, []);

  let selected = products.filter((item) => item.id == param.id);

  // console.log(products)

  return (
    <>
      {selected.map((item) => (
        <div key={item.id}>
          <div className="bg-blue-three dark:bg-bg">
            <Head />
            <Navbar />
          </div>
          <div className="productInfo-container grid grid-cols-12 h-auto overflow-hidden mt-2 sm:mt-20 gap-4 p-5">
            <div className="product-info col-span-12 sm:col-span-7 smd:col-span-6 mx-auto  ">
              <div className="flex flex-col gap-2 p-2">
                <h1 className="text-blue-three">{item.name}</h1>
                <p className="text-blue-four dark:text-my-white">{item.description}</p>
              </div>
            </div>
            <div className="product-img col-span-12 sm:col-span-5 smd:col-span-6 mx-auto  "><img src={item.img} alt="product-img" className=" size-60 sm:size-72 md:size-96 cursor-pointer  " /></div>
          </div>
        </div>
      ))}
    </>
  );
}

export default Product;
