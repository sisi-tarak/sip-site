"use client";
import React, { useState } from "react";
import { Heart } from "lucide-react";
import { motion } from "framer-motion";

const CourseCard = () => {
  const [isActive, setIsActive] = useState(false);
  const handleClick = () => {
    setIsActive((prevState) => !prevState);
  };
  return (
    <div className="flex justify-center items-center h-svh w-full mx-auto ">
      <div className="bg-white bg-gray-50 border dark:border-none  rounded-2xl">
        <div className="w-full h-56 relative">
          <motion.button
            className="absolute top-2 right-3 z-20 text-2xl text-white"
            onClick={handleClick}
            animate={{ scale: isActive ? 1.2 : 1 }}
            transition={{ type: "spring", stiffness: 1000, damping: 10 }}
          >
            {isActive ? (
              <>
                <Heart className=" fill-red-500 text-transparent" />
              </>
            ) : (
              <>
                <Heart />
              </>
            )}
          </motion.button>
          <img
            src={
              "https://images.unsplash.com/photo-1605733160314-4fc7dac4bb16?q=80&w=2090&auto=format&fit=crop"
            }
            alt="shoes"
            width={1000}
            height={1000}
            className={`h-56 w-full rounded-2xl object-cover `}
          />
        </div>
        <article className="text-black p-2 pb-3 my-3">
          <div className="flex justify-between">
            <h1 className="font-semibold font-ubuntu text-xl text-backgroundColor">
              Front-End Development
            </h1>
            <span className="font-medium font-ubuntu text-xl text-backgroundColor">
              $394
            </span>
          </div>
          <p className="text-xs font-ubuntu text-black mt-1">
            Lorem ipsum, dolor sit amet consectetur adipisicing
          </p>
          <div className="mt-5">
            <button className="w-full font-ubuntu text-backgroundColor hover:text-headColor flex justify-center items-center border-backgroundColor border-2 text-backgroundColor hover:bg-gradient-to-tr from-backgroundColor to-brandsBgColor py-2 uppercase tracking-wide rounded-md">
              Enroll
            </button>
          </div>
        </article>
      </div>
    </div>
  );
};

export default CourseCard;
