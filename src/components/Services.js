import React from 'react'

const servviceData=[
    {
        id:1,
        title:"web design",
        description:"Creating Responsive ui"
    },
    {
        id:2,
        title:"Java",
        description:"Creating Responsive ui"
    },
    {
        id:3,
        title:"React Js",
        description:"Creating Responsive ui"
    },
    {
        id:4,
        title:"RN",
        description:"Creating Responsive ui"
    },
    {
        id:5,
        title:"Python",
        description:"Creating Responsive ui"
    },
]
const Services = () => {
  return (
    <div className='py-20'>

        <div className='container mx-auto px-8 md:px-24 '>
            <h1 className='text-4xl font-bold text-center mb-12'>My Services </h1>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {servviceData.map((serv)=>(
                <div key={serv.id} className='bg-gray-800 px-6 pb-8 rounded-lg hover:shadow-lg transform transition-transform duration-300 hover:scale-105'>
               <div className='text-right text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-400'>
                {serv.id}
               </div>
               <h3 className='mt-2 uppercase text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'>{serv.title }</h3>
                <p className='mt-2 text-gray-300'>{serv.description}</p>
                <a href='#' className='mt-4 inline-block text-green-400 hover:text-blue-500'>Read More</a>
                </div>
            ))}
            </div>
        </div>
    </div>
  )
}

export default Services