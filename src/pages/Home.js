import React from 'react'

import HeroSection from '../components/HeroSection'
import About from '../components/About'
import Services from '../components/Services'
import Project from '../components/Project'
import Contact from '../components/Contact'


const Home = () => {
  return (
    <div>
        
        <HeroSection/>
        <About/>
        <Services/>
        <Project/>
        <Contact/>
        
    </div>
  )
}

export default Home