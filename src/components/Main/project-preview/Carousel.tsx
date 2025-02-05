"use client";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import SlideCard from "./SlideCard";
import { projectList } from "@/constants/carousel";
import Image from "next/image";
import { CustomArrowProps } from "react-slick";

function NextArrow(props: CustomArrowProps) {
  const { style, onClick } = props;

  return (
    <div
      style={{
        ...style,
        display: "block",
      }}
      className={`absolute top-[45%] -translate-y-1/2 right-[30%] flex justify-center items-center w-[44px] h-[44px] rounded-[84px] bg-[rgba(0,0,0,0.2)] cursor-pointer z-10
        `}
      onClick={onClick}
    >
      <div className="flex justify-center items-center w-full h-full">
        <Image
          src="/assets/icons/carousel-next-arrow.svg"
          width={11.78}
          height={20}
          alt="next-arrow"
        />
      </div>
    </div>
  );
}

function PrevArrow(props: CustomArrowProps) {
  const { style, onClick } = props;
  return (
    <div
      style={{
        ...style,
        display: "block",
      }}
      className={`absolute top-[45%] -translate-y-1/2 left-[30%] flex justify-center items-center w-[44px] h-[44px] rounded-[84px] bg-[rgba(0,0,0,0.2)] cursor-pointer z-10 `}
      onClick={onClick}
    >
      <div className="flex justify-center items-center w-full h-full">
        <Image
          src="/assets/icons/carousel-prev-arrow.svg"
          width={11.78}
          height={20}
          alt="next-arrow"
        />
      </div>
    </div>
  );
}

export default function Carousel() {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "0",
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 700,
    arrows: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    variableWidth: false,
    adaptiveHeight: false,
  };

  return (
    <div className="relative flex flex-col justify-center items-center w-full h-[464px] mb-[44px]">
      <Slider {...settings} className="w-full mx-auto">
        {projectList.map((project, index) => (
          <div key={index}>
            <SlideCard key={`project-carousel-${index}`} {...project} />
          </div>
        ))}
      </Slider>
    </div>
  );
}
