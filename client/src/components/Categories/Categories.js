import React from "react";
import { CATEGORIES_IMAGE as img } from "../../utils/Constants";
import { Link } from "react-router-dom";

const Categories = () => {
  return (
    <div className=" text-primary mx-auto">
      <div className="container mx-auto flex flex-col justify-center items-center">
        <h1 className="uppercase text-center my-10 text-xl tracking-wide w-full  py-2">
          Categories
        </h1>
        <div className="main grid grid-cols-10 grid-rows-4 gap-1  w-[90vw] h-[90vh]  ">
          <div className="col col-span-3 row-span-3  shadow-md relative cursor-pointer">
            <img
              src={img[0].img}
              className="w-full h-full object-cover shadow-xl hover:object-left transition-all duration-500"
              alt=""
            />
            <button className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white/90 hover:bg-white min-w-[100px] px-2  text-xl font-bold uppercase py-1">
              <Link to={`/products/1`}>Women</Link>
            </button>
          </div>
          <div className="col col-span-4 row-span-1  shadow-md relative cursor-pointer">
            <img
              src={img[1].img}
              className="w-full h-full object-cover shadow-xl hover:object-bottom transition-all duration-500"
              alt=""
            />
            <button className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white/90 hover:bg-white min-w-[100px] px-2  text-xl font-bold uppercase py-1">
              <Link to={`/products/1`}>men</Link>
            </button>
          </div>
          <div className="col col-span-3 row-span-1  shadow-md relative cursor-pointer">
            <img
              src={img[4].img}
              className="w-full h-full object-cover shadow-xl hover:object-bottom transition-all duration-500"
              alt=""
            />
            <button className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white/90 hover:bg-white min-w-[100px] px-2  text-xl font-bold uppercase py-1">
              <Link to={`/products/1`}>Shoes</Link>
            </button>
          </div>
          <div className="col col-span-4 row-span-2  shadow-md relative cursor-pointer">
            <img
              src={img[3].img}
              className="w-full h-full object-cover shadow-xl hover:object-bottom transition-all duration-500"
              alt=""
            />
            <button className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white/90 hover:bg-white min-w-[100px] px-2  text-xl font-bold uppercase py-1">
              <Link to={`/products/1`}>Bags</Link>
            </button>
          </div>
          <div className="col col-span-3 row-span-2  shadow-md relative cursor-pointer">
            <img
              src={img[2].img}
              className="w-full h-full object-cover shadow-xl hover:object-bottom transition-all duration-500"
              alt=""
            />
            <button className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white/90 hover:bg-white min-w-[100px] px-2  text-xl font-bold uppercase py-1">
              <Link to={`/products/1`}>Upcomming</Link>
            </button>
          </div>
          <div className="col col-span-4 row-span-5  shadow-md relative cursor-pointer">
            <img
              src={img[5].img}
              className="w-full h-full object-cover shadow-xl hover:object-bottom transition-all duration-500"
              alt=""
            />
            <button className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white/90 hover:bg-white min-w-[100px] px-2  text-xl font-bold uppercase py-1">
              <Link to={`/products/1`}>Accesories</Link>
            </button>
          </div>
          <div className="col col-span-6 row-span-5  shadow-md relative cursor-pointer">
            <img
              src={img[6].img}
              className="w-full h-full object-cover shadow-xl hover:object-bottom transition-all duration-500"
              alt=""
            />
            <button className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white/90 hover:bg-white min-w-[100px] px-2  text-xl font-bold uppercase py-1">
              <Link to={`/products/1`}>Sale</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
