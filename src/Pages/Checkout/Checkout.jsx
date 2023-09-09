import React, { useContext } from 'react'
import '../../styles/checkout.css'
import CheckoutItem from './CheckoutItem'
import { CartContext } from '../../Context/CartContext'
import BtnPaypal from './btnPaypal'

const Checkout = () => {
  const { cart, total } = useContext(CartContext)
return (
  <section className='check'>
    <h1>Checkout</h1>
    <main>
      <div className="summary">
        <h2>Order Summary</h2>
        <hr />
        <div className="orders">
          { cart.length >  0 ? cart.map(product => {
            return <CheckoutItem product={product} key={product.id} />
          }) : <h2 style={{color: 'gray', fontWeight: '300', lineHeight: '2.5rem'}}>
            Nothing here to view !<br /> Add an item to cart to view here.</h2>}
        </div>
        <div className="total">
          <div className='bottom'>
            <div>Shipping:</div>
            <div>Free</div>
          </div>
          <div className='bottom'>
              <div className='text'>Total:</div>
              <div className='text totalNum'>${parseFloat(total).toFixed(2)}</div>
          </div>
        </div>
      </div>
      { cart.length >  0 ? <div className="payment">
        <h2>Payment Method</h2>
        <p>Please select your choice of payment down below.
          We will use your paypal home address for your shipping address
        </p>
        <BtnPaypal key={cart.length} />
      </div> : ''
      }
    </main>
  </section>
)
}

export default Checkout
