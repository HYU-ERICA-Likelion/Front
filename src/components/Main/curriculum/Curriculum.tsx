"use client";

import { useState } from "react";
import { curriculums, curriculumsPart } from "@/constants/curriculum";
import PartSelector from "./PartSelector";
import CurriculumItem from "./CurriculumItem";

export default function Curriculum() {
  const [selectedPart, setSelectedPart] = useState<string>("기획/디자인");

  return (
    <section className="flex flex-col items-center gap-[105px] w-screen h-[810px] pt-[100px] ">
      <div className="flex gap-[60px] w-[713px] h-[56px]">
        {curriculumsPart.map((part, idx) => (
          <PartSelector
            key={`curriculums-part-${idx}`}
            selectedPart={selectedPart}
            onClick={(part: string) => setSelectedPart(part)}
          >
            {part}
          </PartSelector>
        ))}
      </div>

      <div className="flex gap-[40px] w-[1002px] h-[400px]">
        <ul className="flex flex-col gap-[20px] w-[481px] h-[400px]">
          {curriculums.map(
            (curriculum) =>
              curriculum.part === selectedPart &&
              curriculum.id <= 4 && (
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
        <ul className="flex flex-col gap-[20px] w-[481px] h-[400px]">
          {curriculums.map(
            (curriculum) =>
              curriculum.part === selectedPart &&
              curriculum.id >= 5 &&
              curriculum.id <= 8 && (
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
      </div>
    </section>
  );
}
