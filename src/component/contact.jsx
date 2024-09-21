import "../index.css";
import React from "react";

function Contact() {
  return (
    <>
      <div className="bg-custom-brown w-full h-screen mx-auto">
        <div className="flex flex-row items-center justify-center w-full h-full ">
          <div className="w-1/2">
            <h1 className="text-cream text-5xl">Contact Us</h1>
            <p className="text-cream text-xl">
              Need to get in touch with us? Either fill out the form with your
              inquiry or find the department!
            </p>
            <img src="/src/asset/contact.png" className="w-1/2 h-auto" />
            <div>
              <img src="/src/asset/🦆 icon _facebook_.png" />
              <img src="/src/asset/🦆 icon _instagram_.png" />
              <img src="/src/asset/🦆 icon _twitter_.png" />
              <img src="/src/asset/🦆 icon _youtube_.png" />
            </div>
          </div>
          <div className="flex flex-col space-y-4 w-1/2">
            <input
              type="text"
              className="w-[25rem] text-lg px-6 py-4 placeholder-grey-500 rounded-full"
              placeholder="Name"
            />
            <input
              type="email"
              className="w-[25rem] text-lg px-6 py-4 placeholder-grey-500 rounded-full"
              placeholder="Name"
            />
            <textarea
              className="w-[25rem] text-lg px-6 py-4 placeholder-grey-500 rounded-lg h-[10rem]"
              placeholder="Your Message..."
            ></textarea>
            <button>Contact Us Now</button>
          </div>
        </div>
      </div>
    </>
  );
}
export default Contact;
