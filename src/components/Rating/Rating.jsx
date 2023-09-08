import React from "react";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";
import '../../styles/rating.css'

const Rating = ({ rates, text }) => {
  const ratingStar = Array.from({ length: 5 }, (elem, index) => {
    let number = index + 0.5;
    return (
      <span key={index}>
        {rates > index + 1 ? (
          <FaStar className="icon" />
        ) : rates > number ? (
          <FaStarHalfAlt className="icon" />
        ) : (
          <AiOutlineStar className="icon" />
        )}
      </span>
    );
  });
  
  return (
    <div className="rating">
      <span>{ratingStar}</span>
      <p>({rates > 5 ? parseInt(rates) : rates}) {text}</p>
    </div>
  )
}

export default Rating
