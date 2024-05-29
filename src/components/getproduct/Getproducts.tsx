import axios from "axios"
import { useEffect, useState } from "react"
import { Iproducts } from "./Iproducts"


function Getproducts() {

    const [products , setProducts] = useState<Iproducts[]>([])


    useEffect(()=>{
    axios.get('https://fakestoreapi.com/products')
    .then(res => setProducts(res.data))
    },[])
    console.log(products)
   

  return (
    <div>
      {products.map(item =>(
        <div key={item.id}>
            <img src={item.image} alt="" className="w-20 h-20"/>
         
        </div>
      ))}
    </div>
  )
}

export default Getproducts
