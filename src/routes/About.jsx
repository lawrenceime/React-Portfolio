import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import HeroImg2 from '../components/HeroImg2'

const About = () => {
  return (
    <div>
      <Navbar/>
      <HeroImg2 heading="Who am I" text="I am friendly frontend developer"/>
      <Footer/>
    </div>
  )
}

export default About
