import "../index.css";
import React from "react";

function Card2({ image, title, description, children, children2 }) {
  return (
    <>
      <div className="bg-cream rounded-[2.5rem] py-6 px-6 w-[20rem] shadow-2xl text-custom-brown">
        <img src={image} className="w-[25rem] h-auto mx-auto" />
        <div className="w-full text-lg pt-4">{children}</div>
        <h1 className="text-2xl pt-4">{title}</h1>
        <p className="text-sm pt-4">{description}</p>
        <div className="w-full text-md font-bold h-1 py-4">{children2}</div>
      </div>
    </>
  );
}
export default Card2;
