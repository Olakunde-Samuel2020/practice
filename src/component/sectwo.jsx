import "../index.css";
import React from "react";
import Aboutus from "/src/asset/Aboutmg.png";

function Sectwo() {
  return (
    <>
      <div className="bg-cream h-screen w-full">
        <div className="flex items-center justify-between text-custom-brown px-12 py-10 space-x-8 ">
          <img src={Aboutus} className="w-1/2" />
          <div>
            <h1 className="text-6xl pb-2">We Love Cheesecake</h1>
            <p className="text-3xl  pb-10">Discover Our Cheesecake Story</p>
            <div className="text-2xl pb-10">
              We at Cheesecake love, quality is our cornerstone. Each cheesecake
              is crafted with the finest ingredients, meticulous attention to
              detail, and a dash of creativity.
            </div>
            <p className="text-2xl pb-10">
              We believe in delievering not just desert but moment of sheer
              indulgence.
            </p>
            <button className="text-2xl px-8 py-4 rounded-full bg-custom-brown text-white shadow-2xl">
              Read More
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
export default Sectwo;
