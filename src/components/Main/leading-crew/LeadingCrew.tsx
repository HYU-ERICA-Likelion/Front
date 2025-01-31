"use client";

import { useState } from "react";
import TabSelector from "@/components/Common/TabSelector";
import { crewMembers, generations } from "@/constants/leading-crew";
import CrewMember from "./CrewMember";

export default function LeadingCrew() {
  const [selectedGeneration, setSelectedGeneration] = useState<"12기" | "13기">(
    "13기"
  );

  return (
    <section className="flex flex-col items-start gap-[100px] w-screen h-[899px] pt-[100px]">
      <div className="flex flex-col items-center gap-[12px] w-full">
        <strong className=" h-[29px] text-[24px] font-bold text-white tracking-[-0.005em] text-center">
          한양대 에리카 멋사의
        </strong>
        <h3 className="h-[43px] text-[36px] font-bold text-white tracking-[-0.005em]">
          파트별 운영진 소개
        </h3>
      </div>

      <div className="flex gap-[87px] pl-[120px]">
        {/* 기수 선택 */}
        <div className="flex flex-col gap-[16px]">
          {generations.map((generation, idx) => (
            <TabSelector
              width={144}
              height={48}
              key={`curriculums-part-${idx}`}
              selectedValue={selectedGeneration}
              onClick={(part: string) => setSelectedGeneration(generation)}
            >
              {generation}
            </TabSelector>
          ))}
        </div>

        {/* 운영진 소개 */}
        <div className="flex flex-col gap-[20px]">
          <ul className="w-[224px] h-[159px] grid grid-cols-2 gap-x-[24px]">
            {crewMembers[selectedGeneration].map(
              (member, idx) =>
                member.generation === selectedGeneration &&
                idx <= 1 && (
                  <CrewMember
                    selectedValue={selectedGeneration}
                    key={`${member.generation}_${member.name}`}
                    member={member}
                  />
                )
            )}
          </ul>
          <ul className="grid grid-cols-4 gap-x-[24px] gap-y-[20px]">
            {crewMembers[selectedGeneration].map(
              (member, idx) =>
                member.generation === selectedGeneration &&
                idx > 1 && (
                  <CrewMember
                    selectedValue={selectedGeneration}
                    key={`${member.generation}_${member.name}`}
                    member={member}
                  />
                )
            )}
          </ul>
        </div>
      </div>
    </section>
  );
}
