import React, { useContext } from 'react'
import { ShopContext } from '../../context/shop-contect'

const Product = (props) => {
    const {id,name,image,price} = props.data
    const {addToCart} = useContext(ShopContext)
    return (
        <div className='w-60' key={id}>
            <h3>{name}</h3>
            <img className='w-8/12' src={image} alt={name} />
            <p>{price}</p>
            <button className='p-1 bg-red-500 hover:bg-red-300' onClick={()=>addToCart(id)}>Add to Cart</button>
        </div>
    )
}

export default Product