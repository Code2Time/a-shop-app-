import { Link, useParams } from "react-router-dom";
import { ProductsData } from "../Store/ProductsData";
import { useEffect, useState } from "react";
import { Iallproducts } from "../../components/types/Iproducts";
import Navbar from "../../components/navbar/Navbar";
import Head from "../../components/Head/Head";
import './product.css'
import Container from "../../components/container/Container";
import Suggestion from "../../components/suggestion/Suggestion";



function Product() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const param = useParams<{ id: any }>();
  const [products, setProducts] = useState<Iallproducts[]>([]);
  useEffect(() => {
    setProducts(ProductsData);
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);


  
  function getRandomInt(min : number , max : number) {
    return  Math.floor(Math.random() * (max - min + 1)) + min;
  }

  let selected = products.filter((item) => item.id == param.id);

  let suggestion =  products.filter((item) => item.id == getRandomInt(1 , 30));


  

  return (
    <>
          <div className="bg-blue-three dark:bg-bg">
            <Head />
            <Navbar />
          </div>
    <Container>
      {selected.map((item) => (
        <div key={item.id}>
          <div className="productInfo-container grid grid-cols-12 h-auto overflow-hidden mt-2 sm:mt-20 gap-4 p-5">
            <div className="product-info col-span-12 sm:col-span-7 smd:col-span-6 mx-auto  ">
              <div className="flex flex-col gap-2 p-2 ">
                <h1 className="text-blue-three poppins text-xl line-clamp-1">{item.name}</h1>
                <p className="text-blue-four dark:text-my-white line-clamp-4 sm:line-clamp-3 md:line-clamp-none text-justify md:text-xl mt-5 ">{item.description}</p>
                <h3 className="flex gap-10 flex-row mx-auto sm:text-xl md:text-2xl mt-5 sm:mt-10 md:mt-14 dark:text-my-white"><span className="text-red-600 line-through">{item.discount}$</span>{item.price}$</h3>
                <Link className=" mt-2 smd:mt-10  " to='/'>
                <button className="py-1 poppins transition-all w-full bg-slate-300 dark:bg-transparent dark:hover:shadow-md dark:hover:shadow-blue-three text-blue-four hover:text-my-white hover:bg-blue-three dark:hover:bg-transparent    dark:text-blue-three  rounded-md text-xs sm:text-base dark:border-b-blue-two shadow-sm  shadow-blue-three">
                  Add to cart{" "}
                </button>
              </Link>
              </div>
            </div>
            <div className="product-img col-span-12 sm:col-span-5 smd:col-span-6 mx-auto  "><img src={item.img} alt="product-img" className=" size-60 sm:size-72 md:size-96 cursor-pointer  " /></div>
           
          </div>
        </div>

      ))}
      <div className="mt-5 ">
        <h1>
          suggestion products
        </h1>
      </div>
      <div className="flex h-auto   p-5 suggestion-container" >
      {
  suggestion.map(sug =>(
    <Suggestion {...sug} />
   
  ))
}
      </div>

</Container>
    </>
  );
}

export default Product;
