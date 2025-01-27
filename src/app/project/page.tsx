"use client";

import ArchivingSelectGen from "@/components/archiving/gen";
import ProjectCards from "@/components/archiving/card"
import { useState } from "react";


export default function ProjectPage() {
  const [gen, setGen] = useState<string>("전체");
  const projectData = [
    {
      title: "프로젝트 제목",
      type: "App",
      description: "프로젝트 설명이 들어갈 자리입니다.",
      image: "/",
      gen: 12
    },
    {
      title: "프로젝트 제목",
      type: "App",
      description: "프로젝트 설명이 들어갈 자리입니다.",
      image: "/",
      gen: 12
    },
    {
      title: "프로젝트 제목",
      type: "App",
      description: "프로젝트 설명이 들어갈 자리입니다.",
      image: "/",
      gen: 13
    },
    {
      title: "프로젝트 제목",
      type: "App",
      description: "프로젝트 설명이 들어갈 자리입니다.",
      image: "/",
      gen: 12
    }
   ];
  return (
    <div className="h-screen">
      <div className="flex flex-col items-center gap-y-[12px] mt-[146px]">
        <div className="py-[12px] px-[16px] bg-[#F08314] rounded-[4px] text-[24px] font-[700]">프로젝트 아카이빙</div>
        <div className="text-[36px] font-[700]">멋사 프로젝트 둘러보기</div>
      </div>
      <ArchivingSelectGen selectedGen={gen} setSelectedGen={setGen} />
      <ProjectCards projectData={projectData} />
      
      
    </div>
    
  );
}
