"use client";

import { useState } from "react";
import PartInput from "./PartInput";
import ImageInput from "./ImageInput";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function PostInput() {
  const [topic, setTopic] = useState<string>("");
  const [type, setType] = useState<string>("WEB");
  const [nickname, setNickname] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [designAppNum, setDesignAppNum] = useState<number>(0);
  const [frontAppNum, setFrontAppNum] = useState<number>(0);
  const [backAppNum, setBackAppNum] = useState<number>(0);
  const [selectedImg, setSelectedImg] = useState<string>("");
  const [groupChatLink, setGroupChatLink] = useState<string>("");
  const isFormValid: boolean =
    topic.trim() !== "" &&
    nickname.trim() !== "" &&
    content.trim() !== "" &&
    (designAppNum > 0 || frontAppNum > 0 || backAppNum > 0) &&
    selectedImg.trim() !== "" &&
    groupChatLink.trim() !== "";

  const router = useRouter();

  return (
    <div className="flex flex-col gap-[32px] px-[208px] py-[152px] items-center">
      {/* 제목 */}
      <div className="flex gap-[118px] items-center">
        <label
          htmlFor="topic"
          className="text-[20px] font-[600] leading-[140%] tracking-[-0.1px] text-[#FFFFFF]"
        >
          제목
        </label>
        <input
          type="text"
          id="topic"
          value={topic}
          placeholder="제목을 입력해주세요."
          onChange={(e) => setTopic(e.target.value)}
          className="placeholder:text-[#9F9E9D] placeholder:text-[20px] placeholder:font-[500] text-[#000] w-[710px] h-[54px] px-[17px] py-[13px] flex gap-[10px] items-center rounded-[10px] border-[1px] border-[#D0D0D0] bg-[#FFFFFF]"
        />
      </div>

      {/* 구분 */}
      <div className="flex gap-[118px] items-center">
        <p className="text-[20px] font-[600] leading-[140%] tracking-[-0.1px] text-[#FFFFFF]">
          구분
        </p>
        <div className="flex gap-[12px] w-[710px] h-[54px] items-center">
          {["WEB", "APP"].map((item) => (
            <div
              key={item}
              className={`w-[84px] h-[54px] flex items-center justify-center px-[17px] py-[13px] rounded-[10px] rounded-[10px] cursor-pointer ${
                type === item
                  ? "bg-[#F08314] text-[#FFFFFF]"
                  : "bg-[#CFCFCF] text-[#9F9E9D]"
              }`}
              onClick={() => setType(item)}
            >
              <p className="text-[20px] font-[500] leading-[140%] tracking-[-0.1px]">
                {item}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* 닉네임 */}
      <div className="flex flex-col gap-[8px]">
        <div className="flex gap-[101px] items-center">
          <label
            htmlFor="nickname"
            className="text-[20px] font-[600] leading-[140%] tracking-[-0.1px] text-[#FFFFFF]"
          >
            닉네임
          </label>
          <input
            type="text"
            id="nickname"
            value={nickname}
            placeholder="닉네임을 입력해주세요."
            onChange={(e) => setNickname(e.target.value)}
            className="placeholder:text-[#9F9E9D] placeholder:text-[20px] placeholder:font-[500] text-[#000] w-[710px] h-[54px] px-[17px] py-[13px] flex gap-[10px] items-center rounded-[10px] border-[1px] border-[#D0D0D0] bg-[#FFFFFF]"
          />
        </div>
        <div className="flex ml-[153px]">
          <p className="w-[553.33px] text-[16px] font-[500] leading-[140%] tracking-[-0.08px] text-[#9F9E9D]">
            *익명성을 보장하기 위해서이며 실명을 입력하셔도 무방합니다.
          </p>
        </div>
      </div>

      {/* 내용 */}
      <div className="flex flex-col gap-[12px] w-[863px]">
        <label
          htmlFor="content"
          className="text-[20px] font-[600] leading-[140%] tracking-[-0.1px] text-[#FFFFFF]"
        >
          내용
        </label>
        <textarea
          id="content"
          value={content}
          placeholder="내용을 입력해주세요."
          onChange={(e) => setContent(e.target.value)}
          className="h-[289px] px-[17px] py-[13px] resize-none rounded-[10px] border-[1px] border-[#D0D0D0] bg-[#FFFFFF] text-[#000] placeholder:text-[#9F9E9D] placeholder:text-[20px] placeholder:font-[500] text-[20px] font-[400] leading-[140%] tracking-[-0.1px]"
        />
      </div>

      {/* 구하는 파트 */}
      <PartInput
        designAppNum={designAppNum}
        setDesignAppNum={setDesignAppNum}
        frontAppNum={frontAppNum}
        setFrontAppNum={setFrontAppNum}
        backAppNum={backAppNum}
        setBackAppNum={setBackAppNum}
      />

      {/* 이미지 */}
      <ImageInput setSelectedImg={setSelectedImg} />

      {/* 오픈채팅방 링크 */}
      <div className="flex gap-[27px] items-center">
        <label
          htmlFor="groupChatLink"
          className="text-[20px] font-[600] leading-[140%] tracking-[-0.1px] text-[#FFFFFF]"
        >
          오픈채팅방 링크
        </label>
        <input
          type="text"
          id="groupChatLink"
          value={groupChatLink}
          placeholder="1대1 오픈채팅방 링크를 넣어주세요."
          onChange={(e) => setGroupChatLink(e.target.value)}
          className="placeholder:text-[#9F9E9D] placeholder:text-[20px] placeholder:font-[500] text-[#000] w-[710px] h-[54px] px-[17px] py-[13px] flex gap-[10px] items-center rounded-[10px] border-[1px] border-[#D0D0D0] bg-[#FFFFFF]"
        />
      </div>

      {/* 버튼 모음 */}
      <div className="flex gap-[28px] mt-[94px] mb-[92px]">
        <button
          className={`w-[153px] h-[57px] px-[16px] py-[32px] rounded-[40px] flex gap-[4px] justify-center items-center ${
            isFormValid ? "bg-[#F08314]" : "bg-[#5E5A5A]"
          }`}
          disabled={!isFormValid}
          onClick={() => router.push("/team-pr")}
        >
          <p className="text-[24px] font-[600] text-[#FFFFFF] leading-[25px] tracking-[-0.12px]">
            작성 완료
          </p>
        </button>
        <Link
          href="/team-pr"
          className="w-[153px] h-[57px] px-[16px] py-[32px] bg-[#5E5A5A] rounded-[40px] flex gap-[4px] justify-center items-center"
        >
          <p className="text-[24px] font-[600] text-[#FFFFFF] leading-[25px] tracking-[-0.12px]">
            취소하기
          </p>
        </Link>
      </div>
    </div>
  );
}
