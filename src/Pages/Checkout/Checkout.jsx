import React, { useContext } from 'react'
import '../../styles/checkout.css'
import CheckoutItem from './CheckoutItem'
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { CartContext } from '../../Context/CartContext'

const Checkout = () => {
  const { cart, total } = useContext(CartContext);

  const initialOptions = {
    clientId: "AXRSw6TTG2Jo2shFmQK2uYPoeNgsWgDcO0yRD6Gulhq_6fI474qER7MaTsFFy_XXji2sSVVCAb0X9k91&currency=USD",
    currency: "USD",
    intent: "capture",
  };

  const createOrder = (data, actions, err) => {
    return actions.order.create({
      intent: "CAPTURE",
      purchase_units: [
        {
          description: "Products shoped from fastify",
          amount: {
            currency_code: "USD",
            value: total
          },
        },
      ],
    });
  }
  async function onApprove (data, actions)  {
    const order = await actions.order.capture()
  }
  onError: (err) => {
    console.log(err)
  }


// useEffect(() => {
//   window.paypal.
//   Buttons({
//     createOrder: (data, actions, err) => {
//       return actions.order.create({
//         intent: "CAPTURE",
//         purchase_units: [
//           {
//             description: "Products shoped from fastify",
//             amount: {
//               currency_code: "USD",
//               value: 5.00
//             },
//           },
//         ],
//       });
//     },
//     onApprove: async (data, actions) => {
//       const order = await actions.order.capture()
//     },
//     onError: (err) => {
//       console.log(err)
//     }
//   }).render(paypal.current)
// }, [])
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
      <div className="payment">
        <h2>Payment Method</h2>
        <p>Please select your choice of payment down below.
          We will use your paypal home address for your shipping address
        </p>
        <PayPalScriptProvider options={initialOptions}>
          <PayPalButtons style={{
            layout: "vertical",
            color: 'silver',
            shape: 'pill'
          }}
            createOrder={createOrder}
            onApprove={onApprove}
          />
        </PayPalScriptProvider>
      </div>
    </main>
  </section>
)
}

export default Checkout
