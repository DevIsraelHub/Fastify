import React, { useContext, useEffect, useState } from 'react';
import {BiSearch} from 'react-icons/bi';
import {CgProfile} from 'react-icons/cg';
import {FiHeart, FiMenu} from 'react-icons/fi';
import {FiShoppingCart} from 'react-icons/fi'
import {FaOpencart} from 'react-icons/fa'
import { Link, NavLink } from 'react-router-dom';
import '../../styles/navbar.css'
import Sidebar from '../Sidebar/Sidebar';
import SearchBar from '../SearchBar/SearchBar';
import { CartContext } from '../../Context/CartContext';
import { allProduct } from '../../Data';

const Navbar = () => {
  const [open, setOpen] = useState(false)
  const [isActive, setIsActive] = useState(false);
  const { itemAmount } = useContext(CartContext);
  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }
  // event Listener
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 10 ? setIsActive(true) : setIsActive(false);
    });
  });
  const product = allProduct.map(item => {
    return item.category === 'women';
  })
  const {id, title, color, price, category, desc} = product;

  return (
    <nav className={`${isActive ? 'shadow' : ''} navbar` }>
      <div className="left">
        <span className='left-nav'>
          <FiMenu onClick={() => setOpen(prev => !prev)} className={`menu ${open ? 'open-menu' : ''}`} />
          <span className={`sidebar-nav ${open ? 'open-sidebar' : ''}`}>
            <Sidebar open={open} setOpen={setOpen} />
          </span>
          <Link to={'/'} className="logo">
            <img src="src/Images/shopping-cart.png" alt="" /> Fastify
          </Link>
        </span>
        <div className="list">
          <NavLink to={'/'} className="link">Home</NavLink>
          <NavLink to={'/category'}
          className="link">Category</NavLink>
          <a href='#women' 
          className="link">Women</a>
          <a href='#men'
          className="link">Men</a>
        </div>
      </div>
      <div className="right">
        <SearchBar />
        <div className="nav-icon">
          <CgProfile className='icon' />
          <FiHeart className='icon' />
          <NavLink to={'/cart'} className="cart-icon">
            <FiShoppingCart className='icon' />
            <span>{itemAmount}</span>
          </NavLink>
        </div>
      </div>
    </nav>
  )
}

export default Navbar