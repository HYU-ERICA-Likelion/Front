"use client";

import TeamSetupForm from "@/components/TeamMaker/TeamSetup/TeamSetupForm";
import Image from "next/image";
import { useTeamSetup } from "@/hooks/useTeamSetup";

export default function TeamSetupSection() {
  const { teamList, setTeamList, addTeam, submitTeams } = useTeamSetup();

  return (
    <>
      {/* 팀 설정 폼 */}
      <section
        className="flex flex-wrap 
                  tablet:w-[940px] tablet:gap-y-[10px] tablet:gap-x-[24px] tablet:mb-[114px]"
      >
        {teamList.map((teamDTO, idx) => (
          <TeamSetupForm
            key={`team-${idx}`}
            teamDTO={teamDTO}
            setTeamList={setTeamList}
            teamNum={idx + 1}
          />
        ))}

        {/* 팀 추가 버튼 */}
        <button
          onClick={addTeam}
          className="flex justify-center items-center bg-gray4 rounded-[12px] tablet:w-[458px] tablet:h-[64px] tablet:mt-[10px]"
        >
          <Image
            src="/assets/icons/plus.svg"
            width="50"
            height="50"
            alt="plus-icon"
          />
        </button>
      </section>
      {/* 매칭하기 버튼 */}
      <button
        className="flex justify-center items-center rounded-[20px] font-bold text-white tracking-[-0.5%] bg-primary
               tablet:gap-[10px] tablet:w-[211px] tablet:h-[62px] tablet:text-[32px]"
        onClick={submitTeams}
      >
        매칭하기
        <Image
          src="/assets/icons/routing-arrow.svg"
          width="38"
          height="38"
          alt="routing-arrow"
        />
      </button>
    </>
  );
}
