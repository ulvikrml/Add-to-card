// import React, { useContext, useEffect } from 'react'
// import { ShopContext } from '../../context/shop-contect'

// const CartItem = (props) => {
//     const { id, name, numberOfUnit, image } = props.data
//     const { cart } = props.item

//     const { removeFromCart, incrementCartItem, decrementCartItem} = useContext(ShopContext);

//     return (
//         <div className='mt-3 flex items-center'>
//             <img className='w-24' src={image} alt={name} />
//             <p className='px-3'>{name}</p>
//             <button onClick={()=>incrementCartItem(id)}>+</button>
//             <p className='px-3'>{numberOfUnit}</p>
//             <button onClick={()=>decrementCartItem(id)}>-</button>
//             <button className='px-3' onClick={()=>removeFromCart(id)}>x</button>
//         </div>
//     )
// }

// export default CartItem

import { useContext } from 'react';
import { ShopContext } from '../../context/shop-contect'


const CartItem = (props) => {
    const { id, name, numberOfUnit, image, price } = props.data
    const { removeFromCart, incrementCartItem, decrementCartItem, updateCartItem } = useContext(ShopContext);

    const handleRemoveFromCart = () => {
        removeFromCart(id);
    };

    const handleIncrementCartItem = () => {
        incrementCartItem(id);
    };

    const handleDecrementCartItem = () => {
        if (numberOfUnit === 1) {
            removeFromCart(id);
        } else {
            decrementCartItem(id);
        }
    };

    const handleInputChange = (event) => {
        const newNumberOfUnits = parseInt(event.target.value);
        updateCartItem(id, newNumberOfUnits);
    };

    return (
        <div className="flex items-center space-x-4">
            <img className="w-20 h-20 object-cover rounded-md" src={image} alt={name} />
            <div className="flex-grow">
                <h2 className="text-gray-800 font-medium">{name}</h2>
                <p className="text-gray-500">${(Number(price) * numberOfUnit).toFixed(2)}</p>
                {/* <div className="flex items-center mt-2">
                    <button
                        className="bg-gray-200 text-gray-700 rounded-md p-1 disabled:opacity-50"
                        onClick={handleDecrementCartItem}
                        disabled={numberOfUnit === 1}
                    >-</button>
                    <span className="mx-2">{numberOfUnit}</span>
                    <div className="flex items-center mt-2">
                        <input type="number" min="1" value={numberOfUnit} onChange={handleInputChange} className="w-16 border-gray-400 rounded-md text-gray-800 text-center" />
                    </div>
                    <button
                        className="bg-gray-200 text-gray-700 rounded-md p-1"
                        onClick={handleIncrementCartItem}
                    >+</button>
                </div> */}
                <div>
                    <button
                        className="text-gray-600 focus:outline-none focus:text-gray-700"
                        onClick={() => decrementCartItem(id)}
                    >-
                    </button>

                    <input
                        type="number"
                        className="border rounded-md w-16 text-center"
                        value={numberOfUnit}
                        onChange={(e) => updateCartItem(id, e.target.value)}
                    />

                    <button
                        className="text-gray-600 focus:outline-none focus:text-gray-700"
                        onClick={() => incrementCartItem(id)}
                    >+
                    </button>
                </div>
            </div>

            <button
                className="bg-red-500 text-white rounded-md px-3 py-1"
                onClick={handleRemoveFromCart}
            >Remove</button>
        </div>
    );
};

export default CartItem;