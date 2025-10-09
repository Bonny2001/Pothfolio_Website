import React from 'react';

const Navbar = () => {
  return (
    <div className="navbar flex items-center p-6  bg-opacity-30 backdrop-blur-lg text-white text-xl fixed top-0 left-0 w-full z-50
    
    ">
      {/* Logo */}
      <div className="logo pr-[4rem]">
        <img className='h-[4rem] hover:scale-110 transition-all duration-300' src="logo.png" alt="logo" />
      </div>

      {/* Pages */}
      <div className="pages">
        <ul className="flex gap-8">
          {['Work', 'Services', 'About', 'Contact'].map((item) => (
            <li
              key={item}
              className="relative cursor-pointer transition-all duration-300 hover:text-white-400
                         after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:w-0 
                         after:h-[2px] after:bg-blue-100 after:transition-all after:duration-300 
                         hover:after:w-full font-hero3"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div className='justify-end ms-auto'>
        <button class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
          <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
           <a href="cv.pdf" download={"Resume"}> Watch Resume </a>
          </span>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
