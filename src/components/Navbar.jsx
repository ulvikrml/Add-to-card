import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ShoppingCart } from 'phosphor-react'
import { ShopContext } from '../context/shop-contect'

const Navbar = () => {
  const { cart } = useContext(ShopContext)
  const cartLength = cart?.length

  return (
    // <div className='w-full flex bg-slate-400 h-12 justify-end pr-10'>
    //   <Link className='pr-5' to={'/'}>Shop</Link>
    //   <Link className='relative' to={'/cart'}>
    //     <ShoppingCart size={32}  />
    //     <span className='absolute bottom-2 right-0 bg-red-800 rounded-full p-1 w-5 h-5 flex justify-center items-center'>{cartLength}</span>
    //   </Link>
    // </div>
    <div className='flex justify-between items-center bg-slate-400 h-16 px-10'>
      <Link to='/' className='text-gray-100 font-bold text-xl'>Duka Market</Link>
      <div className='flex items-center'>
        <Link to='/cart' className='relative text-gray-100 mr-6'>
          <ShoppingCart size={24} />
          {cartLength > 0 && (
            <span className='absolute top-0 right-0 bg-red-800 rounded-full p-1 w-4 h-4 flex justify-center items-center text-xs'>
              {cartLength}
            </span>
          )}
        </Link>
        <Link to='/' className='text-gray-100'>Shop</Link>
      </div>
    </div>
  )
}

export default Navbar