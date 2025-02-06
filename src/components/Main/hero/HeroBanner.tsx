"use client";

import useFadeInOnScroll from "@/hooks/useFadeInOnScroll";
import RotatingImage from "./RotatingImage";

export default function HeroBanner() {
  const { isVisible, elementRef } = useFadeInOnScroll(400);

  return (
    <section
      ref={elementRef}
      className={`relative flex flex-col items-center w-screen tablet:h-[731px] mobile:h-[718px] tablet:pt-[151px] mobile:pt-[240px] transition-opacity duration-1000 ease-in-out ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="flex flex-col items-center tablet:gap-[28px] mobile:gap-[14px] z-10">
        <h3
          className="flex justify-center items-center rounded-[4px] bg-primary font-bold text-white tracking-[-0.5%]
                       tablet:w-[235px] tablet:h-[53px] tablet:text-[24px]
                       mobile:w-[184px] mobile:h-[45px] mobile:text-[18px]"
        >
          멋쟁이 사자처럼 13기
        </h3>
        <h2 className="flex justify-center items-center tablet:text-[48px] mobile:text-[26px] font-bold text-white tablet:leading-[60px] mobile:leading-[33px] tracking-[-0.005em] text-center">
          멋쟁이 사자처럼에서 <br /> 13기 아기사자를 모집합니다!
        </h2>
      </div>
      <div className="absolute desktop:top-[130px] desktop:left-[16%] tablet:top-[160px] tablet:left-[10%] mobile:top-[0] mobile:left-[10%]">
        <RotatingImage
          src="/assets/images/hero/sitting-lion.svg"
          size={{ width: 117, height: 150 }}
        />
      </div>
      <div className="absolute desktop:top-[415px] desktop:left-[20%] tablet:top-[330px] tablet:left-[13%] mobile:top-[340px] mobile:left-[7%]">
        <RotatingImage
          src="/assets/images/hero/frontend.svg"
          size={{ width: 170, height: 149 }}
        />
      </div>
      <div className="absolute desktop:top-[490px] desktop:left-[57%] tablet:top-[400px] tablet:left-[54%] mobile:top-[530px] mobile:left-[45%]">
        <RotatingImage
          src="/assets/images/hero/design.svg"
          size={{ width: 81, height: 82 }}
        />
      </div>
      <div className="absolute desktop:top-[150px] desktop:left-[70%] tablet:top-[160px] tablet:left-[65%] mobile:top-[125px] mobile:left-[50%]">
        <RotatingImage
          src="/assets/images/hero/backend.svg"
          size={{ width: 158, height: 165 }}
        />
      </div>
      <div className="absolute desktop:top-[320px] desktop:left-[78%] tablet:top-[280px] tablet:left-[75%] mobile:top-[400px] mobile:left-[65%]">
        <RotatingImage
          src="/assets/images/hero/pointer.svg"
          size={{ width: 110, height: 135 }}
        />
      </div>
    </section>
  );
}
