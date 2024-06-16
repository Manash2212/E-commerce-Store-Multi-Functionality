import React from "react";
import { FEATURED_PRODUCTS_DATA } from "../../utils/Constants";
import Card from "../Card/Card";

const List = () => {
  return (
    <div className="list w-full">
      <div className="container">
        <div className="bottom flex justify-between flex-wrap mx-auto gap-3 ">
          {FEATURED_PRODUCTS_DATA.map((item) => (
            <Card key={item.id} product={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default List;
