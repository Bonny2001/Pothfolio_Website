import React from 'react';

function Hero() {
  return (
    <div className="container ">



      <div className="flex  items-center justify-center h-[80vh] gap-30 text-center h-[100vh]">

        {/* <h1 className="text-white text-4xl">Coming Soon...</h1> */}
        <div className="title flex flex-col justify-center text-center ">
          <h1 className="text-white  font-bold mb-4  text-center  ">
            <span className='text-[55px] font-hero2
         bg-gradient-to-tl from-red-600 via-violet-500 to-red-600 bg-clip-text text-transparent
            '>Web Artist's</span> <br />
            <span className='text-[80px] font-hero2 
           bg-gradient-to-r from-red-500 via-green-500 to-purple-500 text-transparent bg-clip-text '>Workshop</span>
          </h1>
          <p className="text-gray-300 text-xl font-hero4 tracking-[5px]   
            bg-gradient-to-l from-blue-500 via-teal-500 to-green-500 text-transparent bg-clip-text  
          "> i'm Arkaprava, it's my Pothfolio website in React JS</p>


        </div>
        <div className="hero_img bg-gradient-to-tr from-purple-500 via-pink-500 to-red-500 p-[6px] rounded-[80rem]
      shadow-[3px_13px_103px_26px_rgba(114,_29,_234,_0.69)]
         hover:scale-105 transition-transform duration-300">
          <img src="arkaprava_pic.png" alt="Hero" className="rounded-[80rem] shadow-lg  h-[25rem] " />
        </div>
      </div>


    </div>
  );
}

export default Hero;
