import React from 'react'
    import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const Skills = () => {
    return (
        <div className="container mx-auto flex flex-col items-center text-center px-4 py-2">
            <h1 className="font-hero2 text-2xl sm:text-2xl md:text-[3rem] 
            bg-gradient-to-r from-yellow-500 via-red-500 to-pink-500 text-transparent bg-clip-text opacity-100 
            hover:opacity-0 transition-opacity duration-1000">
                Skills
            </h1>

            <div className="flex flex-col md:flex-row gap-20 mt-10 mb-20 w-full justify-center items-center">
                {/* Tech Stack Box */}
                <div className="w-[full] md:w-2/5 ">
                    <div className="bg-gradient-to-br from-[#2b1055] to-[#7597de] p-6 sm:p-10 rounded-3xl 
                    shadow-[0_0_40px_rgba(165,39,255,0.4)]">
                        <h2 className="text-white text-3xl sm:text-4xl font-bold mb-6 text-center">My Tech Stack</h2>

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
                                    className="bg-[rgba(255,255,255,0.1)] text-white text-sm sm:text-base md:text-xl px-4 sm:px-6 py-2 sm:py-3 rounded-2xl backdrop-blur-md 
                                               hover:bg-[rgba(165,39,255,0.3)] hover:scale-105 transition-transform duration-300
                                               shadow-[inset_0px_0px_20px_2px_rgba(165,39,255,0.5)] font-hero4"
                                >
                                    {tech}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Image */}
                <div className="w-full md:w-2/5">
                    <DotLottieReact
                        src="https://lottie.host/0b34cb78-fd1c-42a0-a0d1-b9bd6c0e34c5/psur83IKnu.lottie"
                        loop
                        autoplay
                        className='scale-145 '
                    />
                </div>
            </div>
        </div>
    )
}

export default Skills
