import React from "react";
import { FEATURED_PRODUCTS_DATA } from "../../utils/Constants";
import Card from "../Card/Card";

const FeatuerdProduct = ({ type, description }) => {
  return (
    <div className="featuredProducts my-20 mx-10 font-primary">
      <div className="container w-full mx-auto">
        <div className="top flex mb-12 justify-between  mx-auto w-[80%]">
          <h1 className="uppercase flex-1 pt-10 text-center text-[40px] ">
            {type}
          </h1>
          <p className="w-[50%] text-justify text-[17px] ">{description}</p>
        </div>
        <div className="bottom flex justify-center w-[80%] mx-auto gap-10">
          {FEATURED_PRODUCTS_DATA.map((item) => (
            <Card key={item.id} product={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeatuerdProduct;
