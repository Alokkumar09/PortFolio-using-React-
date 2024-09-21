import React from 'react'

import { motion,AnimatePresence } from 'framer-motion';


const ResponsiveMenu = ({open}) => {
  return (
    <AnimatePresence mode='wait'>
  {
    open && (
      <motion.div 
      initial={{opacity: 0 ,y:-100}}
      animate={{opacity:1 ,y:0}}
      exit={{opacity:0 , y:-100}}
      transition={{duration:0.4}}
      className='absolute top-20 left-0 w-full h-screen z-20 '>
        <div className='text-xl font-semibold uppercase bg-red-500 text-white py-10 m-6 rounded-3xl'>
          <ul className='flex flex-col items-center gap-10 cursor-pointer'>
          <a className='inline-block py-1 px-3 hover:text-yellow-200  font-semibold'  ><li className='text-xl '>Home</li></a>
                <a className='inline-block py-1 px-3 hover:text-yellow-200  font-semibold' ><li className='text-xl'>About</li></a>
                <a className='inline-block py-1 px-3 hover:text-yellow-200  font-semibold' ><li className='text-xl'>Service</li></a>
                <a className='inline-block py-1 px-3 hover:text-yellow-200  font-semibold' ><li className='text-xl'>Project</li></a>
                <a className='inline-block py-1 px-3 hover:text-yellow-200 font-semibold' ><li className='text-xl'>Contact</li></a>
          
          </ul>
        </div>
      </motion.div>
    )
  }
    </AnimatePresence>
  )
}

export default ResponsiveMenu