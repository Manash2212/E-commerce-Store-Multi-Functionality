import React from "react";
// import react icons
import { IoIosArrowDown } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import { IoPersonOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { MdOutlineShoppingCart } from "react-icons/md";
// import Links from react-router-dom
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <section className="navbar py-2 px-5 text-lg box-border font-primary w-full fixed z-10">
      <div className="Wrapper flex items-center justify-between">
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
          <div className="item">
            <Link to="/products/1">Men</Link>
          </div>
          <div className="item">
            <Link to="/products/2">Women</Link>
          </div>
          <div className="item">
            <Link to="/products/3">Children</Link>
          </div>
          <div className="item">
            <Link to="/products/4">Accessories</Link>
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
          <div className="item">
            <Link to="/">Homepage</Link>
          </div>
          <div className="item">
            <Link to="/">About</Link>
          </div>
          <div className="item">
            <Link to="/">Contact</Link>
          </div>
          <div className="item">
            <Link to="/">Stores</Link>
          </div>
          <div className="logo flex justify-between gap-4 text-xl">
            <div className="item">
              <Link className="cursor-pointer" to={"/"}>
                <CiSearch />
              </Link>
            </div>
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

            <div className="item relative w-8 ">
              <Link className="cursor-pointer text-2xl" to={"/"}>
                <MdOutlineShoppingCart />
              </Link>
              <div className="absolute  right-0 -top-1 rounded-full  w-4 h-4 text-sm bg-blue-400 text-white flex items-center justify-center">
                <span className=" ">5</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
