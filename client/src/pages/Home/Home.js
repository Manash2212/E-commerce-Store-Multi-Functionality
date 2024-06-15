import React from "react";
import Slider from "../../components/Slider/Slider";
import {
  FEATURED_TEXT,
  SLIDER_IMAGES,
  TRENDING_TEXT,
} from "../../utils/Constants";
import FeatuerdProduct from "../../components/FeatuerdProducts/FeatuerdProduct";

const Home = () => {
  return (
    <div className="pt-[80px] pb-3 w-full  ">
      <Slider autoSlide={true} autoSlideInterval={2000}>
        {SLIDER_IMAGES.map((slider, i) => (
          <img
            className="min-w-full h-full object-cover"
            src={slider}
            alt="img"
            key={i}
          />
        ))}
      </Slider>
      <FeatuerdProduct type="featured" description={FEATURED_TEXT} />
      <FeatuerdProduct type="trending" description={TRENDING_TEXT} />
    </div>
  );
};

export default Home;
