import React from "react";
import Data from "./Projects_data";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
const Projects = () => {
  return (
    <div className="container relative h-[70vh] sm:h-[80vh] md:h-[100vh]  flex flex-col justify-center  items-center px-4 py-10 mx-auto">
      {/* Title */}
      <div>
        <DotLottieReact
          src="https://lottie.host/46671b96-d280-4c1b-bcf6-d1c39f1023e0/IAZXZ3HGEQ.lottie"
          loop
          autoplay
          className='absolute top-0 left-0 right-0 mx-auto w-[150px] md:w-[250px] lg:w-[300px] '
        />
      </div>
      <div className="flex justify-center mb-10 mt-5 pb-2">

        <h1 className="text-xl sm:text-xl md:text-[3rem]  font-hero2 pt-2
        bg-gradient-to-r from-teal-500 via-orange-500 to-yellow-500 text-transparent bg-clip-text 
        hover:scale-105 transition-transform duration-300 ">
          Projects
        </h1>
      </div>

      {/* Swiper Slider */}
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Pagination, Autoplay]}
        className="w-full max-w-[1200px]"
        breakpoints={{
          320: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {Data.map((project) => (
          <SwiperSlide key={project.id}>
            <div className="card group hover:shadow-lg rounded-lg overflow-hidden">
              <figure className="relative">
                <a href={project.projectUrl} target="_blank" >
                  <img
                    src={project.imageUrl}
                    alt={project.title || "Project"}
                    className="w-full  object-cover transition-transform duration-500 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 
                transition-opacity duration-500 flex items-center justify-center text-white text-lg font-semibold">
                    {project.title || "View Project"}
                  </div>
                </a>
              </figure>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Projects;
