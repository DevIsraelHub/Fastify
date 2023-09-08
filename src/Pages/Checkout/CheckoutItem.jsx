import React from 'react'
import { CartContext } from '../../Context/CartContext'
import { Link } from 'react-router-dom';

const CheckoutItem = ({ product }) => {
  const { id, image, title, price, color, amount } = product
  return (
    <div className="item-body">
      <div className="item">
        <div className="details">
          <Link to={`/product/${id}`}>
            <div className="img">
              <img src={image} alt="product image" />
            </div>
          </Link>
          <div className="desc">
            <h3>{title} x <span>{amount}</span></h3>
            <div className="color">
              <h4>Color :</h4>
              <div className='flex'>
                <div className='bg' style={{ backgroundColor: color }}></div>
                <p>{color}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="item-price">${price}</div>
      </div>
    </div>
  )
}

export default CheckoutItem
