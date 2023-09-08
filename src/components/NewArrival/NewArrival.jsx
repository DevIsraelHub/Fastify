import React, { useState, useContext } from 'react'
import { FiHeart, FiShoppingCart } from 'react-icons/fi'
import '../../styles/newArrival.css'
import { Link } from 'react-router-dom'
import { CartContext } from '../../Context/CartContext';



const NewArrival = ({product}) => {
  const [saved, setSaved] = useState(false)
  const onSave = () => {
    setSaved(prev => !prev)
  } 
  const { addToCart } = useContext(CartContext) 
  const {id, image, title, price} = product
  return (

        <div className='second-cards' key={id}>
          <Link to={`/product/${id}`}>
            <img src={image} alt="product image" />
          </Link>
          <div className='icons'>
            <span
              className='save'
              onClick={onSave}
              >
              <FiHeart className={`icon ${saved ? 'saved' : ''}`} />
            </span>
            <button onClick={() => addToCart(product, id)}>
              Add To <FiShoppingCart className='new-icon' />
            </button>
          </div>
          <h3 className='title'>{title}</h3>
          <div className='price'>
          <span className='old-price'>${price > 20 ? price + 8 : price +4}</span>
            <p className='new-price'>${price}</p>
          </div>
        </div>
    )
}

export default NewArrival
