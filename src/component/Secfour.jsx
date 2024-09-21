import "../index.css";
import React from "react";
import Card2 from "/src/component/card2";

function Secfour() {
  return (
    <>
      <div className="bg-cream  w-full px-6 py-8">
        <div className="py-4">
          <h1 className="text-center text-custom-brown py-2 text-5xl">
            Our Blog
          </h1>
          <p className="text-center text-custom-brown py-4 text-xl">
            Our Recent Blog
          </p>
        </div>
        <div className="grid grid-cols-3 gap-4 ">
          <Card2
            image="/src/asset/blogimg1.png"
            children="23 Nov, 2023 / Cheesecake"
            title="A Peek Behind the Cheesecake Curtain"
            description="Step into our cheesecake haven, where the magic unfolds behind the scenes, whisking dreams into reality. Our kitchen is a symphony and very..."
            children2="Read More "
          />
          <Card2
            image="/src/asset/blogimg2.png"
            children="23 Nov, 2023 / Cheesecake"
            title="A Peek Behind the Cheesecake Curtain"
            description="Step into our cheesecake haven, where the magic unfolds behind the scenes, whisking dreams into reality. Our kitchen is a symphony and very..."
            children2="Read More "
          />
          <Card2
            image="/src/asset/blogimg3.png"
            children="23 Nov, 2023 / Cheesecake"
            title="A Peek Behind the Cheesecake Curtain"
            description="Step into our cheesecake haven, where the magic unfolds behind the scenes, whisking dreams into reality. Our kitchen is a symphony and very..."
            children2="Read More "
          />
        </div>
      </div>
    </>
  );
}
export default Secfour;
