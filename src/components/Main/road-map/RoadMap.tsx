"use client";

import { roadMap } from "@/constants";
import RoadMapCard from "./RoadMapCard";
import SectionHeader from "../section-header/SectionHeader";
import Image from "next/image";
import useFadeInOnScroll from "@/hooks/useFadeInOnScroll";

export default function RoadMap() {
  const { isVisible, elementRef } = useFadeInOnScroll(400);

  return (
    <section
      ref={elementRef}
      className={`w-screen tablet:h-[865px] mobile:h-[788px] tablet:pt-[97px] mobile:pt-[30px] transition-opacity duration-1000 ease-in-out ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="flex flex-col items-center tablet:gap-[105px] mobile:gap-[36px]">
        <SectionHeader subTitle="새롭게 구성한" title="13기의 로드맵" />

        <ul className="relative flex flex-wrap justify-center items-center gap-x-6 gap-y-5  desktop:w-[1041px] tablet:w-[686px] mobile:w-[331px] h-[416px]">
          {roadMap.map((item, index) => (
            <RoadMapCard
              key={`road-map-${index}`}
              month={item.month}
              content={item.content}
            />
          ))}
          <Image
            src="/assets/images/character/roadmap-lion.svg"
            alt="road-map-lion"
            width={185}
            height={261}
            className="mobile:hidden tablet:block desktop:w-[185px] tablet:w-[123px] desktop:h-[261px] tablet:h-[173px] absolute desktop:top-[248px] tablet:top-[372px] desktop:left-[905px] tablet:left-[562px]"
          />
        </ul>
      </div>
    </section>
  );
}
