import React from 'react'
import {MdArrowBackIos, MdArrowForwardIos} from 'react-icons/md'
import hero from '../../Images/hero.png'
import '../../styles/hero.css'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const Hero = () => {
  const [slide, setSlide] = useState(0)

  const prevSlide = () => {
    setSlide(slide === 0 ? 1 : (prev) => prev -1)
  } 
  const nextSlide = () => {
    setSlide(slide === 1 ? 0 : (prev) => prev +1)
  } 

  return (
    <div className='hero'>
      <div className="container" style={{transform:`translateX(-${slide * 100}vw)`}}>
        <img src={hero} alt="hero image" />
      </div>
      <div className="prev" onClick={prevSlide}>
        <MdArrowBackIos className='prev' />
      </div>
      <div className='hero__text'>
        <p>T-shirt / Tops / Shorts</p>
        <h2>Quality Apparels Lives Here</h2>
        <p>Go Shopping With Ease & Speed!</p>
        <Link to={'/category'} className='btn'><button>Shop now</button></Link>
      </div>
        <div className='slide'>
          <span  onClick={prevSlide} className={`${slide === 0 ? 'active' : ''} slider-one`}></span>
          <span  onClick={nextSlide} className={`${slide === 1 ? 'active' : ''} slider-two`}></span>
        </div>
      <div className="next" onClick={nextSlide}>
        <MdArrowForwardIos className='next' />
      </div>
    </div>
  )
}

export default Hero
