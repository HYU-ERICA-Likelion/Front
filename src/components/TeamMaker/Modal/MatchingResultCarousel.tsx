import { useRouter } from "next/navigation";
import { useState } from "react";
import clsx from "clsx";
import Arrow from "@/assets/common/arrow.svg";
import { TeamDTO } from "@/types/team-maker";

export default function MatchingResultCarousel({
  teamData,
}: {
  teamData: TeamDTO[];
}) {
  const router = useRouter();

  const [currIdx, setCurrIdx] = useState<number>(0);

  const handleClickPrevBtn = () => {
    setCurrIdx((prev) => prev - 1);
  };

  const handleClickNextBtn = () => {
    if (currIdx === teamData.length - 1) return;
    setCurrIdx((prev) => prev + 1);
  };

  return (
    <div className="flex flex-col items-center gap-[69px] w-full">
      {/* carousel */}
      <div className="flex justify-around items-center w-full">
        {/* prev button */}
        <button
          className={clsx(
            "flex justify-center items-center w-11 h-11 rounded-[84px] rotate-180",
            currIdx === 0
              ? "bg-[rgba(0,0,0,0.06)] cursor-not-allowed"
              : "bg-[rgba(0,0,0,0.2)]"
          )}
          disabled={currIdx === 0}
          onClick={handleClickPrevBtn}
        >
          <Arrow fill={currIdx === 0 ? "#ffffff80" : "#fff"} />
        </button>

        {/* 팀 매칭 결과 */}
        <div className="flex flex-col justify-center items-center gap-10 w-[341px] h-[246px] bg-[#d9d9d9]">
          <strong className="text-[24px] font-semibold text-black">
            {currIdx + 1}팀
          </strong>
          <ul className="flex flex-col gap-[12px]">
            {["프론트엔드", "기획&디자인", "백엔드"].map((role, idx) => (
              <li key={idx} className="flex gap-[66px]">
                <strong className="w-[99px] text-[20px] font-bold leading-[26px] text-black">
                  {role}
                </strong>
                <span className="text-[20px] font-semibold leading-[26px] text-[#414141]">
                  {
                    teamData[currIdx][
                      role === "프론트엔드"
                        ? "frontend"
                        : role === "백엔드"
                        ? "backend"
                        : "design"
                    ]
                  }
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* next button */}
        <button
          className={clsx(
            "flex justify-center items-center w-11 h-11 rounded-[84px]",
            currIdx === teamData.length - 1
              ? "bg-[rgba(0,0,0,0.06)] cursor-not-allowed"
              : "bg-[rgba(0,0,0,0.2)]"
          )}
          disabled={currIdx === teamData.length - 1}
          onClick={handleClickNextBtn}
        >
          <Arrow
            fill={currIdx === teamData.length - 1 ? "#ffffff80" : "#fff"}
          />
        </button>
      </div>

      {/* button group */}
      <div className="flex flex-col gap-6">
        <button
          type="submit"
          className="w-[194px] h-[61px] rounded-[40px] text-[24px] font-bold text-white bg-primary"
          onClick={handleClickNextBtn}
        >
          {currIdx + 2}팀 매칭보기
        </button>
        <button
          type="submit"
          className="w-[194px] h-[61px] rounded-[40px] text-[24px] font-bold text-white bg-[#595959]"
          onClick={() => router.replace("/team-maker")}
        >
          다시 매칭하기
        </button>
      </div>
    </div>
  );
}
