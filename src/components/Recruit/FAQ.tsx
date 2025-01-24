"use client";

import { useState } from "react";

export default function FAQ() {
  const questions = [
    {
      question: "공식적인 정기 모임은 언제인가요?",
      answer:
        "멋쟁이 사자처럼 ERICA 13기 1학기는 매주 목요일 오후 7시 - 9시에 정기 세션을 진행합니다. 정기 세션은 매주 필수로 참여해야 수료가 가능하며, 매주 참여가 어려울 경우 최종 선발이 어려울 수 있습니다.",
    },
    {
      question: "회비는 얼마인가요?",
      answer:
        "멋쟁이 사자처럼 ERICA 13기 회비는 5만원입니다! (4만 원 + 보증금 만 원)",
    },
    {
      question: "2학기에도 아기사자를 모집하나요?",
      answer:
        "2학기에는 아기사자를 모집하지 않습니다. 1년에 한 번 2월 ~ 3월에 모집 기간에만 아기사자를 모집하고 1년 동안 동아리 활동이 진행됩니다.",
    },
    {
      question: "휴학생이어도 지원할 수 있나요?",
      answer:
        "지원 가능합니다. 재학생, 휴학생, 졸업 유예이시면은 지원 가능합니다.",
    },
    {
      question: "경험과 실력이 부족한데도 들어가도 괜찮을까요?",
      answer:
        "물론입니다! 학년, 전공 상관없이 본인의 아이디어를 IT 서비스로 실현시키고자 하는 열정 가득한 분이라면 누구나 지원 가능합니다. 기초부터 차근차근 교육을 진행하니 너무 걱정하지 않으셔도 괜찮습니다.",
    },
  ];

  const [rotations, setRotations] = useState(
    Array(questions.length).fill(false)
  );

  const toggleRotation = (index: number) => {
    const newRotations = [...rotations];
    newRotations[index] = !newRotations[index];
    setRotations(newRotations);
  };
  return (
    <div className="flex flex-col mt-[289px]">
      <strong className="text-whte text-[24px] font-bold text-center">
        자주 묻는 질문
      </strong>
      <strong className="mt-[12px] text-white text-[36px] font-bold text-center">
        FAQ
      </strong>
      <div className="mt-[79px] flex flex-col gap-[20px]">
        {questions.map((question, index) => {
          return (
            <div
              key={index}
              className={`w-[1032px] px-[45px] py-[30px] bg-gray4 rounded-[20px] flex flex-col transition-all duration-300`}
              style={{
                maxHeight: rotations[index] ? "300px" : "95px", // 조정 가능한 최대 높이
              }}
            >
              <div className="flex items-center justify-between">
                <p className="text-primary text-[24px] font-bold">
                  Q.{" "}
                  <span className="text-white text-[24px] font-[600] ml-[16px]">
                    {question.question}
                  </span>
                </p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="25"
                  viewBox="0 0 24 25"
                  fill="none"
                  className={`cursor-pointer transform ${
                    rotations[index] ? "rotate-180" : ""
                  } transition-transform duration-300`}
                  onClick={() => toggleRotation(index)}
                >
                  <path
                    d="M22 8.5L12 18.5L2 8.5L3.775 6.725L12 14.95L20.225 6.725L22 8.5Z"
                    fill="white"
                    fillOpacity="0.6"
                  />
                </svg>
              </div>
              {rotations[index] ? (
                <div className="flex">
                  <p className="text-primary text-[24px] font-bold mt-[33px]">
                    A.
                  </p>
                  <span className="text-white text-[24px] font-[500] mt-[33px] ml-[16px]">
                    {question.answer}
                  </span>
                </div>
              ) : (
                <></>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
