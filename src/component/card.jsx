import "../index.css";
import React, { Children } from "react";

function Card({ image, title, description, dollar, price, rating, children }) {
  return (
    <>
      <div className="bg-cream rounded-[3rem] py-6 px-6">
        <img src={image} className="w-1/2 h-auto mx-auto" />
        <div className="w-full h-1">{children}</div>
        <h1 className="text-4xl pt-6">{title}</h1>
        <p className="text-md">{description}</p>
        <div className="w-full h-1">{children}</div>
        <div className="flex items-center justify-between py-6 ">
          <p className="text-custom-brown text-xl font-bold">
            <span className="text-[#00FF00] font-bold">{dollar}</span>
            {price}
          </p>
          <div className="flex items-center space-x-2">
            <img src={rating} />
            <img src={rating} />
            <img src={rating} />
            <img src={rating} />
            <img src={rating} />
          </div>
        </div>
      </div>
    </>
  );
}
export default Card;
