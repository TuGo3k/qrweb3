import React, { useEffect, useState } from "react";
import { FaStar, FaRegStar } from "react-icons/fa";
import { useParams, useNavigate } from "react-router-dom";

const FoodDetail = ({ foods }) => {
  const { catename, id } = useParams(); // Get the food ID from the URL
  const navigate = useNavigate(); // Hook for navigating back
  const [food, setFood] = useState({});

  useEffect(() => {
    setFood(() =>
      foods.find(
        (food) =>
          food.title === catename && food.foods.find((e) => e.index === id)
      )
    );
  }, [foods]);

  if (!food) {
    return (
      <div className="flex justify-center items-center h-screen text-red-600">
        <p>Food not found</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 py-10">
      {/* Food Detail Container */}
      <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        {/* Food Image */}
        <div className="relative h-[400px] bg-gray-200">
          <img
            src={food.img}
            alt={food.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content Section */}
        <div className="p-6 md:p-10 space-y-6">
          {/* Title & Rating */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            <h1 className="text-3xl font-bold text-gray-800">{food.title}</h1>
            {/* Rating */}
            <div className="flex items-center">
              {Array.from({ length: 5 }).map((_, index) =>
                index < food.rate ? (
                  <FaStar key={index} className="text-yellow-400 text-2xl" />
                ) : (
                  <FaRegStar key={index} className="text-gray-300 text-2xl" />
                )
              )}
            </div>
          </div>

          {/* Price */}
          <div className="text-2xl font-semibold text-[#e0b531]">
            ${food.price}
          </div>

          {/* Description */}
          <p className="text-gray-600 leading-relaxed text-lg">
            {food.description ||
              "Delicious food carefully prepared for your enjoyment."}
          </p>

          {/* Back Button */}
          <button
            onClick={() => navigate(-1)}
            className="text-white bg-[#e0b531] px-6 py-2 rounded-md hover:bg-[#d1a629] transition duration-300"
          >
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodDetail;
