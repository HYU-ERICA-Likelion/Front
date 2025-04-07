"use client";

import { useState } from "react";
import MatchingIntro from "@/components/TeamMaker/MatchingIntro";
import TeamSetupForm from "@/components/TeamMaker/TeamSetupForm";
import { TeamDTO } from "@/types/team-maker";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function TeamMakerPage() {
  const router = useRouter();

  const [teamList, setTeamList] = useState<TeamDTO[]>([
    {
      design: 0,
      frontend: 0,
      backend: 0,
    },
  ]);

  const handleAddTeam = () => {
    setTeamList((prev) => [
      ...prev,
      {
        design: 0,
        frontend: 0,
        backend: 0,
      },
    ]);
  };

  return (
    <>
      <section className="flex flex-col items-center tablet:mb-[130px]">
        <MatchingIntro />

        {/* 팀 설정 폼 */}
        <div
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
            onClick={handleAddTeam}
            className="flex justify-center items-center bg-gray4 rounded-[12px] tablet:w-[458px] tablet:h-[64px] tablet:mt-[10px]"
          >
            <Image
              src="/assets/icons/plus.svg"
              width="50"
              height="50"
              alt="plus-icon"
            />
          </button>
        </div>

        {/* 매칭하기 버튼 */}
        <button
          className="flex justify-center items-center rounded-[20px] font-bold text-white tracking-[-0.5%] bg-primary
                     tablet:gap-[10px] tablet:w-[211px] tablet:h-[62px] tablet:text-[32px]"
          onClick={() => router.push("/team-maker/random-matching")}
        >
          매칭하기
          <Image
            src="/assets/icons/routing-arrow.svg"
            width="38"
            height="38"
            alt="routing-arrow"
          />
        </button>
      </section>
    </>
  );
}
