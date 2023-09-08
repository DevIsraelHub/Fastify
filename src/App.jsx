import { useState } from 'react'
import { Routes, Route } from "react-router-dom";
import Home from './Pages/Home/Home';
import ProductDetail from './Pages/ProductDetail/ProductDetail';
import Category from './Pages/Category/Category';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import './styles/App.css'
import ScrollToTop from './components/Scroll/ScrollToTop';
import BackToTop from './components/Scroll/BackToTop';
import Cart from './Pages/Cart/Cart';
import NotFound from './Pages/NotFound/NotFound';
import Checkout from './Pages/Checkout/Checkout';

function App() {

  return (
    <div className='App'>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/product/:id' element={<ProductDetail />} />
        <Route path='/category' element={<Category />} />
        <Route path='/checkout' element={<Checkout />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <BackToTop />
      <Footer />
    </div>
  )
}

export default App
