// import Swiper and modules styles
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css"; // Import Swiper styles
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import React from "react";

export const Home = () => {
  const sliders = [
    {
      title: "Delicious Food & Drinks",
      description: "Find your need now",
      imgUrl: "/slider1.jpg",
    },
    {
      title: "Cafe & Restaurant",
      description: "Find your need now",
      imgUrl: "/slider2.jpg",
    },
    {
      title: "Delicious & Testfull",
      description: "Find your need now",
      imgUrl: "/slider3.jpg",
    },
  ];
  return (
    <div>
      <div className="w-full flex justify-center p-4 bg-[#222222] text-[25px] font-bold text-white">
        Delicious
      </div>
      <Swiper
       modules={[Pagination, Autoplay, Navigation]}
       spaceBetween={5}
       slidesPerView={1}
       autoplay={{ delay: 3000 }}
       loop={true}
       // navigation={true}
       pagination={{ clickable: true }}
       className="w-full bg-gray-800 py-2">
        {sliders.map((el, index )=> (
           <SwiperSlide key={index}>

          <div className="space-y-2 w-full h-[297px] relative flex justify-center items-center flex-col bg-black bg-opacity-45">
        <img className="bg-cover z-[-10] absolute top-0" src={el.imgUrl}></img>
       
       <h1 className=" z-50 text-[25px] text-white font-bold">{el.title}</h1>
       <p className="text-white">Find your need now</p>
       <button  className="text-white bg-[#e0b531] rounded-md p-2 text-[12px] font-semibold" >ДЭЛГЭРЭНГҮЙ</button>
      </div>
    </SwiperSlide>))}
        
      </Swiper>
      
    </div>
  );
};
