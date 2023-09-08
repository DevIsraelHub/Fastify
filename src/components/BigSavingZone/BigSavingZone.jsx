import React from 'react';
import '../../styles/bigSavingZone.css';
import { FiArrowDown } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const BigSavingZone = ({product}) => {

  const {id, image, title, desc} = product;
  return (
    <div className='third-card'>
      <img src={image} alt="product" />
      <div className="info">
        <h2>{title}</h2>
        <p>{desc}</p>
        <h3>UPTO 40% OFF</h3>
        <FiArrowDown className='icon' />
        <Link to={'/category'}>
          <button>shop now</button>
        </Link>
      </div>
    </div>
  )
}

export default BigSavingZone
