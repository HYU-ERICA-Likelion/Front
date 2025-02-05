"use client";

import ArchivingSelectGen from "./gen";
import ProjectCards from "./card";
import { Project } from "@/../../src/types/project";
import { Suspense, useState } from "react";
import Image from "next/image";

interface Projects {
  projectData: Project[];
}

export default function MainComponent({ projectData }: Projects) {
  const [gen, setGen] = useState<string>("전체");
  return (
    <div className="min-h-screen w-screen flex flex-col items-center">
      <div className="flex flex-col items-center gap-y-[12px] mt-[91px] tablet:mt-[146px]">
        <div className="flex justify-center items-center py-[12px] w-[160px]  h-[45px] tablet:w-[203px] tablet:h-[53px] px-[15px] bg-[#F08314] rounded-[4px] text-[18px] tablet:text-[24px] font-[700]">
          프로젝트 아카이빙
        </div>
        <div className="text-[26px] tablet:text-[36px] font-[700]">
          멋사 프로젝트 둘러보기
        </div>
      </div>
      <ArchivingSelectGen selectedGen={gen} setSelectedGen={setGen} />
      <Suspense
        fallback={
          <div>
            <Image
              src="/assets/images/loading.png"
              alt="loading"
              className="w-[347px] h-[249px] mb-[126px]"
            />
          </div>
        }
      >
        <div className="flex-grow">
          <ProjectCards projectData={projectData} selectedGen={gen} />
        </div>
      </Suspense>
    </div>
  );
}
