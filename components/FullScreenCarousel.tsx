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

  console.log(imagesToDisplay.length)

  return (
      <div className="h-screen h-width flex flex-no-wrap bg-red-400 space-x-2 items-center overflow-scroll">
        {imagesToDisplay.map((image, idx) => (
          <div
            key={idx}
            className={`w-1/${imagesToDisplay.length === 3 ? '2' : '3'} p-1 basis-1/2`}
          >
            <Image
              src={image.image}
              alt="test"
              width={image.image.width}
              height={image.image.height}
            />
          </div>
          //<>
          //  <Image
          //    src={image.image}
          //    alt="test"
          //    width={image.image.width}
          //    height={image.image.height}
          //    className={"w-auto h-auto max-w-full max-h-full"}
          //    //style={{ width: `${image.scale * 100}%` }}
          //  />
          //</>
        ))}
      </div>        
  );
}

export default FullScreenCarousel;

