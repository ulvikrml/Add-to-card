import React from 'react'
import {Link} from 'react-router-dom'
import { ShoppingCart } from 'phosphor-react'

const Navbar = () => {
  return (
    <div className='w-full flex bg-slate-400 h-12 justify-end pr-10'>
        <Link  className='pr-5' to={'/'}>Shop</Link>
        <Link to={'/cart'}>
            <ShoppingCart size={32}/>
        </Link>
    </div>
  )
}

export default Navbar