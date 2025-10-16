import React from 'react'

const About = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center min-h-screen gap-10 md:gap-16 lg:gap-20 py-5 px-4 
    sm:px-6 lg:px-20 bg-[#0a0a0a] rounded-3xl m-4 md:m-10
      shadow-[0px_20px_207px_10px_rgba(165,_39,_255,_0.48)]
    ">
      {/* Image Section */}
      <div className="hero_img bg-gradient-to-tr from-purple-500 via-pink-500 to-red-500 p-[4px] sm:p-[6px] rounded-full 
        shadow-[0px_16px_103px_0px_rgba(180,_72,_217,_0.69)] 
        hover:scale-105 transition-transform duration-300
      ">
        <img
          src="arkaprava_pic.png"
          alt="Hero"
          className="rounded-full shadow-lg h-[12rem] w-[8rem] sm:h-[14rem] sm:w-[10rem] md:h-[24rem] md:w-[16rem] lg:h-[25rem] lg:w-[16rem] object-cover"
        />
      </div>

      {/* Text Section */}
      <div className="title flex flex-col justify-center items-center lg:items-start text-center lg:text-left space-y-5 max-w-2xl px-2">
        <h1 className="text-white font-bold text-[1.2rem] sm:text-[2rem] md:text-[3.25rem] lg:text-[55px] font-hero2 
          bg-gradient-to-tl from-white via-indigo-500 to-white bg-clip-text text-transparent
        ">
          About Me
        </h1>

        <h3 className="text-gray-300 text-sm sm:text-xl md:text-3xl tracking-widest font-hero4 font-bold 
          bg-gradient-to-l from-purple-500 via-orange-500 to-yellow-500 text-transparent bg-clip-text
        ">
          I’m Arkaprava Adhikary
        </h3>

        <p className="text-white text-[13px] sm:text-sm md:text-lg font-hero4 leading-relaxed max-w-md">
          I’m a Software Engineering student at Techno India College of Technology, New Town. <br />
          <br />
          I build professional, high-performance websites using React for startups and businesses.
        </p>

        <div className="text-white text-[10px] sm:text-sm md:text-lg font-hero4 flex flex-col gap-4 mt-6 text-left">
          {/* Web Development */}
          <div className="flex items-center gap-3 px-3.5 py-1.5 rounded-lg bg-gradient-to-r from-purple-600/20 to-fuchsia-600/20 border border-purple-500/30 
          shadow-[0_0_25px_rgba(165,39,255,0.6)] backdrop-blur-sm hover:shadow-[0_0_45px_rgba(165,39,255,0.9)] transition-all duration-300 ease-in-out">
            <span className="text-purple-400 text-xl animate-pulse drop-shadow-[0_0_8px_rgba(165,39,255,1)]">💻</span>
            <span>Web Application Development</span>
          </div>

          {/* Mobile Design */}
          <div className="flex items-center gap-3 px-3.5 py-1.5 rounded-lg bg-gradient-to-r from-blue-600/20 to-cyan-600/20 border border-cyan-500/30 
          shadow-[0_0_25px_rgba(0,255,255,0.4)] backdrop-blur-sm hover:shadow-[0_0_45px_rgba(0,255,255,0.7)] transition-all duration-300 ease-in-out">
            <span className="text-cyan-400 text-xl animate-pulse drop-shadow-[0_0_8px_rgba(0,255,255,1)]">📱</span>
            <span>Mobile Responsive Design</span>
          </div>

          {/* Problem Solving */}
          <div className="flex items-center gap-3 px-3.5 py-1.5 rounded-lg bg-gradient-to-r from-pink-600/20 to-rose-600/20 border border-pink-500/30 
          shadow-[0_0_25px_rgba(255,0,128,0.4)] backdrop-blur-sm hover:shadow-[0_0_45px_rgba(255,0,128,0.7)] transition-all duration-300 ease-in-out">
            <span className="text-pink-400 text-xl animate-pulse drop-shadow-[0_0_8px_rgba(255,0,128,1)]">🧩</span>
            <span>Problem Solving</span>
          </div>
        </div>


      </div>
    </div>
  )
}

export default About
