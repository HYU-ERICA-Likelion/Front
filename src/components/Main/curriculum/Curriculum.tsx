"use client";

import { useState } from "react";
import { curriculums, curriculumsPart } from "@/constants/curriculum";
import TabSelector from "../../Common/TabSelector";
import CurriculumItem from "./CurriculumItem";

export default function Curriculum() {
  const [selectedPart, setSelectedPart] = useState<string>("기획/디자인");

  return (
    <section className="flex flex-col items-center gap-[105px] w-screen h-[815px] pt-[100px] ">
      <div className="flex gap-[60px] w-[713px] h-[56px]">
        {curriculumsPart.map((part, idx) => (
          <TabSelector
            width={172}
            height={56}
            key={`curriculums-part-${idx}`}
            selectedValue={selectedPart}
            onClick={(part: string) => setSelectedPart(part)}
          >
            {part}
          </TabSelector>
        ))}
      </div>

      <ul className="w-[1002px] h-[400px] grid grid-flow-col grid-cols-2 grid-rows-4 gap-x-[40px] gap-y-[20px]">
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
    </section>
  );
}
