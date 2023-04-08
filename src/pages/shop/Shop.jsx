import React from 'react'
import {products} from '../../products'
import Product from './Product'

const Shop = () => {
  return (
    <div className='px-28 mt-10'>
        <div className='products flex flex-wrap justify-between mt-5'>
            {products?.map((product)=> <Product key={product.id} data={product}></Product> )}
        </div>
    </div>
  )
}

export default Shop