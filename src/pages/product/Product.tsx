import { useParams } from "react-router-dom"
import { ProductsData } from "../Store/ProductsData"
import { useEffect, useState } from "react"
import { Iallproducts } from "../../components/types/Iproducts"


function Product() {
    const param =  useParams<{id : number}>()
    const [products , setProducts]=useState<Iallproducts[]>([])
useEffect(()=>{
    setProducts(ProductsData)
},[])
console.log(products)

let pro = products.find(item=>(
    item.id ==param.id
))
console.log(pro)

  return (
    <div>
<img src={pro?.img} alt="" />
    </div>
  )
}

export default Product
