import axios from "axios"
import { useEffect, useState } from "react"
import { Iproducts } from "./Iproducts"


function Getproducts() {

    const [products , setProducts] = useState<Iproducts[]>([])


    useEffect(()=>{
    axios.get('https://api.escuelajs.co/api/v1/products ')
    .then(res => setProducts(res.data))
    },[])
    console.log(products)
   

  return (
    <div>
      {products.map(item =>(
        <div key={item.id}>
            <img src={item.images[1]} alt="" className="w-20 h-20"/>
           <h1>{item.price}</h1>
        </div>
      ))}
    </div>
  )
}

export default Getproducts
