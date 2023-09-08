import React, { useContext } from 'react'
import { CartContext } from '../../Context/CartContext'
import { Link } from 'react-router-dom';

const CartItem = ({product}) => {
  const { removeFromCart, increaseAmount, decreaseAmount } = useContext(CartContext);

  const {id, image, title, price, color, amount} = product
  return (
    <div className="cart-body">
    <div className="item">
      <div className="details">
        <Link to={`/product/${id}`}>
        <div className="img">
          <img src={image} alt="product image" />
        </div>
      </Link>
        <div className="desc">
          <h3>{title}</h3>
          <div className="color">
        <h4>Color :</h4>
        <div className='flex'>
          <div className='bg' style={{backgroundColor: color }}></div>
          <p>{color}</p>
        </div>
        </div>
        </div>
      </div>
      <div className="item-price">${price}</div>
      <div className="item-quantity">
        <button onClick={() => decreaseAmount(id)}>-</button>
        {amount}
        <button onClick={() => increaseAmount(id)}>+</button>
      </div>
      <div className="item-subtotal">{`$ ${parseFloat(price * amount).toFixed(2)}`}</div>
      <button 
        onClick={() => removeFromCart(id)}
        className="delete-item"><span>remove</span></button>
    </div>
      <hr />
  </div>
  )
}

export default CartItem
