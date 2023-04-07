import { useContext } from 'react';
import { ShopContext } from '../../context/shop-contect'


const CartItem = (props) => {
    const { id, name, numberOfUnit, image, price } = props.data
    const { removeFromCart, incrementCartItem, decrementCartItem, updateCartItem } = useContext(ShopContext);

    return (
        <div className="flex items-center space-x-4">
            <img className="w-20 h-20 object-cover rounded-md" src={image} alt={name} />
            <div className="flex-grow">
                <h2 className="text-gray-800 font-medium">{name}</h2>
                <p className="text-gray-500">${(Number(price) * numberOfUnit).toFixed(2)}</p>
                <div>
                    <button
                        className="text-gray-600 focus:outline-none focus:text-gray-700"
                        onClick={() => decrementCartItem(id)}
                    >-
                    </button>

                    <input
                        type="number"
                        min="1" max='99'

                        className="border rounded-md w-16 text-center"
                        value={numberOfUnit}
                        onChange={(e) => {
                            const value = parseInt(e.target.value);
                            if (!isNaN(value) && value > 0 && value <= 1000) {
                              updateCartItem(id, value)
                            }
                          }}
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
                onClick={()=>removeFromCart(id)}
            >Remove</button>
        </div>
    );
};

export default CartItem;