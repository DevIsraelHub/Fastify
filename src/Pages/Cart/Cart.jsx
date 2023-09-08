import React, { useContext, useState } from 'react'
import '../../styles/cart.css'
import { Link, useNavigate } from 'react-router-dom'
import { FiDelete } from 'react-icons/fi'
import { allProduct } from '../../Data'
import CartItem from './CartItem'
import { CartContext } from '../../Context/CartContext'
import emptyCart from '../../Images/emty cart.png'
import { FaArrowRight } from 'react-icons/fa'

const Cart = () => {
  const [err, setErr] = useState(false)
  const navigate = useNavigate()
  const { cart, clearCart, total, itemAmount } = useContext(CartContext);

  const handleSubmit = (e) => {
    e.preventDefault()
    setErr(true)
  }
  
  return (
    <section className='cart'>
        <div className="reference">
          <Link to={'/'}>Home</Link> {'>'}
          <Link><b>Cart</b></Link>
        </div>
      {
        cart.length > 0 ?
      <>
      <div className='first'>
        <p className="text">
          Please fill in the fields below and click place
          order to complete your purchase! <br /> Thanks for using our service <b>Fastify</b>.
        </p>
      </div>
        <div className="cart-item">
          <nav className='cart-nav' >
            <h2 className='details'>PRODUCT DETAILS</h2>
            <h2 className='price'>PRICE</h2>
            <h2 className='quantity'>QUANTITY</h2>
            <h2 className='quantity'>SUBTOTAL</h2>
            <h2 className='quantity'>ACTION</h2>
          </nav>
          <div>
            {cart.map(product => {
                return <CartItem product={product} key={product.id} />
            })}
          </div>
        </div>
        <div className="bottom">
          <div className="left">
            <h3>Discount Coupon Code</h3>
            <p>Enter your coupon code if you have one</p>
            <form onSubmit={handleSubmit} className="inputBar">
              <>
                <input type="text"  required/>
                <button>Apply Coupon</button>
              </>
            </form>
             {err && <p className='text-err'>Sorry coupon not recognised!</p>}
              <button
                onClick={() => navigate(-1)}
                className='continue'>
                  Continue Shopping
                </button>
          </div>
          <div className="right">
            <div className="total shipping">
            <h3>Shipping:</h3>
            <h3>Free</h3>
            </div>
            <br />
            <div className="total">
            <h3>Grand Total:</h3>
            <h3>${parseFloat(total).toFixed(2)}</h3>
            </div>
            <hr />
            <div className="btns">
            <button
              onClick={() => clearCart()}
              className='clear-cart'>
              Clear Cart
            </button>
            <button onClick={() => navigate("/checkout")} className='checkout'>
              Proceed To Checkout <FaArrowRight className='icon' />
            </button>
            </div>
          </div>
        </div>
      </>:
      <div className='empty-cart'>
        <img src={emptyCart} alt="cart img" />
        <h1>Your cart is empty and sad :(</h1>
        <p>Add something to make it happy!</p>
        <button onClick={() => navigate(-1)} className='checkout'> 
          Continue Shopping
          <FaArrowRight className='icon' />
        </button>
      </div>
      }

    </section>
  )
}

export default Cart
