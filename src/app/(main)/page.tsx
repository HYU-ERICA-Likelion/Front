import RoadMapCard from "@/components/Main/RoadMapCard";
import { roadMap } from "@/constants";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      {/* 메인 */}
      <div>
        <div className="relative w-screen h-[731px]">
          <div className="relative top-[151px] left-[50%] -translate-x-1/2 flex flex-col items-center gap-[28px]">
            <h3 className="flex justify-center items-center w-[235px] h-[53px] rounded-[4px] bg-primary text-[24px] font-bold text-white tracking-[-0.5%]">
              멋쟁이 사자처럼 13기
            </h3>
            <h2 className="flex justify-center items-center text-[48px] font-bold text-white leading-[60px] tracking-[-0.005em] text-center">
              멋쟁이 사자처럼에서 <br /> 13기 아기사자를 모집합니다!
            </h2>
          </div>
        </div>
      </div>

      {/* 로드맵 */}
      <div className="w-screen h-[865px] pt-[97px]">
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
            <Image
              src="/assets/images/404-lion.svg"
              alt="road-map-lion"
              width={185}
              height={261}
              className="absolute top-[248px] left-[905px]"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}
