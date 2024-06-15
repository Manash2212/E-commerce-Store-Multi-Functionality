import React from "react";
import { FEATURED_PRODUCTS_DATA } from "../../utils/Constants";
import Card from "../Card/Card";

const FeatuerdProduct = ({ type }) => {
  return (
    <div className="featuredProducts my-20 mx-10">
      <div className="container">
        <div className="top flex ">
          <h1 className="uppercase flex-2">{type}</h1>
          <p className="flex-3">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt
            sapiente, totam magni optio, corporis unde aut quia architecto
            suscipit expedita beatae vel temporibus molestias nostrum
            voluptatibus deleniti quisquam pariatur voluptas iusto laboriosam
            minima illum aliquid ut? Laborum aperiam ipsam impedit voluptate
            odio eveniet culpa quaerat, facere voluptas maiores dignissimos,
            blanditiis dolore reiciendis sint enim doloribus molestiae beatae
            ratione animi accusantium.
          </p>
        </div>
        <div className="bottom ">
          {FEATURED_PRODUCTS_DATA.map((item) => (
            <Card key={item.id} product={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeatuerdProduct;
