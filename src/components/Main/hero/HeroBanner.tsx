"use client";

import RotatingImage from "./RotatingImage";

export default function HeroBanner() {
  return (
    <section className="relative flex flex-col items-center w-screen tablet:h-[731px] mobile:h-[718px] tablet:pt-[151px] mobile:pt-[240px]">
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

      <div className="absolute desktop:top-[56px] desktop:left-[10%] tablet:top-[90px] tablet:left-[5%] mobile:top-[0] mobile:left-[2%]">
        <RotatingImage
          src="/assets/images/hero/sitting-lion.svg"
          size={{ width: 254, height: 325 }}
        />
      </div>
      <div className="absolute desktop:top-[339px] desktop:left-[12%] tablet:top-[280px] tablet:left-[5%] mobile:top-[270px] mobile:left-[-5%]">
        <RotatingImage
          src="/assets/images/hero/frontend.svg"
          size={{ width: 368, height: 324 }}
        />
      </div>
      <div className="absolute desktop:top-[455px] desktop:left-[55%] tablet:top-[380px] tablet:left-[48%] mobile:top-[500px] mobile:left-[38%]">
        <RotatingImage
          src="/assets/images/hero/design.svg"
          size={{ width: 176, height: 179 }}
        />
      </div>
      <div className="absolute desktop:top-[53px] desktop:left-[64%] tablet:top-[70px] tablet:left-[53%] mobile:top-[30px] mobile:left-[38%]">
        <RotatingImage
          src="/assets/images/hero/backend.svg"
          size={{ width: 343, height: 357 }}
        />
      </div>
      <div className="absolute desktop:top-[232px] desktop:left-[75%] tablet:top-[200px] tablet:left-[65%] mobile:top-[340px] mobile:left-[55%]">
        <RotatingImage
          src="/assets/images/hero/pointer.svg"
          size={{ width: 252, height: 338 }}
        />
      </div>
    </section>
  );
}
