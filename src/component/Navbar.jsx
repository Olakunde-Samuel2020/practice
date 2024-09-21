import React from "react";
import Logo from "/src/asset/Logo.png";
import "../index.css";

function Navbar() {
  return (
    <div className="flex align items-center justify-between w-full px-16 py-2 text-white">
      <img src={Logo} className="w-24 h-18 " />
      <div className="flex bg-custom-brown items-center rounded-md">
        <div className="btn btn-black normal-case  py-2 px-8  text-l hover:text-custom-brown hover:bg-cream hover:rounded-md">
          Home
        </div>
        <a
          className="btn btn-ghost normal-case  py-2 px-8 
 text-l hover:text-custom-brown hover:bg-cream hover:rounded-md"
        >
          About Us
        </a>
        <a
          className="btn btn-ghost normal-case  py-2 px-8 
 text-l hover:text-custom-brown hover:bg-cream hover:rounded-md"
        >
          Menu
        </a>
        <a className="btn btn-ghost normal-case  py-2 px-8   text-l hover:text-custom-brown hover:bg-cream hover:rounded-md">
          Contact
        </a>
      </div>
      <div>
        <button className="btn btn-primary border border-[#79523b] rounded-xl px-4 py-1 text-[#79523b] font-bold">
          Sign up
        </button>
      </div>
    </div>
  );
}
export default Navbar;
