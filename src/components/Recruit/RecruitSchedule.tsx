import Eclipse from "@/../public/assets/icons/icon_eclips.svg";
import Image from "next/image";

interface RecruitScheduleProps {
  roads: {
    schedule: string;
    title: string;
  }[];
}

export default function RecruitSchedule({ roads }: RecruitScheduleProps) {
  return (
    <div className="mt-[180px] desktop:mt-[289px] flex- flex-col items-center">
      <p className="text-center text-white text-[18px] tablet:text-[24px] font-bold">
        13기 멋사의
      </p>
      <p className="text-center text-white text-[26px] tablet:text-[36px] font-bold">
        모집 일정
      </p>

      <div className="flex flex-col gap-[80px] mb-[400px] tablet:mb-[0px] tablet:flex-row w-[295px] tablet:w-[662px] desktop:w-[1006px] h-[70px] items-center relative justify-between mt-[50px] tablet:mt-[99px]">
        <div className="tablet:w-[632px] desktop:w-[961px] h-[18px] bg-gray6 absolute left-[23px]"></div>
        {roads.map((road, index) => {
          return (
            <div
              key={index}
              className="w-[55px] h-[55px] tablet:w-[55px] tablet:h-[55px] desktop:w-[70px] desktop:h-[70px] p-[16px] items-center gap-[10px] relative rounded-[35px] bg-gray4"
            >
              <Image
                src={Eclipse}
                alt="eclipse"
                width={38}
                height={38}
                className="desktop:w-[38px]"
              />
              <div className="flex flex-col items-center mt-[25px]">
                <p className="text-whiteTransparent70 text-center mobile:text-[14px] desktop:text-[20px] font-bold">
                  {road.schedule}
                </p>
                <p className="text-white text-[16px] tablet:text-[18px] desktop:text-[26px] text-center font-bold whitespace-nowrap">
                  {road.title}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
