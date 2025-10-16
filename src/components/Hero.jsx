import React from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

function Hero() {
  return (
    <div className="container mx-auto px-6 py-20 md:py-5 flex flex-col justify-center items-center">
      <div className="flex flex-col-reverse md:flex-col-reverse lg:flex-row xl:flex-row items-center justify-center h-[65vh] md:h-[90vh] text-center md:text-left gap-18 ">

        {/* Left Section: Text */}
        <div className="title relative flex flex-col justify-center items-center  text-center ">
          <div className='flex absolute top-[-4rem] md:top-[-6rem] lg:top-[-8rem] xl:top-[-10rem] 
          left-0 right-0 justify-center items-center anim1' style={{ animationDelay: "3s" }}>
            <DotLottieReact
              src="https://lottie.host/7a86d717-e12a-4907-884c-bd245b839f68/CgOZJloQXs.lottie"
              loop
              autoplay
            />
          </div>
          <h1 className="text-white  font-bold mb-4 leading-tight mt-20 md:mt-35 ">
            <span
              className="anim text-[30px] sm:text-[30px] md:text-[35px] lg:text-[40px] xl:text-[50px] font-hero2
         bg-gradient-to-tl from-red-600 via-violet-500 to-red-600 bg-clip-text text-transparent" style={{ animationDelay: "0.5s" }}
            >
              Web Artist's
            </span>
            <br />
            <span
              className="anim text-[30px] sm:text-[25px] md:text-[55px] lg:text-[65px] xl:text-[70px] font-hero2
           bg-gradient-to-r from-red-500 via-green-500 to-purple-500 text-transparent bg-clip-text" style={{ animationDelay: "1s" }}
            >
              Workshop
            </span>
          </h1>
          <p
            className="anim text-gray-300 text-[10px] sm:text-[12px] md:text-[16px] lg:text-[16px] font-hero4 tracking-[3px] sm:tracking-[5px]
            text-white bg-gradient-to-l from-blue-500 via-teal-500 to-green-500 text-transparent bg-clip-text max-w-[700px]" style={{ animationDelay: "1.5s" }}
          >
            Welcome to my Portfolio website built with React JS.
          </p>
        </div>

        {/* Right Section: Image */}
        <div className="anim relative hero_img bg-gradient-to-tr from-purple-500 via-pink-500 to-red-500 p-[5px] rounded-full shadow-[0_10px_80px_rgba(114,29,234,0.6)]
         hover:scale-105 transition-transform duration-300 " style={{ animationDelay: "2s" }}>
          <DotLottieReact
            src="https://lottie.host/1b028f0a-d623-4ed7-bbfa-a837fd5cf395/N57NOTWQux.lottie"
            loop
            autoplay
            className='absolute scale-70 top-[-2rem] md:top-[-3rem] lg:top-[-4rem] xl:top-[-5rem]
             left-2 right-0 mx-auto w-[100px] md:w-[150px] lg:w-[180px] xl:w-[200px]'
          />
          <img
            src="arkaprava_pic.png"
            alt="Hero"
            className="rounded-full shadow-lg w-[180px] sm:w-[200px] md:w-[200px] lg:w-[250px] xl:w-[280px] object-cover "

          />
        </div>
       

      </div>
    </div>
  );
}

export default Hero;
