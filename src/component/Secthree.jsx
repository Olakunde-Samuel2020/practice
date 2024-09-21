import "../index.css";
import React from "react";
import Card from "/src/component/card";

function Secthree() {
  return (
    <>
      <div className="bg-custom-brown h-screen w-full px-6">
        <h1 className="text-center text-cream py-8 text-5xl">Our Menu</h1>
        <div className="grid grid-cols-3 gap-4 ">
          <Card
            image="/src/asset/menu1.png"
            title="Blueberry Cheesecake"
            description="Blueberry love, Cheesecake delight!"
            dollar="$ "
            price="9.00"
            rating="/src/asset/fi-sr-star.png" // Rating out of 5
          />
          <Card
            image="/src/asset/menu2.png"
            title="Biscoff Cheesecake"
            children=""
            description="Biscoff adores cheesecake magic."
            dollar="$ "
            price="11.00"
            rating="/src/asset/fi-sr-star.png" // Rating out of 5
          />
          <Card
            image="/src/asset/menu3.png"
            title="Chocolate Cheesecake"
            description="Cherish Chocolate, relish cheesecake magic!"
            dollar="$ "
            price="10.00"
            rating="/src/asset/fi-sr-star.png" // Rating out of 5
          />
        </div>
        <p className="text-right w-full py-6 text-cream text-xl ">
          View More <span className="text-2xl"> > </span>
        </p>
      </div>
    </>
  );
}
export default Secthree;
