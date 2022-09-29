import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";



const Banner = () => {
  return (
    <div className="w-full h-fit bg-pink-100">
      <div className="w-full max-w-screen-xl h-auto flex justify-between items-center mx-auto">
      <Link to="/">  <img className="object-contain" src={logo} alt="logo" style={{height:"50px"}} /></Link>
      
        <div className="flex space-x-4 text-pink-800 font-semibold">
          <span>+910123456789</span>
          <span>example@email.com</span>
        </div>
      </div>
    </div>
  );
};

export default Banner;
