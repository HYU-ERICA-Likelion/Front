"use client";
import { useState } from "react";

import InterviewTitle from "@/components/interview/title";
import InterviewSelectGen from "@/components/interview/select_gen";
import InterviewCard from "@/components/interview/card";

/////// 임의데이터
const interviewData = [
  {
    img: "/assets/images/jongwon.png",
    name: "이종원",
    position: "대표, 프론트엔드, 백엔드",
    text: "운영진과 함께 아기사자들에게 의미 있는 동아리 활동을 만들겠습니다!",
    id: "1",
  },
  {
    img: "/assets/images/jongwon.png",
    name: "이종원",
    position: "대표, 프론트엔드, 백엔드",
    text: "운영진과 함께 아기사자들에게 의미 있는 동아리 활동을 만들겠습니다!",
    id: "1",
  },
  {
    img: "/assets/images/jongwon.png",
    name: "이종원",
    position: "대표, 프론트엔드, 백엔드",
    text: "운영진과 함께 아기사자들에게 의미 있는 동아리 활동을 만들겠습니다!",
    id: "1",
  },
  {
    img: "/assets/images/jongwon.png",
    name: "이종원",
    position: "대표, 프론트엔드, 백엔드",
    text: "운영진과 함께 아기사자들에게 의미 있는 동아리 활동을 만들겠습니다!",
    id: "1",
  },
  {
    img: "/assets/images/jongwon.png",
    name: "이종원",
    position: "대표, 프론트엔드, 백엔드",
    text: "운영진과 함께 아기사자들에게 의미 있는 동아리 활동을 만들겠습니다!",
    id: "1",
  },
];
//////////

export default function InterviewPage() {
  const [gen, setGen] = useState<string>("13기");
  console.log(gen);
  return (
    <div className="flex flex-col items-center w-full">
      <div className="h-[130px]" />
      <InterviewTitle />
      <div className="h-[118px]" />
      <div className="flex flex-col xl:w-[1040px]">
        <InterviewSelectGen selectedGen={gen} setSelectedGen={setGen} />
        <div className="h-[66px]" />
        {/* 프로필 카드 배치 max-[]*/}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
          {interviewData.map((interview, index) => (
            <InterviewCard
              key={index}
              img={interview.img}
              name={interview.name}
              position={interview.position}
              text={interview.text}
              id={interview.id}
            />
          ))}
        </div>
        <div className="h-[200px]" />
      </div>
    </div>
  );
}
