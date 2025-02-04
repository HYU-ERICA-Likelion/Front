"use client";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import SlideCard from "./SlideCard";
import { projectList } from "@/constants/carousel";
import { useState } from "react";

function NextArrow(props: any) {
  const { style, onClick, currentIndex } = props;

  return (
    <div
      style={{
        ...style,
        display: `${
          currentIndex === projectList.length - 1 ? "none" : "block"
        }`,
      }}
      className={`absolute top-[45%] -translate-y-1/2 right-[30%] flex justify-center items-center w-[44px] h-[44px] rounded-[84px] bg-[rgba(0,0,0,0.2)] cursor-pointer z-10
        `}
      onClick={onClick}
    >
      <div className="flex justify-center items-center w-full h-full">
        <img src="/assets/icons/carousel-next-arrow.svg" alt="next-arrow" />
      </div>
    </div>
  );
}

function PrevArrow(props: any) {
  const { style, onClick, currentIndex } = props;
  return (
    <div
      style={{
        ...style,
        display: `${currentIndex === 0 ? "none" : "block"}`,
      }}
      className={`absolute top-[45%] -translate-y-1/2 left-[30%] flex justify-center items-center w-[44px] h-[44px] rounded-[84px] bg-[rgba(0,0,0,0.2)] cursor-pointer z-10 `}
      onClick={onClick}
    >
      <div className="flex justify-center items-center w-full h-full">
        <img src="/assets/icons/carousel-prev-arrow.svg" alt="next-arrow" />
      </div>
    </div>
  );
}

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "0",
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 700,
    arrows: true,
    prevArrow: <PrevArrow currentIndex={currentIndex} />,
    nextArrow: <NextArrow currentIndex={currentIndex} />,
    // 인덱스 변경 직전에 호출
    beforeChange: (_: any, nextIndex: number) => {
      setCurrentIndex(nextIndex);
    },
  };

  return (
    <div className="relative flex flex-col justify-center items-center w-full h-[464px] mb-[44px]">
      <Slider {...settings} className="w-full mx-auto">
        {projectList.map((project, index) => (
          <SlideCard key={`project-carousel-${index}`} {...project} />
        ))}
      </Slider>
    </div>
  );
}
