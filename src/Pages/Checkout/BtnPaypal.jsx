import React, { useContext, useEffect, useRef } from 'react'
import { CartContext } from '../../Context/CartContext'


const BtnPaypal = () => {
  const { total } = useContext(CartContext);
  const paypal = useRef()
  useEffect(() => {
    window.paypal.
    Buttons({
      createOrder: (data, actions, err) => {
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
      },
      onApprove: async (data, actions) => {
        const order = await actions.order.capture()
      },
      onError: (err) => {
        console.log(err)
      }
    }).render(paypal.current)
  }, [])
  return (
    <div ref={paypal} style={{
      layout: "vertical",
      color: 'silver',
      shape: 'pill'
    }}></div>
  )
}

export default BtnPaypal
