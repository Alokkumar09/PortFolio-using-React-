import React from 'react'
import logo from "../assets/logo1.JPG"
import { motion } from 'framer-motion'
import { FadeRight, FadeUp } from '../utility/Animation'


const HeroSection = () => {
  return (
    <div className=' py-16'>
      <div className='flex flex-col justify-center items-center'>
      <motion.img 
      initial={{opacity:0, x:20,rotate:75}}
      animate={{opacity:1,x:0,rotate:0}}
      transition={{duration:0.5,delay:0.2}}
      src={logo} className='mx-auto mb-8 w-48 h-48 rounded-full object-cover transform transition-transform duration-300 hover:scale-105' alt='' />
      <motion.h1 
      variants={FadeRight(0.6)}
      initial="hidden"
      animate="visible"
      className='text-lg md:text-4xl font-bold'>
        I'm{" "}
        <span className='text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'>Alok Kumar </span>
        , Full-Stack-Developer
      </motion.h1>
      <motion.p
      variants={FadeUp(0.6)}
      initial="hidden"
      whileInView="visible"
      viewport={{once:true}}
      className='mt-4 text-sm md:text-lg text-gray-300 '>I specialize in building modern and responsive web app</motion.p>
      </div>
      <div className='mt-8 space-x-4 items-center flex justify-center'>
        <button className='bg-gradient-to-r from-red-500 to-blue-500 text-white hidden md:inline transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'>Contact With Me </button>
        <button className='bg-gradient-to-r from-green-400 to-blue-500 text-white hidden md:inline transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'>Resume</button>
      </div>
    </div>
  )
}

export default HeroSection