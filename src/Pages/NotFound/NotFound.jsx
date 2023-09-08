import React from 'react'
import '../../styles/notFound.css'
import notFoundImg from '../../Images/not found.png'
import { FaArrowRight } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className='notFound'>
      <img src={notFoundImg} alt="cart img" />
        <h1>Oops! Page not found</h1>
        <p>This page you are looking for might have been removed or temporarily unavailable.</p> 
        <Link to={'/'}>
          <button className='checkout'>
            Back To Home Page
            <FaArrowRight className='icon' />
          </button>
        </Link>
    </div>
  )
}

export default NotFound
