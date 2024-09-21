import React from 'react'
import logo from "../assets/logo.JPG"

const About = () => {
  return (
    <div className='py-20'>
        <div className='container mx-auto px-8 md:px-24 '>
            <h1 className='text-4xl font-bold text-center mb-12'>About Me </h1>
            <div className='flex flex-col md:flex-row items-center md:space-x-12'>
             <img className='h-80 w-70 rounded-lg object-cover mb-8 mdd:mb-0 transform transition-transform duration-300 hover:scale-105' src={logo} alt=''/>
              <div className='flex-1'>
                <p className='text-lg mb-8'>
                   My Skills 
                </p>
                <div className='space-y-4'>
                    <div className='flex items-center'>
                        <label htmlFor='htmlandcss' className='w-2/12' >HTML & CSS</label>
                        <div className='grow bg-gray-800 rounded-full h-3.5'>
                            <div className='bg-gradient-to-r from-green-400 to-blue-400 h-3.5 rounded-full transform transition-transform duration-300 hover:scale-105 w-10/12'>

                            </div>

                        </div>
                        
                    </div>
                    <div className='flex items-center'>
                        <label htmlFor='htmlandcss' className='w-2/12' >React Js </label>
                        <div className='grow bg-gray-800 rounded-full h-3.5'>
                            <div className='bg-gradient-to-r from-green-400 to-blue-400 h-3.5 rounded-full transform transition-transform duration-300 hover:scale-105 w-11/12'>

                            </div>

                        </div>
                        
                    </div>
                    <div className='flex items-center'>
                        <label htmlFor='htmlandcss' className='w-2/12' >React Native</label>
                        <div className='grow bg-gray-800 rounded-full h-3.5'>
                            <div className='bg-gradient-to-r from-green-400 to-blue-400 h-3.5 rounded-full transform transition-transform duration-300 hover:scale-105 w-11.5/12'>

                            </div>

                        </div>
                        
                    </div>
                    <div className='flex items-center'>
                        <label htmlFor='htmlandcss' className='w-2/12' >JavaScript</label>
                        <div className='grow bg-gray-800 rounded-full h-3.5'>
                            <div className='bg-gradient-to-r from-green-400 to-blue-400 h-3.5 rounded-full transform transition-transform duration-300 hover:scale-105 w-11.5/12'>

                            </div>

                        </div>
                        
                    </div>
                    <div className='flex items-center'>
                        <label htmlFor='htmlandcss' className='w-2/12' >Version Control</label>
                        <div className='grow bg-gray-800 rounded-full h-3.5'>
                            <div className='bg-gradient-to-r from-green-400 to-blue-400 h-3.5 rounded-full transform transition-transform duration-300 hover:scale-105 w-11.5/12'>

                            </div>

                        </div>
                        
                    </div>

                    <div className='mt-12 flex justify-between text-center'>
                        <div>
                        <h3 className='text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'>6+</h3>
                        <p>Months Experience</p>
                        </div>

                        <div>
                        <h3  className='text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'>20+</h3>
                        <p>Project Complete</p>
                        </div>
                        <div>
                        <h3  className='text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'>5+</h3>
                        <p>Happy Client</p>
                        </div>
                    </div>

                </div>
              </div>
              

            </div>
            
            
        </div>
    </div>
  )
}

export default About  