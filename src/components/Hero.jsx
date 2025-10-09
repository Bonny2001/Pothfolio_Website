import React from 'react';

function Hero() {
  return (
    <div className="container ">



      <div className="flex  items-center justify-center h-[80vh] gap-30 text-center h-[100vh]">

        {/* <h1 className="text-white text-4xl">Coming Soon...</h1> */}
        <div className="title flex flex-col justify-center text-center">
          <h1 className="text-white  font-bold mb-4  text-center ">
            <span className='text-[55px] font-hero2
            bg-gradient-to-l from-purple-500 via-orange-500 to-yellow-500 text-transparent bg-clip-text
            '>Welcome to my</span> <br />
            <span className='text-[90px] font-hero2 
            bg-gradient-to-l from-indigo-500 via-red-500 to-blue-500 text-transparent bg-clip-text  '>Website</span>
          </h1>
          <p className="text-gray-300 text-xl font-hero3 tracking-[6px]  
          bg-gradient-to-l from-purple-500 via-orange-500 to-yellow-500 text-transparent bg-clip-text
          "> i'm Arkaprava, it's my Pothfolio website in React JS</p>


        </div>
        <div className="hero_img bg-gradient-to-tr from-purple-500 via-pink-500 to-red-500 p-[6px] rounded-[80rem] shadow-lg">
          <img src="arkaprava_pic.png" alt="Hero" className="rounded-[80rem] shadow-lg  h-[25rem] " />
        </div>
      </div>


    </div>
  );
}

export default Hero;
