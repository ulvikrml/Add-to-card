import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar';
import Cart from './pages/Cart';
import Shop from './pages/Shop';

function App() {
  return (
    <div>
      <Router>
        <Navbar></Navbar>
        <Routes>
          <Route path={'/'} element={<Shop/>}/>
          <Route path={'cart'} element={<Cart/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
