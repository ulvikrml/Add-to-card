import React, { useContext } from 'react'
import { ShopContext } from '../../context/shop-contect'

const Product = (props) => {
    const { id, name, image, price } = props.data
    const { addToCart, cart } = useContext(ShopContext)

    const itemInCartNumberOfUnit = cart.find((item) => item.id === id)?.numberOfUnit;
    return (
        <div className='w-60 bg-white rounded-lg shadow-md p-4 mb-10' key={id}>
            <h3 className='text-gray-900 font-bold text-lg mb-2 h-12'>{name}</h3>
            <img className='w-48 h-48 object-cover object-center mx-auto' src={image} alt={name} />
            <div className='flex justify-between items-center mt-2'>
                <div className='text-gray-700 font-bold text-xl'>${price}</div>
                <div>
                    <button className='px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600' onClick={() => addToCart(id)}>
                        Add to Cart
                    <span className='pl-2 text-white'>{itemInCartNumberOfUnit ? `(${itemInCartNumberOfUnit})` : ''}</span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Product