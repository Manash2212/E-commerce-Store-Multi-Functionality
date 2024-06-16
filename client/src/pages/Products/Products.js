import React, { useState } from "react";
import List from "../../components/List/List";
import { useParams } from "react-router-dom";

const Products = () => {
  const catId = parseInt(useParams().id);
  // console.log(catId);
  const [maxPrice, setMaxPrice] = useState(25000);
  const [sort, setSort] = useState(null);
  return (
    <div className="products pt-[80px] pb-3 w-full font-primary">
      <div className="continer flex justify-between px-10">
        <div className="left w-[20%] flex flex-col gap-6 sticky top-5 h-full pt-10">
          <div className="filterItem">
            <h2 className="mb-1">Product Categories</h2>
            <div className="inputItem">
              <input className="mr-1" type="checkbox" id="1" value={1} />
              <label htmlFor="1">Shoes</label>
            </div>
            <div className="inputItem">
              <input className="mr-1" type="checkbox" id="2" value={2} />
              <label htmlFor="2">Blazers</label>
            </div>
            <div className="inputItem">
              <input className="mr-1" type="checkbox" id="3" value={3} />
              <label htmlFor="3">Top</label>
            </div>
            <div className="inputItem">
              <input className="mr-1" type="checkbox" id="4" value={4} />
              <label htmlFor="4">Shirt</label>
            </div>
          </div>
          <div className="filterItem">
            <h2 className="mb-1">Filter by Price</h2>
            <div className="inputItem">
              <span>500</span>
              <input
                className="mx-1"
                type="range"
                min={500}
                max={25000}
                onChange={(e) => setMaxPrice(e.target.value)}
              />
              <span>{maxPrice}</span>
            </div>
          </div>
          <div className="filterItem">
            <h2 className="mb-1">Short by</h2>
            <div className="inputItem">
              <input
                className="mr-1"
                type="radio"
                id="asen"
                value="asen"
                name="price"
                onChange={(e) => setSort("asen")}
              />
              <label htmlFor="5">Price (Low to high)</label>
            </div>
            <div className="inputItem">
              <input
                className="mr-1"
                type="radio"
                id="desc"
                value="desc"
                name="price"
                onChange={(e) => setSort("desc")}
              />
              <label htmlFor="6">Price (High to low)</label>
            </div>
          </div>
        </div>
        <div className="right w-[80%] py-10">
          <img
            src="https://images.unsplash.com/photo-1611403570720-162d8829689a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="banner"
            className="w-full h-[30vh] object-cover"
          />
          <List catId={catId} maxPrice={maxPrice} sort={sort} />
        </div>
      </div>
    </div>
  );
};

export default Products;
