import React from 'react'


import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'
import About from './components/About'
import Services from './components/Services'
import Project from './components/Project'
import Contact from './components/Contact'
import NavBar from './components/NavBar'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className='bg-black text-white'>
      <NavBar/>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/service' element={<Services/>} />
      <Route path='/project' element={<Project/>} />
      <Route path='/contact' element={<Contact/>} />

    </Routes>
      <Footer/>
    </div>
  )
}

export default App