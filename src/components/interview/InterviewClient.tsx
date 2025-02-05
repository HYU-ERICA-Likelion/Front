"use client";
import { useState } from "react";
import InterviewTitle from "@/components/interview/title";
import InterviewSelectGen from "@/components/interview/select_gen";
import InterviewCard from "@/components/interview/card";

type InterviewData = {
  name: string;
  generation: number;
  role: string;
  photoUrl: string;
  description: string;
};

interface InterviewClientProps {
  initialData: InterviewData[];
}

export default function InterviewClient({ initialData }: InterviewClientProps) {
  const [gen, setGen] = useState<string>("13기");

  const filteredData = initialData.filter(
    (interview) => interview.generation === parseInt(gen.replace("기", ""))
  );

  return (
    <div className="flex flex-col items-center w-full">
      <div className="h-[130px]" />
      <InterviewTitle />
      <div className="h-[118px]" />
      <div className="flex flex-col xl:w-[1040px]">
        <InterviewSelectGen selectedGen={gen} setSelectedGen={setGen} />
        <div className="h-[66px]" />
        <div className="grid grid-cols-1 tablet:grid-cols-2 desktop:grid-cols-3 gap-8 w-full">
          {filteredData.map((interview, index) => (
            <InterviewCard
              key={index}
              photoUrl={interview.photoUrl}
              name={interview.name}
              generation={interview.generation}
              role={interview.role}
              description={interview.description}
            />
          ))}
        </div>
        <div className="h-[200px]" />
      </div>
    </div>
  );
}
