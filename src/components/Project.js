import React from 'react'
import logo from "../assets/alok09.png"
import portfolio from "../assets/portfolio.png"


const ProjectData=[
    {
        id:1,
        name:"Portfolio Web App",
        technology:"React Js",
        image:portfolio,
        github:""
        
    },
    {
        id:2,
        name:"Shopping Web App",
        technology:"React js",
        image:"https://th.bing.com/th/id/OIP.L25_WdYcTHAhDMwznGQtOgAAAA?rs=1&pid=ImgDetMain",
        github:""
        
    },{
        id:3,
        name:"Movie Review App",
        technology:"React js ",
        image:"https://i.ytimg.com/vi/Q_uLi4f27Lc/maxresdefault.jpg",
        github:""
        
    },{
        id:4,
        name:"Instagram Clone App",
        technology:"React Native , JavaScript,Redux Toolkit",
        image:"https://i.ytimg.com/vi/JgIUwVFArsk/maxresdefault.jpg",
        github:""
        
    },{
        id:5,
        name:"Fruit App",
        technology:"React Native",
        image:'https://codecanyon.img.customer.envatousercontent.com/files/438086192/Inline-Preview-Image.jpg?auto=compress%2Cformat&q=80&fit=crop&crop=top&max-h=8000&max-w=590&s=e0fdbcef13fedadbf7fbc736481cbc5b',
        github:""
        
    },
]

const Project = () => {
  return (
    <div className='py-20'>

        <div className='container mx-auto px-8 md:px-24 '>
            <h1 className='text-4xl font-bold text-center mb-12'>My Project </h1>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>

             {ProjectData.map((proj)=>(
                <div key={proj.id} className='bg-gray-800 p-6 rounded-lg hover:scale-105 transform transition-transform duration-300 hover:shadow-lg'>
                    <img className='rounded-lg mb-4 w-full h-52 object-cover' src={proj.image} alt=''/>
                    <h2 className='text-2xl font-bold mb-2'>{proj.name}</h2>
                    <p className='text-gray-400 mb-4'>{proj.technology}</p>
                    <a href='#' className='inline-block bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 py-2 rounded-full'>GitLink{proj.github}</a>
                </div>
             ))}
            </div>
        </div>
    </div>
  )
}

export default Project