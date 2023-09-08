import React from 'react'
import '../../styles/feedback.css'
import Rating from '../Rating/Rating'

const Feedback = ({person}) => {

  const {id, image, name, rating, desc} = person
  return (
    <div className='feedback'>
      <div className="head">
        <img src={image} alt="profile image" />
        <Rating rates={rating} />
      </div>
      <div className="text">
        <h3>{name}</h3>
        <p>{desc}</p>
      </div>
    </div>
  )
}

export default Feedback
