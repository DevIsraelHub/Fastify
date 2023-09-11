import React, { useEffect, useState } from 'react'
import { FaArrowUp } from 'react-icons/fa'
import '../../styles/scroll.css'

const BackToTop = () => {
  const [toTopBtn, setToTopBtn] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 200 ? setToTopBtn(true) : setToTopBtn(false)
    })
  }, [])

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }
  return (
    <div className='scroll'>
      {toTopBtn && (
        <button  onClick={scrollUp}>
          <FaArrowUp />
        </button>
      )}
    </div>
  )
}

export default BackToTop
