import React from 'react'

const Skills = () => {
    return (
        <div className='container flex justify-center text-center flex-col items-center ' >

            <h1 className=' font-hero2 text-[5rem] bg-gradient-to-r from-yellow-500 via-red-500 to-pink-500 text-transparent bg-clip-text'>Skills</h1>
            

            <div className='flex gap-5 mb-20 h-fit rounded-lg p-8 justify-center items-center ' >
                <div className='w-[50%]'>
                    <div className="bg-gradient-to-br from-[#2b1055] to-[#7597de] p-10 rounded-3xl shadow-[0_0_40px_rgba(165,39,255,0.4)]">
                        <h2 className="text-white text-4xl font-bold mb-6 text-center">My Tech Stack</h2>

                        <ul className="flex flex-wrap justify-center gap-4">
                            {[
                                "HTML",
                                "CSS",
                                "JavaScript",
                                "React",
                                "Node.js",
                                "Express",
                                "MongoDB",
                                "axios",
                                "GitHub",
                                "Bootstrap CSS",
                                "Tailwind CSS",
                                "Chat GPT",
                                "Figma",
                                "VS Code",
                            ].map((tech, index) => (
                                <li
                                    key={index}
                                    className="bg-[rgba(255, 255, 255, 0.1)] text-white text-xl px-6 py-3 rounded-2xl backdrop-blur-md 
                                       hover:bg-[rgba(165,39,255,0.3)] hover:scale-105 transition-transform duration-300
                                       shadow-[inset_0px_0px_20px_2px_rgba(165,39,255,0.5)] font-hero4"
                                >
                                    {tech}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className='w-[40%]' >
                    <img src="dev.png" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Skills
