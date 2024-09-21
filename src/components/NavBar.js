import React, { useState } from 'react'
import {MdMenu } from "react-icons/md";
import ResponsiveMenu from './ResponsiveMenu';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaLeaf } from "react-icons/fa"; 

const NavBar = () => {
  
  const [open,setOpen]=useState(false)

  return (
    <motion.div 
    initial={{opacity:0, x:-200}}
        whileInView={{opacity:1,x:0}}
        transition={{duration:1,delay:0.3}}
    className=' px-4 flex  md:px-16 lg:px-24 border-b-2 border-red-500 md:border-b-2 md:border-amber-300'>
    
   
    

        <div className='container py-2 flex justify-start md:justify-between items-center md:pt-4'>
        <div className='sticky  md:block font-bold text-2xl flex gap-2 items-center uppercase'>
            <h2 className=' text-3xl font-bold  md:inline' >A<span className='text-red-400'>L</span>oK</h2>
          </div>

          
          
          
        <div className='space-x-6 hidden md:block'>
          
           <Link to={"/"}> <a className='inline-block py-1 px-3 hover:text-red-500 hover:shadow-[0_3px_0_-1px_#ef4444] font-semibold'>Home</a></Link>
           <Link to={"/about"}> <a  className='inline-block py-1 px-3 hover:text-red-500 hover:shadow-[0_3px_0_-1px_#ef4444] font-semibold'>About</a></Link>
          <Link to={"/service"}>  <a className='inline-block py-1 px-3 hover:text-red-500 hover:shadow-[0_3px_0_-1px_#ef4444] font-semibold'>Services</a></Link>
          <Link to={"/project"}> <a  className='inline-block py-1 px-3 hover:text-red-500 hover:shadow-[0_3px_0_-1px_#ef4444] font-semibold'>Project</a></Link>
          <Link to={"/contact"}> <a  className='inline-block py-1 px-3 hover:text-red-500 hover:shadow-[0_3px_0_-1px_#ef4444] font-semibold'>Contact</a></Link>

          
        </div>
      <button className='bg-gradient-to-r from-green-400 to-blue-500 text-white hidden md:inline transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'>Connect Me</button>
        </div>
       
        
        <div className='md:hidden' onClick={()=> setOpen(!open)} >
                <MdMenu className='text-4xl'/>
            </div>
            <ResponsiveMenu open={open}/>
    </motion.div>
  )
}

export default NavBar