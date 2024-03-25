import { BrowserRouter,Routes,Route } from'react-router-dom';
import Home from './Components/home';
import Cart from './Components/cart';
import Product from './Components/product';
import Navbar from './Components/navbar';
import { useState } from 'react';


function App() {
  let [cart,setCart]=useState([])
  return (
    <div>
      <BrowserRouter>
      <Navbar />
      <Routes>
          <Route element={<Home />} path='/' />
          <Route element={<Cart cart={cart} setCart={setCart} />} path='/cart' />
          <Route element={<Product cart={cart} setCart={setCart} />} path='/:id' />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
