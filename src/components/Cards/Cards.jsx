import React, { useContext, useState } from 'react'
import { FiHeart, FiShoppingCart } from 'react-icons/fi';
import '../../styles/cards.css'
import Rating from '../Rating/Rating';
import { Link } from 'react-router-dom';
import { CartContext } from '../../Context/CartContext';

const Cards = ({product}) => {
  const { cart, addToCart, itemAmount } = useContext(CartContext) 
  const [saved, setSaved] = useState(false)
  const onSave = () => {
    setSaved(prev => !prev)
  }

  const {id, image, title, rating, price, amount} = product;
    
  return (
    <div className='cards' key={id}>
        <Link  to={`/product/${id}`}> 
          <img loading='lazy' src={image} alt="product image" />
        </Link>
        <div className='icons'>
          <span
            className='save'
            onClick={onSave}
            >
            <FiHeart className={`icon ${saved ? 'saved' : ''}`} />
          </span>
          <button 
            onClick={() => addToCart(product, id)}
            className={`${
              product ? 'added' : ''} cartBtn`}
            >
            {'Add To'}
            <FiShoppingCart className='iconCart' />
          </button>
        </div>
        <h3 className='title'>{title}</h3>
        {rating === null ? '' : <Rating rates={rating} />}
        <div className='price'>
          <span className='old-price'>${price > 20 ? price + 8 : price +4}</span>
          <p className='new-price'>${price}</p>
        </div>
      </div>
  )
}

export default Cards
