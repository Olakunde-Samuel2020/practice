import "../index.css";
import React from "react";
import Navbar from "/src/component/Navbar";
import Hero from "/src/component/Hero";
import Sectwo from "/src/component/sectwo";
import Secthree from "/src/component/Secthree";
import Secfour from "/src/component/Secfour";
import Contact from "/src/component/contact";
function Landpage() {
  return (
    <>
      <div className=" bg-[url('/src/asset/Mainbg.png')] bg-cover w-full h-screen ">
        <Navbar />
        <Hero />
        <Sectwo />
        <Secthree />
        <Secfour />
        <Contact/>
      </div>
    </>
  );
}
export default Landpage;
