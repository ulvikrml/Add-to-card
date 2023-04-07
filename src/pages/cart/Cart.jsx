import React, { useContext } from 'react'
import { ShopContext } from '../../context/shop-contect'
import CartItem from './CartItem';

const Cart = () => {
  const { cart } = useContext(ShopContext);
  
  return (
    <div className='cart'>
      <h1>Your Cart Items</h1>
      <div>
        {cart?.map((product) => {
          return <CartItem key={product.id} data={product} item={cart}></CartItem>
        })
        }
      </div>
    </div>
  )
}

export default Cart