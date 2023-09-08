import React from 'react'
import '../../styles/sidebar.css'
import { NavLink, Link } from 'react-router-dom'

const Sidebar = ({open, setOpen}) => {
  return (
    <div className={`sidebar ${open ? 'open-sidebar' : ''}`}>
        <NavLink to={'/'} onClick={() => setOpen(false)} className='shop nav'>
          <span className='link'>Home</span>
        </NavLink>
        <NavLink to={'/category'} onClick={() => setOpen(false)} className='women nav'>
          <span className='link'>Category</span>
        </NavLink>
        <a href='#women' onClick={() => setOpen(false)} className='women nav'>
          <span className='link'>Women</span>
        </a>
        <a href='#men' onClick={() => setOpen(false)} className='men nav'>
          <span className='link'>Men</span>
        </a>
    </div>
  )
}

export default Sidebar
