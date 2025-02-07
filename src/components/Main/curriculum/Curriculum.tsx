"use client";

import { useState } from "react";
import { curriculums, curriculumsPart } from "@/constants/curriculum";
import TabSelector from "../../Common/TabSelector";
import CurriculumItem from "./CurriculumItem";
import useFadeInOnScroll from "@/hooks/useFadeInOnScroll";

export default function Curriculum() {
  const { isVisible, elementRef } = useFadeInOnScroll(400);
  const [selectedPart, setSelectedPart] = useState<string>("기획/디자인");

  return (
    <section
      ref={elementRef}
      className={`flex flex-col items-center w-screen desktop:h-[815px] tablet:h-[950px] mobile:h-[776px] tablet:pt-[100px] mobile:pt-[45px] transition-opacity duration-1000 ease-in-out ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div
        className="flex items-start justify-center 
                      desktop:gap-[60px] desktop:mb-[100px]
                      tablet:gap-[18px] tablet:w-[713px] tablet:mb-[57px]
                      mobile:gap-[10px] mobile:w-[292px] mobile:mb-[24px]"
      >
        {curriculumsPart.map((part, idx) => (
          <div
            key={idx}
            className="tablet:w-[214px] tablet:h-[56px] 
                       mobile:min-w-[101px] mobile:h-[34px]"
          >
            <TabSelector
              key={`curriculums-part-${idx}`}
              selectedValue={selectedPart}
              onClick={(part: string) => setSelectedPart(part)}
            >
              {part}
            </TabSelector>
          </div>
        ))}
      </div>
      <ul
        className="desktop:grid desktop:grid-flow-col desktop:grid-cols-2 desktop:grid-rows-4 desktop:gap-x-[40px] desktop:gap-y-[20px]
                     mobile:flex mobile:flex-col tablet-gap-[16px] mobile:gap-[14px]
                     desktop:w-[1002px] desktop:h-[400px] 
                     tablet:w-[390px] tablet:h-[665px] 
                     mobile:w-[315px] mobile:h-[600px] 
                     mb-[24px]
                     "
      >
        {curriculums.map(
          (curriculum) =>
            curriculum.part === selectedPart && (
              <CurriculumItem
                num={curriculum.id}
                key={`curriculum-${curriculum.id}`}
                selectedPart={selectedPart}
              >
                {curriculum.content}
              </CurriculumItem>
            )
        )}
      </ul>
      <p className="text-[12px] tablet:text-[14px] desktop:text-[16px] font-bold tracking-[-0.005em] text-white/55">
        추후 일정조율의 이유로 커리큘럼은 변동될 수 있습니다
      </p>
    </section>
  );
}
