import "../index.css";
import React from "react";
import Vector from "/src/asset/Vector.png";

function Hero() {
  return (
    <>
      <div className="flex items-center justify-between relative z-10 text-custom-brown h-screen pb-7xl">
        <div className="pr-[30rem] pl-[5rem]  pt-[0.5rem]">
          <h1 className="text-7xl pb-[2rem] leading-tight ">
            Bite The World of Cheesecake Wonders
          </h1>
          <p className="text-xl pr-[19.5rem]">
            We always make our customer happy by providing as many choices as
            possible
          </p>
          <div className="flex items-center space-x-5 text-xl pt-[2rem] pb-7xl">
            <button className="bg-custom-brown text-white rounded-full px-6 py-4 shadow-2xl">
              Get Started
            </button>
            <div className="flex items-center space-x-3 border border-custom-brown rounded-full px-6 py-4">
              <img src={Vector} className="w-6 h-6" />
              <span>Get Started</span>
            </div>
          </div>
        </div>
        <div className="absolute z- top-[-2.4rem] right-0">
          <img src="/src/asset/Hero.png" className="" />
        </div>
      </div>
    </>
  );
}
export default Hero;
