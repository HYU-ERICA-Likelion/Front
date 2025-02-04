"use client";

import ArchivingSelectGen from "@/components/archiving/gen";
import ProjectCards from "@/components/archiving/card";
import { Suspense, useEffect, useState } from "react";
import { Project } from "@/types/project";

async function getProjects() {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_KEY}/projects`);
    if (!response.ok) {
      throw new Error(`${response.status}`);
    }
    const json = await response.json();
    console.log(json);
    return json;
  } catch (error) {
    console.error(error);
    return [];
  }
}

export default function ProjectPage() {
  const [gen, setGen] = useState<string>("전체");
  const [projectData, setProjectData] = useState<Project[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getProjects();
      setProjectData(data);
    };
    fetchData();
  }, []);

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
