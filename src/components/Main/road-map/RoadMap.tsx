import { roadMap } from "@/constants";
import RoadMapCard from "./RoadMapCard";
import Image from "next/image";

export default function RoadMap() {
  return (
    <section className="w-screen h-[865px] pt-[97px]">
      <div className="flex flex-col items-center gap-[105px]">
        <div className="flex flex-col items-center gap-[12px]">
          <strong className="w-[203px] h-[29px] text-[24px] font-bold text-white tracking-[-0.005em] text-center">
            새롭게 구성한
          </strong>
          <h3 className="w-[203px] h-[43px] text-[36px] font-bold text-white tracking-[-0.005em]">
            13기의 로드맵
          </h3>
        </div>

        <ul className="relative flex flex-wrap justify-center items-center gap-x-6 gap-y-5  w-[1041px] h-[416px]">
          {roadMap.map((item, index) => (
            <RoadMapCard
              key={`road-map-${index}`}
              month={item.month}
              content={item.content}
            />
          ))}
          <img
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
