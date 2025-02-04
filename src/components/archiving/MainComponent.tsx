"use client";

import ArchivingSelectGen from "./gen";
import ProjectCards from "./card";
import { Project } from "@/../../src/types/project";
import { Suspense, useState } from "react";

interface Projects {
  projectData: Project[];
}

export default function MainComponent({ projectData }: Projects) {
  const [gen, setGen] = useState<string>("전체");
  return (
    <div className="min-h-screen flex flex-col items-center">
      <div className="flex flex-col items-center gap-y-[12px] mt-[146px]">
        <div className="py-[12px] px-[16px] bg-[#F08314] rounded-[4px] text-[24px] font-[700]">
          프로젝트 아카이빙
        </div>
        <div className="text-[36px] font-[700]">멋사 프로젝트 둘러보기</div>
      </div>
      <ArchivingSelectGen selectedGen={gen} setSelectedGen={setGen} />
      <Suspense fallback={<div>Loading...</div>}>
        <div className="flex-grow">
          <ProjectCards projectData={projectData} selectedGen={gen} />
        </div>
      </Suspense>
    </div>
  );
}
