"use client";

import { trackOverview } from "@/constants/track-overview";
import TrackCard from "./TrackCard";
import SectionHeader from "../section-header/SectionHeader";
import useFadeInOnScroll from "@/hooks/useFadeInOnScroll";

export default function TrackOverview() {
  const { isVisible, elementRef } = useFadeInOnScroll(400);

  return (
    <section
      ref={elementRef}
      className={`flex flex-col items-center desktop:gap-[105px] tablet:gap-[48px] mobile:gap-[53px] w-screen tablet:h-[810px] mobile:h-[1354px] desktop:pt-[97px] mobile:pt-[64px] transition-opacity duration-1000 ease-in-out ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <SectionHeader subTitle="13기 멋사의" title="파트별 소개 및 커리큘럼" />

      <ul className="desktop:w-[1040px] tablet:w-[550px] mobile:w-[314px] h-[421px] flex desktop:flex-row mobile:flex-col desktop:gap-[49px] tablet:gap-[23px] mobile:gap-[16px]">
        {trackOverview.map((track, idx) => (
          <TrackCard
            key={`track-${idx}`}
            title={track.title}
            content={track.content}
            image={track.image}
          />
        ))}
      </ul>
    </section>
  );
}
