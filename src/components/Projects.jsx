import React from 'react'
import Data from './Projects_data'
const Projects = () => {
    return (
        <div className='container h-[90vh]' >
            <div className='flex justify-center mb-10 mt-10 pb-2'>
                <h1 className='text-[60px] font-hero2  pt-4 bg-gradient-to-r from-teal-500 via-orange-500 to-yellow-500 text-transparent bg-clip-text'>Projects</h1>
            </div>

            <div className='flex flex-wrap gap-10 justify-center mb-20 '>

                {
                    Data.map((project) => (
                        <div className="card group hover:shadow-sm sm:max-w-sm">
                            <figure>
                              <a href={project.projectUrl} target='_blank'>  <img src={project.imageUrl} alt="Shoes" className="transition-transform duration-500 group-hover:scale-110 rounded-sm" /></a>
                            </figure>

                        </div>
                    ))
                }
            </div>


        </div>
    )
}

export default Projects
