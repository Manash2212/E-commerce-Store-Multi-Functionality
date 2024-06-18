import React, { useState } from "react";
// importing button
import { MdAddShoppingCart } from "react-icons/md";
import { IoIosGitCompare, IoMdHeartEmpty } from "react-icons/io";
import { FaMinus, FaPlus } from "react-icons/fa6";

const Product = () => {
  // image State
  const [selectedImage, setSelectedImage] = useState(0);
  // quantity State
  const [quantity, setQuantity] = useState(1);
  const images = [
    "https://images.unsplash.com/photo-1698310876823-07560532c1bf?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1698310876812-1c7f92bfbe4a?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];
  return (
    <div className="product py-[100px] px-5  font-primary">
      <div className="container flex gap-4">
        <div className="left flex gap-4  w-[50%] ">
          <div className="image flex flex-col gap-4  ">
            <img
              src={images[0]}
              alt=""
              className="w-[120px] h-[120px] object-cover cursor-pointer"
              onClick={() => setSelectedImage(0)}
            />
            <img
              src={images[1]}
              alt=""
              className="w-[120px] h-[120px] object-cover cursor-pointer"
              onClick={() => setSelectedImage(1)}
            />
          </div>
          <div className="mainImage w-[600px] h-[600px] shadow-lg">
            <img
              src={images[selectedImage]}
              alt=""
              className=" w-full h-full shadow-lg"
            />
          </div>
        </div>
        <div className="right  flex flex-col w-[50%]">
          <h1 className="text-2xl font-bold ">Latex Shego inspired Catsuit</h1>
          <span className="tracking-wider my-2 text-xl text-blue-600 font-semibold  ">
            ₹9999
          </span>
          <p className="text-md">
            {" "}
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum
            molestiae aut odit nesciunt, incidunt voluptatem laborum eaque,
            necessitatibus, error ducimus dolor. Nemo fugiat iusto commodi
            incidunt hic. Architecto, nam sapiente sed fuga aperiam quis
            reiciendis esse voluptatibus inventore tempore eos eius nemo, soluta
            cumque voluptatum consectetur ut officia iure? Deleniti.{" "}
          </p>
          <div className="Quantity my-5 flex gap-2 items-center text-xl">
            <button
              className="w-8 py-1 px-2 text-center flex items-center justify-center  border-2 border-black"
              onClick={() => setQuantity((prev) => (prev === 1 ? 1 : prev - 1))}
            >
              <FaMinus />
            </button>
            {quantity}
            <button
              className="w-8 py-1 px-2 text-center flex items-center justify-center  border-2 border-black"
              onClick={() => setQuantity((prev) => prev + 1)}
            >
              <FaPlus />
            </button>
          </div>
          <button className="add uppercase w-[180px] flex items-center justify-center gap-2 py-1.5  my-4 font-semibold bg-blue-400 text-white">
            <MdAddShoppingCart className="text-xl" />
            Add to cart
          </button>
          <div className="wish-compare flex mt-2 gap-4">
            <span className="underline flex items-center justify-center text-blue-600 cursor-pointer uppercase font-medium py-1 px-2 gap-2">
              <IoMdHeartEmpty className="text-xl underline" /> Add to Wish list
            </span>
            <span className="underline flex items-center justify-center text-blue-600 cursor-pointer uppercase font-medium py-1 px-2 gap-2">
              <IoIosGitCompare className="text-xl underline" /> Add to Compare
            </span>
          </div>
          <div className="info my-5 text-gray-500 font-normal">
            <h4>Vendor: Polo</h4>
            <h4>Product type: T-shirt</h4>
            <h4>Tag: T-shirt, Women,Top</h4>
          </div>
          <span></span>
          <div className="details">
            <h2 className="text-gray-500 font-normal mb-2 border-b-[1px] border-gray-500 w-[150px]">
              DESCRIPTION
            </h2>
            <h2 className="text-gray-500 font-normal mb-2 border-b-[1px] border-gray-500 w-[150px]">
              Addtional Information
            </h2>
            <h2 className="text-gray-500 font-normal mb-2 border-b-[1px] border-gray-500 w-[150px]">
              FAQ
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
