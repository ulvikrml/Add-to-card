import React from 'react'

const CartItem = (props) => {
    const { name, numberOfUnit } = props.data
    // console.log(name);
    return (
        <div className='mt-3 flex'>
            <p className='pr-3'>{name}</p>
            <p className='pr-3'>{numberOfUnit}</p>
            <button>x</button>
        </div>
    )
}

export default CartItem