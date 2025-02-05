import { roadMap } from "@/constants";
import RoadMapCard from "./RoadMapCard";
import Image from "next/image";
import SectionHeader from "../section-header/SectionHeader";

export default function RoadMap() {
  return (
    <section className="w-screen h-[865px] pt-[97px]">
      <div className="flex flex-col items-center gap-[105px]">
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
            className="absolute top-[248px] left-[905px]"
          />
        </ul>
      </div>
    </section>
  );
}
