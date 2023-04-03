// import React, {createContext, useState} from 'react'
// import { products } from '../products';

// export const ShopContext = createContext(null)

// const getDefaultCart = () =>{
//     let cart = {};
//     for (let i=1; i<products.length; i++){
//         cart[i] = 0
//     }
//     return cart; 
// }

// const ShopContextProvider = (props) => {
//     const [cartItems, setCartItems] = useState(getDefaultCart())

//     const addToCart = (itemId) =>{
//         setCartItems((prev)=>({...prev, [itemId]: prev[itemId] + 1}))
//     }

//     const removeFromCart = (itemId) =>{
//         setCartItems((prev)=>({...prev, [itemId]: prev[itemId] - 1}))
//     }
// console.log(cartItems);
//     const contextValue = {cartItems, addToCart, removeFromCart}
//     return (<ShopContext.Provider value={contextValue}>{props.children}</ShopContext.Provider>
//   )
// }

// export default ShopContextProvider;


import React, { createContext, useState } from 'react'
import { products } from '../products';

export const ShopContext = createContext(null)

const ShopContextProvider = (props) => {
    const [cart, setCart] = useState([])

    const addToCart = (itemId) => {
        const product = products.find(item => item.id === itemId);
        let duplicatedCart = cart
        // console.log(duplicatedCart);
        if (cart.some((i) => i.id === itemId)) {
            duplicatedCart.forEach(item => {
                if (item.id === itemId) {
                    item.numberOfUnit = item.numberOfUnit + 1;
                    setCart(duplicatedCart)
                }
            })
        }
        else{
            duplicatedCart.push({...product, numberOfUnit: 1})
            // setCart([{
            //     ...product,
            //     numberOfUnit: 1
            // }])
            setCart(duplicatedCart)
        }
        console.log(cart);
    }

    const removeFromCart = (itemId) => {
        const product = products.find(item => item.id === itemId);
        if (cart.some((i) => i.id === itemId)) {
            cart.forEach(item => {
                if (item.id === itemId) {
                    item.numberOfUnits = item.numberOfUnits - 1;
                }
            })
        }
        else{
            setCart({
                ...product,
                numberOfUnit: 1
            })

        }
    }
    

    const contextValue = { cart, addToCart, removeFromCart }
    return (<ShopContext.Provider value={contextValue}>{props.children}</ShopContext.Provider>
    )
}

export default ShopContextProvider;