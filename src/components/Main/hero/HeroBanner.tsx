"use client";

import RotatingImage from "./RotatingImage";

export default function HeroBanner() {
  return (
    <section className="relative flex flex-col items-center w-screen h-[731px] pt-[151px]">
      <div className="flex flex-col items-center gap-[28px] z-10">
        <h3 className="flex justify-center items-center w-[235px] h-[53px] rounded-[4px] bg-primary text-[24px] font-bold text-white tracking-[-0.5%]">
          멋쟁이 사자처럼 13기
        </h3>
        <h2 className="flex justify-center items-center text-[48px] font-bold text-white leading-[60px] tracking-[-0.005em] text-center">
          멋쟁이 사자처럼에서 <br /> 13기 아기사자를 모집합니다!
        </h2>
      </div>

      <RotatingImage
        src="/assets/images/hero/sitting-lion.svg"
        positionStyles={{ top: 56, left: 10 }}
        size={{ width: 254, height: 325 }}
      />
      <RotatingImage
        src="/assets/images/hero/frontend.svg"
        positionStyles={{ top: 339, left: 12 }}
        size={{ width: 368, height: 324 }}
      />
      <RotatingImage
        src="/assets/images/hero/design.svg"
        positionStyles={{ top: 455, right: 33 }}
        size={{ width: 176, height: 179 }}
      />
      <RotatingImage
        src="/assets/images/hero/backend.svg"
        positionStyles={{ top: 53, right: 10 }}
        size={{ width: 343, height: 357 }}
      />
      <RotatingImage
        src="/assets/images/hero/pointer.svg"
        positionStyles={{ top: 232, right: 7 }}
        size={{ width: 252, height: 338 }}
      />
    </section>
  );
}
