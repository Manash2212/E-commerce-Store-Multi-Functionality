import React, { useEffect, useState } from "react";
// import { SLIDER_IMAGES as slides } from "../../utils/Constants";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Slider = ({
  children: slides,
  autoSlide = false,
  autoSlideInterval = 3000,
}) => {
  // slider Hook
  const [currentSlide, setCurrentSlide] = useState(0);
  const PrevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? 3 : (prev) => prev - 1);
  };
  const NextSlide = () => {
    setCurrentSlide(currentSlide === 3 ? 0 : (prev) => prev + 1);
  };

  useEffect(() => {
    if (!autoSlide) return;
    const slideInterval = setInterval(NextSlide, autoSlideInterval);
    return () => clearInterval(slideInterval);
  });
  return (
    <div className="slider w-full h-[85vh]">
      <div className="container overflow-hidden flex  max-w-[100vw]  h-full relative ">
        <div
          className="img-container flex transition-all ease-in duration-500"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides}
        </div>

        {/* For Arrow Click */}
        <div className="signal absolute inset-0 flex items-center justify-between px-4">
          <button
            className="p-1 rounded-full shadow-md bg-white/80 hover:bg-white"
            onClick={PrevSlide}
          >
            <IoIosArrowBack />
          </button>
          <button
            className="p-1 rounded-full shadow-md bg-white/80 hover:bg-white"
            onClick={NextSlide}
          >
            <IoIosArrowForward />
          </button>
        </div>

        {/* For Image Navigator */}
        <div className="navigator absolute bottom-0 py-4 flex justify-center gap-3 w-full">
          {slides.map((img, i) => (
            <div
              onClick={() => setCurrentSlide(i)}
              key={"circle" + i}
              className={`transition-all rounded-full w-1.5 h-1 ${
                i === currentSlide ? "bg-white scale-125" : "bg-gray-400"
              } cursor-pointer`}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Slider;
