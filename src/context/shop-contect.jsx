import React, { createContext } from 'react'
import { products } from '../products';
import useLocalStorageState from '../hooks/useLocalStorageState';

export const ShopContext = createContext(null)

const ShopContextProvider = (props) => {
    const [cart, setCart] = useLocalStorageState('cart', [])

    const addToCart = (itemId) => {
        const product = products.find(item => item.id === itemId);
        let duplicatedCart;

        if (cart.length) {
            duplicatedCart = [...cart];
            if (cart.some((i) => i.id === itemId)) {
                duplicatedCart.forEach(item => {
                    if (item.id === itemId) {
                        item.numberOfUnit = item.numberOfUnit + 1;
                    }
                })
            } else {
                duplicatedCart.push({ ...product, numberOfUnit: 1 })
            }
        } else {
            duplicatedCart = [{ ...product, numberOfUnit: 1 }];
        }

        setCart(duplicatedCart)
    }

    const removeFromCart = (itemId) => {
        const cartItemIndex = cart.findIndex((item) => item.id === itemId);
        if (cartItemIndex > -1) {
            const updatedCart = cart.filter((item, index) => index !== cartItemIndex);
            setCart(updatedCart);
        }
    }
    
    const incrementCartItem = (itemId) => {
        const updatedCart = cart.map(item => {
            if (item.id === itemId) {
                return { ...item, numberOfUnit: Number(item.numberOfUnit) + 1 };
            }
            return item;
        });
        setCart(updatedCart)
        // setCart(prevCart => {
        //     const updatedCart = prevCart.map(item => {
        //         if (item.id === itemId) {
        //             return { ...item, numberOfUnit: Number(item.numberOfUnit) + 1 };
        //         }
        //         return item;
        //     });
        //     return updatedCart;
        // });
    };

    const decrementCartItem = (itemId) => {
        const updatedCart = cart.map((item) => {
            if (item.id === itemId && item.numberOfUnit > 1) {
                return { ...item, numberOfUnit: Number(item.numberOfUnit) - 1 };
            }
            return item;
          });
          setCart(updatedCart)
    };

    const updateCartItem = (itemId, newNumberOfUnits) => {
        const updatedCart = cart.map((item) => {
          if (item.id === itemId) {
            return { ...item, numberOfUnit: newNumberOfUnits };
          }
          return item;
        });
        setCart(updatedCart);
      };

    console.log(cart);
    const contextValue = { cart, addToCart, removeFromCart, incrementCartItem, decrementCartItem, updateCartItem }
    return (<ShopContext.Provider value={contextValue}>{props.children}</ShopContext.Provider>
    )
}

export default ShopContextProvider;