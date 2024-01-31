import React from 'react'
import './NavbarStyles.css'
import { Link } from 'react-router-dom'
import {FaBars} from 'react-icons/fa';


const Navbar = () => {
  

  return (
    <div className='header'>
      <Link to='/'>
       <h1>Portfolio</h1>
      </Link>
      <ul className='nav-menu'>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/about'>About</Link>
        </li>
        <li>
          <Link to='/project'>Projects</Link>
        </li>
        <li>
          <Link to='/'>Contact</Link>
        </li>
      </ul>
      <div className='hamburger'>
      <FaBars size={20} style={{color:"#fff"}}/>
      </div>
    </div>
  )
}

export default Navbar
