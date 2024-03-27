import React from 'react'
import './HeroImgStyles.css';
import IntroImg from '../assets/portfolio_image2.jpeg'
import personImage from '../assets/Ime_Full_Stack.jpeg'
import { Link } from 'react-router-dom';




const HeroImg = () => {
  return (
    <div className='hero'>
      <div className='mask'>
      <img className='intro-img' src={IntroImg} alt='IntroImg'/>
      </div>
      <div className='content'>
        <p>HI, I'M LAWRENCE IME.</p>
        <h1> A Fullstack Developer.  </h1>
    
        <div className='buttons'>
        <Link to='/project' className='btn'>Projects</Link>
        <Link to='/contact' className='btn btn-light'>Contact</Link>

      
        </div>

        <div className='rounded'>
          
          <img src={personImage} alt="Ime at decagon institute" />

          </div>
        
      
        
      


      </div>
    </div>
  )
}

export default HeroImg
