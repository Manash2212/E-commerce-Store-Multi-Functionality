import React from "react";
import Slider from "../../components/Slider/Slider";
import {
  FEATURED_TEXT,
  SECOND_SLIDER_IMAGES,
  SLIDER_IMAGES,
  TRENDING_TEXT,
} from "../../utils/Constants";
import FeatuerdProduct from "../../components/FeatuerdProducts/FeatuerdProduct";
import Categories from "../../components/Categories/Categories";
import SecondSlider from "../../components/Slider/SecondSlider";
import ContactUs from "../../components/Contact/ContactUs";

const Home = () => {
  return (
    <div className="pt-[10px] pb-3 w-full scroll-smooth">
      <Slider autoSlide={true} autoSlideInterval={3000}>
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
      <Categories />
      <FeatuerdProduct type="trending" description={TRENDING_TEXT} />
      <SecondSlider autoSlide={true} autoSlideInterval={2000}>
        {SECOND_SLIDER_IMAGES.map((slider, i) => (
          <img
            className="min-w-full h-full object-cover"
            src={slider}
            alt="img"
            key={i}
          />
        ))}
      </SecondSlider>
      <ContactUs />
    </div>
  );
};

export default Home;
