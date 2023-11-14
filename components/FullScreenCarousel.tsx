import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import Image, { StaticImageData } from "next/image";
import Slide from "@/types";

type CarouselProps = {
  slides: Slide[][]
}

const SlideGen = (props: {images: Slide[]}) => {
  const images = props.images
  const len = images.length

  switch (len) {
    case 1:
      return (
        <div className="flex justify-center items-center h-screen w-screen bg-yellow-300 space-x-1">
          <div className="bg-green-400 ">
            1
          </div>
        </div>   
      );
    case 2:
      return (
        <div className="flex justify-center items-center h-screen w-screen bg-yellow-300 space-x-1">
            <div className="bg-green-400 w-1/2 h-full h-1/2">1</div>
            <div className="bg-green-400 w-1/2 h-full h-1/2">2</div>
        </div>   
      );
    case 3:
      return (
        <div className="flex h-4/5 w-screen bg-yellow-300 space-x-1 overflow-scroll">
          <div className="w-1/2 md:w-1/3 bg-green-100 max-h-full">
            <Image 
              src={images[0].image}
              className="w-full h-full"
            />
          </div>
          <div className="flex-column md:flex w-1/2 md:w-2/3 md:space-x-1 max-h-full bg-blue-300">
            <div className="bg-green-100 md:w-1/2 md:h-full h-1/2">
              <Image 
                src={images[1].image}
                className="w-full h-full"
              />
            </div>
            <div className="bg-green-100 md:w-1/2 md:h-full h-1/2">
              <Image 
                src={images[2].image}
                className="w-full h-full"
              />
            </div>
          </div>
        </div>   
      );
    default:
      return (
         <></> 
      );
  }
}

function FullScreenCarousel(props :CarouselProps) {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  const slides = props.slides
  const imagesToDisplay = slides[activeSlideIndex];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlideIndex((activeSlideIndex + 1) % slides.length);
    }, 3000); // Change sets every 3 seconds (adjust the time as needed)

    return () => clearInterval(timer); // Cleanup when the component unmounts
  }, [activeSlideIndex, slides]);

  console.log(imagesToDisplay)

  return (
      <div className="h-screen h-width flex flex-no-wrap text-black bg-red-400 space-x-1 space-y-1 items-center overflow-none">
        <SlideGen images={imagesToDisplay} />
      </div>        
  );
}

export default FullScreenCarousel;

