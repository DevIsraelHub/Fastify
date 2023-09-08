import React from 'react'
import '../../styles/footer.css'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaOpencart, FaTwitter } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import Payment from '../../Images/payment.png'
import appStore from '../../Images/app-store.png'
import playStore from '../../Images/playstore.png'

const Footer = () => {
  return (
    <section className='footer'>
      <div className='container'>
        <div className="top">
          <div className="item">
            <h1>Categories</h1>
            <span>Women</span>
            <span>Men</span>
            <span>Shoes</span>
            <span>Accesories</span>
            <span>New Arrivals</span>
          </div>
          <div className="item">
            <h1>Links</h1>
            <span>FAQ</span>
            <span>Pages</span>
            <span>Stores</span>
            <span>Company</span>
            <span>Cookies</span>
          </div>
          <div className="item">
            <h1>About</h1>
            <span className='span'>Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Odio quasi, omnis facere eum, qui
              consequatur voluptas commodi ullam totam asperiores
              maxime eveniet corrupti harum quos
              recusandae corporis.
            </span>
          </div>
          <div className="item">
          <h1>Contact</h1>
            <span className='span'>Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Odio quasi, omnis facere eum, qui
              consequatur voluptas commodi ullam totam asperiores
              maxime eveniet corrupti harum quos
              recusandae corporis.
            </span>
          </div>
        </div>
        <div className="icon">
          <div className="left">
            <span><FaFacebookF /></span>
            <span><FaInstagram /></span>
            <span><FaTwitter /></span>
            <span><FaLinkedinIn /></span>
          </div>
          <div className="right">
            <img src={playStore} alt='payment method' />
            <img src={appStore} alt='payment method' />
          </div>
        </div>
        <hr />
        <div className="bottom">
          <div className="left">
          <Link to={'/'} className="logo">
            <img src="src/Images/shopping-cart.png" alt="" /> Fastify
          </Link>
            <span className='copyright'>
              &copy; Copyright 2023. All Rights Reserved
            </span>
          </div>
          <div className="right">
            <img src={Payment} alt='payment method' />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Footer