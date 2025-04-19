import { useState } from "react";
import clsx from "clsx";
import Arrow from "@/assets/common/arrow.svg";
import { TeamDTOFormatted, TeamDTOResponse } from "@/types/team-maker";
import { translateRoleName } from "@/utils";
import { formatTeamDTO } from "@/utils/formatTeamDTO";

export default function MatchingResultCarousel({
  teamData,
  toggle,
  setIsRoutingToHome,
}: {
  teamData: TeamDTOResponse[];
  toggle: () => void;
  setIsRoutingToHome: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const [currIdx, setCurrIdx] = useState<number>(0);

  // 팀 데이터 포맷팅
  const formattedData: TeamDTOFormatted[][] = formatTeamDTO(teamData);

  // 캐러셀 이동 핸들러
  const handleClickPrevBtn = () => {
    setCurrIdx((prev) => prev - 1);
  };
  const handleClickNextBtn = () => {
    // 다음 팀 매칭 결과로 이동
    setCurrIdx((prev) => prev + 1);
  };

  // 홈 이동 및 다음 팀 매칭보기 버튼 핸들러
  const handleRoutingToHome = () => {
    // 마지막 팀 매칭 결과일 때
    if (currIdx === teamData.length - 1) {
      setIsRoutingToHome(true);
      toggle();
      return;
    }

    handleClickNextBtn(); // 마지막 팀이 아닐 때 다음 팀 매칭 결과로 이동
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
        <div className="flex flex-col justify-center items-center gap-10 w-[341px] h-fit py-10 bg-[#d9d9d9]">
          <strong className="text-[24px] font-semibold text-black">
            {currIdx + 1}팀
          </strong>
          <ul className="flex flex-col gap-[12px]">
            {formattedData[currIdx].map((data, idx) => (
              <li
                key={`${currIdx + 1}-team-${idx}`}
                className="flex gap-[66px]"
              >
                <strong className="w-[99px] text-[20px] font-bold leading-[26px] text-black">
                  {translateRoleName(data.role)}
                </strong>

                <span className="text-[20px] font-semibold leading-[26px] text-[#414141]">
                  {data.name}
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
      <div className="flex flex-col items-center gap-6">
        <button
          type="submit"
          className="min-w-[194px] w-fit h-[61px] px-8 rounded-[40px] text-[24px] font-bold text-white bg-primary"
          onClick={handleRoutingToHome}
        >
          {currIdx === teamData.length - 1
            ? "멋사 홈으로 돌아가기"
            : `${currIdx + 2}팀 매칭보기`}
        </button>
        <button
          type="submit"
          className="w-[194px] h-[61px] rounded-[40px] text-[24px] font-bold text-white bg-[#595959]"
          onClick={() => toggle()}
        >
          다시 매칭하기
        </button>
      </div>
    </div>
  );
}
