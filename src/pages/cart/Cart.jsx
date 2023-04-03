import React, { useContext } from 'react'
import { ShopContext } from '../../context/shop-contect'
import CartItem from './CartItem';

const Cart = () => {
  const { cart } = useContext(ShopContext);
  console.log(cart);
  return (
    <div className='cart'>
      <h1>Your Cart Items</h1>
      <div>
        {cart.map((product) => {
          return <CartItem key={product.id} data={product}></CartItem>
        })
        }
      </div>
    </div>
  )
}

export default Cart