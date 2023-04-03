import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar';
import Cart from './pages/cart/Cart';
import Shop from './pages/shop/Shop';
import ShopContext from './context/shop-contect';
import { useContext } from 'react';

function App() {
  // const {cartItems} = useContext(ShopContext)
  // console.log(cartItems);
  return (
    <ShopContext>
      <Router>
        <Navbar></Navbar>
        <Routes>
          <Route path={'/'} element={<Shop/>}/>
          <Route path={'cart'} element={<Cart/>}/>
        </Routes>
      </Router>
    </ShopContext>
  );
}

export default App;
