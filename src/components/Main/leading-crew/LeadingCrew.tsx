"use client";

import { useState } from "react";
import TabSelector from "@/components/Common/TabSelector";
import { crewMembers, generations } from "@/constants/leading-crew";
import CrewMember from "./CrewMember";
import SectionHeader from "../section-header/SectionHeader";

export default function LeadingCrew() {
  const [selectedGeneration, setSelectedGeneration] = useState<"12기" | "13기">(
    "13기"
  );

  return (
    <section
      className="flex flex-col w-screen pt-[100px]
                        desktop:items-start desktop:gap-[100px]
                        tablet:h-[899px] tablet:gap-[32px]
                        mobile:items-center mobile:h-[1142px] mobile:gap-[30px]"
    >
      <SectionHeader
        subTitle="한양대 에리카 멋사의"
        title="파트별 운영진 소개"
      />

      <div
        className="flex  
                   desktop:flex-row desktop:pl-[12%] desktop:gap-[87px] 
                   tablet:gap-[49px]
                   mobile:flex-col mobile:gap-[25px]"
      >
        {/* 기수 선택 */}
        <div
          className="flex  
                        desktop:flex-col desktop:justify-start
                        tablet:gap-[16px]
                        mobile:flex-row mobile:justify-center mobile:gap-[10px]"
        >
          {generations.map((generation, idx) => (
            <div
              className="tablet:w-[144px] tablet:h-[48px] 
                         mobile:min-w-[68px] mobile:h-[34px]"
            >
              <TabSelector
                key={`curriculums-part-${idx}`}
                selectedValue={selectedGeneration}
                onClick={() => setSelectedGeneration(generation)}
              >
                {generation}
              </TabSelector>
            </div>
          ))}
        </div>

        {/* 운영진 소개 */}
        <div className="flex flex-col tablet:gap-[20px] mobile:gap-[22px]">
          <ul
            className="grid grid-cols-2
                       tablet:items-start tablet:w-[224px] tablet:h-[159px] tablet:gap-x-[24px]
                       mobile:w-[242px] mobile:min-h-[155px] mobile:gap-x-[42px]"
          >
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
          <ul
            className="grid 
                        tablet:grid-cols-4 tablet:gap-x-[24px] tablet:gap-y-[20px]
                        mobile:grid-cols-2 mobile:gap-x-[42px] mobile:gap-y-[22px]
                        "
          >
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
