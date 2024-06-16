import React, { useState } from "react";
import { Link } from "react-router-dom";

const Card = ({ product }) => {
  const [newItem, setNewItem] = useState(product.isNew);
  return (
    <div className="cards py-20 w-full">
      <div className="container group [perspective:1000px] ">
        <Link to={`/product/${product.id}`}>
          <div className="image relative w-[280px] h-[350px] shadow-xl rounded-xl ">
            <div className="img1 absolute inset-0 transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]  shadow-md rounded-xl">
              <img
                src={product.img}
                alt="img1"
                className={`${
                  newItem ? "group-hover:hidden " : "block"
                } w-full h-full object-cover rounded-xl `}
              />
            </div>
            <div className="img2 absolute inset-0 h-full w-full transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] shadow-md rounded-xl">
              <img
                src={product.img2}
                alt="img2"
                className={`${
                  newItem ? "group-hover:block" : ""
                } hidden w-full h-full object-cover rounded-xl `}
              />
            </div>
            {product.isNew && (
              <span className="medium absolute top-3 left-1 w-[110px] py-0.5 px-0.5  text-center bg-white text-green-600 text-sm">
                New Collection
              </span>
            )}
          </div>
          <h2 className="pt-3 pl-3">{product.title}</h2>
          <div className="prices flex items-start justify-start gap-5 pt-2 pl-3">
            <h3 className="line-through text-black/40">₹{product.oldprice}</h3>
            <span>-</span>
            <h3>₹{product.newprice}</h3>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Card;
