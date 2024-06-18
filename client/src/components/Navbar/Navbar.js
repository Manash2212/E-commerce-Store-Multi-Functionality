import React, { useEffect, useState } from "react";
// import react icons
import { IoIosArrowDown } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import { IoPersonOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { MdOutlineShoppingCart } from "react-icons/md";
// import Links from react-router-dom
import { Link } from "react-router-dom";
import Cart from "../Cart/Cart";

const Navbar = () => {
  // for Cart
  const [IsOpen, setIsOpen] = useState(false);
  // for Navbar
  const [isActive, setIsActive] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
    });
  });
  return (
    // navbar py-2 px-5 text-lg box-border font-primary w-full fixed z-10
    <header
      className={`${
        isActive ? " bg-gray-200/95 py-1 shadow-md" : "bg-none "
      }  text-lg box-border font-primary w-full sticky z-10`}
    >
      <div className="Wrapper flex items-center py-2 px-5 justify-between">
        <div className="Left flex gap-3">
          <div className="item flex gap-1 items-center ">
            <img
              className="w-[38px] h-[22px] object-cover"
              src="/images/indian-flag.png"
              alt="flag"
            />
            <IoIosArrowDown className="cursor-pointer" />
          </div>
          <div className="item flex gap-1 items-center">
            <span className="text-xl font-primary">INR</span>
            <IoIosArrowDown className="cursor-pointer" />
          </div>
        </div>
        <div className="Center">
          <div className="item">
            <Link to="/">
              <img
                className="w-[100px] "
                src="/images/manash-logo.png"
                alt="/manash-logo"
              />
            </Link>
          </div>
        </div>
        <div className="Right text-lg flex justify-between items-center gap-5">
          <div className="logo flex justify-between gap-4 text-xl">
            <div className="item">
              <Link className="cursor-pointer" to={"/"}>
                <CiHeart />
              </Link>
            </div>

            <div className="item">
              <Link className="cursor-pointer" to={"/"}>
                <IoPersonOutline />
              </Link>
            </div>

            <div
              className="item relative w-8  "
              onClick={() => setIsOpen(!IsOpen)}
            >
              <MdOutlineShoppingCart className="cursor-pointer text-2xl" />

              <div className="absolute  right-0 -top-1 rounded-full  w-4 h-4 text-sm bg-blue-400 text-white flex items-center justify-center">
                <span className=" ">5</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {IsOpen && <Cart />}
      <div
        className={`${
          isActive ? "fixed top-0" : "sticky"
        } flex  items-center justify-between px-2 bg-gray-200 w-full h-[50px]`}
      >
        <div className="items h-full   w-[60%] ">
          <ul className="flex h-full items-center justify-around text-black/80 ">
            <li className="h-full flex items-center cursor-pointer px-1 hover:bg-white">
              <Link to={"/"}>Men</Link>
            </li>
            <li className="h-full flex items-center cursor-pointer px-1 hover:bg-white">
              <Link to={"/"}>Women</Link>
            </li>
            <li className="h-full flex items-center cursor-pointer px-1 hover:bg-white">
              <Link to={"/"}>Kids</Link>
            </li>
            <li className="h-full flex items-center cursor-pointer px-1 hover:bg-white">
              <Link to={"/"}>Designer</Link>
            </li>
            <li className="h-full flex items-center cursor-pointer px-1 hover:bg-white">
              <Link to={"/"}>Clothing</Link>
            </li>
            <li className="h-full flex items-center cursor-pointer px-1 hover:bg-white">
              <Link to={"/"}>Bags</Link>
            </li>
            <li className="h-full flex items-center cursor-pointer px-1 hover:bg-white">
              <Link to={"/"}>Footwear</Link>
            </li>
            <li className="h-full flex items-center cursor-pointer px-1 hover:bg-white">
              <Link to={"/"}>Accessories</Link>
            </li>
            <li className="h-full flex items-center cursor-pointer px-1 hover:bg-white">
              <Link to={"/"}>Offers</Link>
            </li>
          </ul>
        </div>
        <div className="search  bg-white py-[2px] w-[30%]">
          <div className="item flex items-center justify-start  w-full">
            <CiSearch className="bg-white text-2xl mx-1" />
            <input
              type="search"
              placeholder="Search for products"
              className="w-full outline-none border-none text-gray-600"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
