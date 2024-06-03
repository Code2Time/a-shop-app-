import React from 'react'
import ProductsItem from '../productsitem/ProductsItem'

function Products() {
  return (
    <div className='grid grid-cols-12 gap-1 mt-32'>
      <ProductsItem />
      <ProductsItem />
      <ProductsItem />
      <ProductsItem />
    </div>
  )
}


export default Products
