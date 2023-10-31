import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import Image, { StaticImageData } from "next/image";


type CarouselProps = {
  slides: StaticImageData[][]
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

  console.log(slides)

  return (
      <div className="h-screen h-width flex lg:flex-row flex-col bg-red-400 items-center overflow-scroll">
        {imagesToDisplay.map((image, idx) => (
          <>
            <Image
              src={image}
              key={idx}
              alt="test"
              width={500}
              height={500}
              className={"basis-1/2 lg:object-scale-down"}
            />
          </>
        ))}
      </div>        
  );
}

export default FullScreenCarousel;

