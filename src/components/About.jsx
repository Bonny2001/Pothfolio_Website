import React from 'react'

const About = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center min-h-screen gap-20 px-6 lg:px-20 bg-[#0a0a0a] rounded-3xl m-10
    shadow-[0px_20px_207px_10px_rgba(165,_39,_255,_0.48)]
">
      {/* Image Section */}
      <div className="hero_img bg-gradient-to-tr from-purple-500 via-pink-500 to-red-500 p-[6px] rounded-full 
      shadow-[0px_16px_103px_0px_rgba(180,_72,_217,_0.69)]
      
      hover:scale-105 transition-transform duration-300">
        <img
          src="arkaprava_pic.png"
          alt="Hero"
          className="rounded-full shadow-lg h-[30rem] w-[20rem] object-cover"
        />
      </div>

      {/* Text Section */}
      <div className="title flex flex-col justify-center items-center lg:items-start text-center lg:text-left space-y-5 max-w-xl">
        <h1 className="text-white font-bold text-[55px] font-hero2 bg-gradient-to-tl from-white via-indigo-500 to-white bg-clip-text text-transparent">
          About Me
        </h1>

        <h3 className="text-gray-300 text-3xl tracking-[4px] font-hero4 font-bold bg-gradient-to-l from-purple-500
         via-orange-500 to-yellow-500 text-transparent bg-clip-text">
          I’m Arkaprava Adhikary
        </h3>

        <p className="text-white text-lg font-hero4 leading-relaxed max-w-md">
          I’m a Software Engineering student at Techno India College of Technology, New Town. <br />
          <br />
          I build professional, high-performance websites using React for startups and businesses.
        </p>

        <div className="text-white text-lg font-hero4 flex flex-col gap-2 mt-4">
          <div className='shadow-[0px_20px_207px_10px_rgba(165,_39,_255,_0.48)]
' >💻 Web Application Development</div>
          <div>📱 Mobile Responsive Design</div>
          <div>🧩 Problem Solving</div>
        </div>
      </div>
    </div>
  )
}

export default About
