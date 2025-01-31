"use client";

import ArchivingSelectGen from "@/components/archiving/gen";
import ProjectCards from "@/components/archiving/card"
import { useState } from "react";

export default function ProjectPage() {
  const [gen, setGen] = useState<string>("전체");
  const projectData = [
    {
      id: 1,
      title: "프로젝트 명",
      type: "App",
      description: "1프로젝트 소개 주루룩해서 주루룩해서 주루룩해서 두 줄까지도 가능 이렇게 저렇게 요롷게게",
      images: [
        "/project1-slide1.jpg",
        "/project1-slide2.jpg",
        "/project1-slide3.jpg",
        "/project1-slide4.jpg"
      ],
      gen: 12
    },
    {
      id: 2,
      title: "프로젝트 명",
      type: "App",
      description: "2프로젝트 소개 주루룩해서 주루룩해서 주루룩해서 두 줄까지도 가능 이렇게 저렇게 요롷게게",
      images: [
        "/project1-slide1.jpg",
        "/project1-slide2.jpg",
        "/project1-slide3.jpg",
        "/project1-slide4.jpg"
      ],
      gen: 12
    },
    {
      id: 3,
      title: "프로젝트 명",
      type: "App",
      description: "3프로젝트 소개 주루룩해서 주루룩해서 주루룩해서 두 줄까지도 가능 이렇게 저렇게 요롷게게",
      images: [
        "/project1-slide1.jpg",
        "/project1-slide2.jpg",
        "/project1-slide3.jpg",
        "/project1-slide4.jpg"
      ],
      gen: 12
    },
    {
      id: 4,
      title: "프로젝트 명",
      type: "App",
      description: "4프로젝트 소개 주루룩해서 주루룩해서 주루룩해서 두 줄까지도 가능 이렇게 저렇게 요롷게게",
      images: [
        "/project1-slide1.jpg",
        "/project1-slide2.jpg",
        "/project1-slide3.jpg",
        "/project1-slide4.jpg"
      ],
      gen: 13
    },
    {
      id: 5,
      title: "프로젝트 명",
      type: "App",
      description: "5프로젝트 소개 주루룩해서 주루룩해서 주루룩해서 두 줄까지도 가능 이렇게 저렇게 요롷게게",
      images: [
        "/project1-slide1.jpg",
        "/project1-slide2.jpg",
        "/project1-slide3.jpg",
        "/project1-slide4.jpg"
      ],
      gen: 13
    },
    {
      id: 6,
      title: "프로젝트 명",
      type: "App",
      description: "6프로젝트 소개 주루룩해서 주루룩해서 주루룩해서 두 줄까지도 가능 이렇게 저렇게 요롷게게",
      images: [
        "/project1-slide1.jpg",
        "/project1-slide2.jpg",
        "/project1-slide3.jpg",
        "/project1-slide4.jpg"
      ],
      gen: 13
    },
    {
      id: 7,
      title: "프로젝트 명",
      type: "App",
      description: "7프로젝트 소개 주루룩해서 주루룩해서 주루룩해서 두 줄까지도 가능 이렇게 저렇게 요롷게게",
      images: [
        "/project1-slide1.jpg",
        "/project1-slide2.jpg",
        "/project1-slide3.jpg",
        "/project1-slide4.jpg"
      ],
      gen: 13
    }
   ];

  return (
    <div className="min-h-screen flex flex-col items-center">
      <div className="flex flex-col items-center gap-y-[12px] mt-[146px]">
        <div className="py-[12px] px-[16px] bg-[#F08314] rounded-[4px] text-[24px] font-[700]">프로젝트 아카이빙</div>
        <div className="text-[36px] font-[700]">멋사 프로젝트 둘러보기</div>
      </div>
      <ArchivingSelectGen selectedGen={gen} setSelectedGen={setGen} />
      <div className="flex-grow">
        <ProjectCards projectData={projectData} selectedGen={gen} />
      </div>
      
    </div>
  );
}
