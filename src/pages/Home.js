import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { ImSpoonKnife } from "react-icons/im";
import { FaList, FaGlassMartini, FaRegSnowflake } from "react-icons/fa";
import { FaCakeCandles } from "react-icons/fa6";
// import "./App.css"; // Ensure the correct path to your CSS file
import { FaStar, FaRegStar } from "react-icons/fa";
import { useState } from "react";
import { FaInstagram } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { Link } from "react-router-dom";
export const Home = ({ setCatchIndex, categories }) => {
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

  const imageUrl = "/bg.jpg";

  const FoodCard = ({ food, catname }) => {
    return (
      <div className="flex flex-col  items-center justify-center border border-gray-200 p-4 shadow-md rounded-md">
        {/* Food Image */}
        <img
          src={food.img}
          alt={food.title}
          className="h-[120px] w-[120px] object-contain mb-3"
        />

        {/* Food Title */}
        <h2 className="text-gray-700 text-lg font-semibold mb-1">
          {food.title}
        </h2>

        {/* Rating */}
        <div className="flex mb-2">
          {Array.from({ length: 5 }).map((_, index) =>
            index < food.rate ? (
              <FaStar key={index} className="text-yellow-400" />
            ) : (
              <FaRegStar key={index} className="text-gray-300" />
            )
          )}
        </div>

        {/* Price */}
        <p className="text-gray-900 font-semibold text-lg mb-2">
          ${food.price}
        </p>

        {/* Add to Cart Button */}
        <button
          onClick={() => setCatchIndex(food.index)}
          className="bg-yellow-400 text-white font-semibold py-2 px-4 text-sm rounded-md hover:bg-yellow-500 transition duration-300"
        >
          <Link to={"/detail/" + catname + "/" + food.index}>
            ДЭЛГЭРЭНГҮЙ{food.index}
          </Link>
        </button>
      </div>
    );
  };

  const [selected, setSelected] = useState(0);

  return (
    <div>
      {/* Header */}
      <div className="w-full flex justify-center p-4 bg-[#222222] text-[25px] font-bold text-white">
        Delicious
      </div>

      {/* Swiper Section */}
      <Swiper
        modules={[Pagination, Autoplay, Navigation]}
        spaceBetween={5}
        slidesPerView={1}
        autoplay={{ delay: 3000 }}
        loop={true}
        pagination={{ clickable: true }}
        className="w-full bg-gray-800 py-2"
      >
        {sliders.map((el, index) => (
          <SwiperSlide key={index}>
            <div className="space-y-2 w-full h-[297px] relative flex justify-center items-center flex-col bg-black bg-opacity-45">
              <img
                className="bg-cover z-[-10] absolute top-0 w-full h-full object-cover"
                src={el.imgUrl}
                alt={el.title}
              />
              <h1 className="z-50 text-[25px] text-white font-bold">
                {el.title}
              </h1>
              <p className="text-white">{el.description}</p>
              <button className="text-white bg-[#e0b531] rounded-md p-2 text-[12px] font-semibold">
                ДЭЛГЭРЭНГҮЙ
              </button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Icon Grid Section */}
      <div
        className="bg-fixed bg-cover bg-center h-screen bg-opacity-85 bg-black w-full"
        style={{ backgroundImage: `url(${imageUrl})` }}
      >
        <div className="bg-white w-full grid grid-cols-2 lg:grid-cols-4 place-items-center p-4 gap-4">
          {/* Icon Cards */}
          {[
            { icon: ImSpoonKnife, label: "Master Chef" },
            { icon: FaList, label: "Many Menu" },
            { icon: FaCakeCandles, label: "Food Cake" },
            { icon: FaGlassMartini, label: "Juice Drink" },
          ].map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col space-y-6 pb-4 items-center text-center "
            >
              <div className="border-[#e0b531] border-2 bg-[#e0b531] m-2 w-[80px] h-[80px] rounded-full flex justify-center items-center">
                <div className="w-full flex justify-center border-4 border-white h-full items-center rounded-full">
                  <item.icon className="text-white" size={30} />
                </div>
              </div>
              <h1 className="text-xl font-bold text-[20px]">{item.label}</h1>
              <p className="text-[14px] text-gray-600">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
          ))}
        </div>

        {/* Open Hours Section */}
        <div className="open-hours-section bg-black bg-opacity-55 w-full py-8">
          <div className="container gap-10 p-4 flex flex-col items-center text-white">
            <div className="flex flex-col items-center">
              <h1 className="text-[30px] font-[Pacifico]">Open Hours</h1>
              <div className="text-[#e0b531] flex gap-2">
                <FaRegSnowflake size={16} />
                <FaRegSnowflake size={22} />
                <FaRegSnowflake size={16} />
              </div>
            </div>
            <div className="entry w-full flex flex-col items-center border border-[#e0b531] py-4 gap-4">
              <div className="text-center">
                <h2 className="text-[20px] font-bold">Monday - Friday</h2>
                <p>9:00 AM - 11:00 PM</p>
              </div>
              <div className="text-center">
                <h2 className="text-[20px] font-bold">Saturday & Sunday</h2>
                <p>11:00 AM - 1:00 PM</p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white">
          <div className="flex flex-col items-center py-6">
            <h1 className="text-[30px] font-[Pacifico]">Specials Menus</h1>
            <div className="text-[#e0b531] flex gap-2">
              <FaRegSnowflake size={16} />
              <FaRegSnowflake size={22} />
              <FaRegSnowflake size={16} />
            </div>
          </div>{" "}
          {/* ------------------------------------MENU TITLE-------------------------------------------- */}
          <div className="flex  w-full justify-evenly p-2 text-[18px]">
            {categories.map((item, index) => (
              <div
                onClick={() => setSelected(index)}
                className={`cursor-pointer ${
                  selected === index
                    ? "text-[#e0b531] font-bold"
                    : "text-gray-500"
                }`}
                key={index}
              >
                {item.title}
              </div>
            ))}
          </div>
          {/* ------------------------------------MENU ITEMS-------------------------------------------- */}
          <div className="w-full my-6 px-6">
            {categories
              .filter((el) => selected === el.index)
              .map((category) => (
                <div key={category.index}>
                  <div className="flex flex-wrap gap-y-6 justify-evenly">
                    {category.foods.map((food) => (
                      <FoodCard catname={category.title} food={food} />
                    ))}
                  </div>
                </div>
              ))}
          </div>
        </div>
        <div className="flex flex-col items-center text-center p-8 max-w-md mx-auto bg-white ">
          <h2 className="text-4xl italic font-serif text-gray-700 mb-2">
            Testimonial
          </h2>
          <div className="text-[#e0b531] flex gap-2 mb-4">
            <FaRegSnowflake size={16} />
            <FaRegSnowflake size={22} />
            <FaRegSnowflake size={16} />
          </div>
          <p className="text-gray-500 leading-relaxed mb-10">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo
            inventore, numquam assumenda nihil totam sunt, ipsum nemo distinctio
            ipsa voluptates magni enim? Totam, distinctio iure similique
            consequuntur quae neque nesciunt.
          </p>
        </div>
        <footer className="bg-black text-white py-8">
          <div className="container mx-auto text-center">
            {/* Social Icons */}
            <p className="font-semibold text-lg mb-4">Find & follow us</p>
            <div className="flex justify-center gap-4 mb-6">
              <a href="#" className="bg-blue-600 p-3 rounded-full">
                <FaFacebookF className="fab fa-facebook-f text-white" />
              </a>
              <a href="#" className="bg-blue-400 p-3 rounded-full">
                <FaXTwitter className="fab fa-twitter text-white" />
              </a>
              <a href="#" className="bg-red-600 p-3 rounded-full">
                <FaGoogle className="fab fa-google-plus-g text-white" />
              </a>
              <a href="#" className="bg-pink-500 p-3 rounded-full">
                <FaInstagram className="fab fa-instagram text-white" />
              </a>
            </div>

            {/* Contact Info */}
            <div className="space-y-2 text-sm md:text-base">
              <p>
                <span className="font-bold">Tel:</span> 900000002
              </p>
              <p>
                <span className="font-bold">Fax:</span> 0400000098
              </p>
              <p>
                <span className="font-bold">Email:</span>{" "}
                <a
                  href="mailto:info@youremail.com"
                  className="text-blue-400 hover:underline"
                >
                  info@youremail.com
                </a>
              </p>
            </div>

            {/* Copyright */}
            <div className="mt-6">
              <hr className="border-gray-700 mb-4" />
              <p className="text-gray-500 text-xs">
                Copyright © 2024 All Rights Reserved
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};
