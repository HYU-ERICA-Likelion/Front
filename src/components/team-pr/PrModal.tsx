"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

interface Props {
  toggle: () => void;
  isOpen: boolean;
}

export default function PrModal({ toggle, isOpen }: Props) {
  const [partToggle, setPartToggle] = useState(false);
  const [part, setPart] = useState("");
  const [nickname, setNickname] = useState("");
  const partData = ["기획&디자인", "프론트엔드", "백엔드"];

  const isFormValid = nickname.trim() !== "" && part.trim() !== "";

  useEffect(() => {
    if (isOpen) {
      setPart("");
      setNickname("");
    }
  }, [isOpen]);

  return (
    <div className="flex flex-col items-center bg-[#292725] w-auto min-h-[955px] rounded-[14px] p-[18px] gap-[24px] overflow-hiddne">
      {/* 프로젝트 제목 */}
      <div className="flex justify-between items-center justify-between w-[686px]">
        <p className="text-[18px] text-[#D1D0D0] font-[600] tracking-[-0.09px] ">
          Project
        </p>
        <Image
          src="/assets/icons/close.svg"
          alt="X"
          width={24}
          height={24}
          className="opacity-75 cursor-pointer"
          onClick={toggle}
        />
      </div>

      {/* 프로젝트 이미지 */}
      <div className="flex items-center justify-center">
        <div className="bg-[#CFCFCF] w-[686px] h-[384px] rounded-[10px]"></div>
        <div className="absolute justify-between flex items-center w-[640px]">
          <div className="w-[44px] h-[44px] rounded-[84px] bg-[rgba(0,0,0,0.06)] cursor-pointer z-10 flex items-center justify-center">
            <Image
              src="/assets/icons/carousel-prev-arrow.svg"
              width={11.78}
              height={20}
              alt="next-arrow"
            />
          </div>
          <div className="w-[44px] h-[44px] rounded-[84px] bg-[rgba(0,0,0,0.06)] cursor-pointer z-10 flex items-center justify-center">
            <Image
              src="/assets/icons/carousel-next-arrow.svg"
              width={11.78}
              height={20}
              alt="next-arrow"
            />
          </div>
        </div>
      </div>

      {/* 프로젝트 설명 */}
      <div className="flex items-center justify-center gap-[26px]">
        <div className="flex flex-col justify-center gap-[38px]">
          <div className="flex flex-col justify-center w-[453px] justify-start gap-[17px]">
            <div className="flex items-center gap-[12px] ">
              <p className="text-[24px] font-bold tracking-[-0.09px]">주제</p>
              <p className="text-[#919191] font-[600] text-[18px] tracking-[-0.09px]">
                WEB
              </p>
            </div>
            <div className="w-[453px] ">
              <p className="text-[#D1D0D0] text-[18px] font-500 tracking-[-0.09px] leading-[<145%>]">
                설명을 주르륵 적어 놓아 볼까요 와이어프레임이 내 머릿속 그대로
                그려졌으면 이 시스템은 사용자가 원하는 주제를 등록하고, 참여자를
                모집하여 팀을 구성할 수 있도록 지원합니다. 주제별 참여 요청을
                보내고, 받은 요청을 관리하며, 최종적으로 조가 확정되면 조원들과
                협업할 수 있습니다. 보내고, 받은 요청을 관리하며, 최종적으로
                조가 확정되면 조원들과 협업할 수 있습니다. 보내고, 받은 요청을
                관리하며,
              </p>
            </div>
          </div>

          {/* 닉네임 & 파트 */}
          <div className="flex justify-center gap-[20px] px-[25px] py-[20px] bg-[#474343] rounded-[6px]">
            <div className="flex flex-col justify-center gap-[8px]">
              <p className="text-[16px] font-[600] tracking-[-0.09px] text-[#CFCFCF]">
                닉네임
              </p>
              <div className="w-[191px] h-[44px] bg-[#ffffff] rounded-[5px] p-[12px] border flex items-center border-[#CFCFCF]">
                <input
                  onChange={(e) => setNickname(e.target.value)}
                  type="text"
                  value={nickname}
                  placeholder="닉네임을 입력하세요."
                  className="placeholder-[#CFCFCF] placeholder:text-[14px] placeholder:font-[600] text-[14px] text-[#000] font-[400] placeholder:tracking-[-0.09px] tracking-[-0.09px]"
                />
              </div>
            </div>
            <div className="flex flex-col justify-center gap-[8px]">
              <p className="text-[16px] font-[600] tracking-[-0.09px] text-[#CFCFCF]">
                파트
              </p>
              <div
                className={`w-[191px] h-[44px] bg-[#ffffff] p-[12px] border border-[#CFCFCF] flex items-center justify-between relative z-10 ${
                  partToggle ? "rounded-t-[5px]" : "rounded-[5px]"
                }`}
              >
                {/* 선택된 값 & 아이콘 */}
                <p
                  className={`text-[14px] font-[600] ${
                    part ? "text-[#000]" : "text-[#CFCFCF]"
                  } leading-[145%] tracking-[-0.07px]`}
                >
                  {part ? part : "파트를 선택해주세요."}
                </p>
                <Image
                  src={
                    partToggle
                      ? "/assets/icons/pr_left_arrow.svg"
                      : "/assets/icons/pr_down_arrow.svg"
                  }
                  width={16}
                  height={16}
                  alt="arrow"
                  onClick={() => setPartToggle((prev) => !prev)}
                />

                {/* 드롭다운 메뉴 (absolute) */}
                {partToggle && (
                  <div className="absolute w-[191px] h-[132px] bg-[#ffffff] rounded-b-[5px] border border-[#CFCFCF] border-t-0 flex flex-col top-[43.44px] left-[-1px]">
                    {partData.map((pd, index) => (
                      <div
                        key={index}
                        className="w-full h-[44px] bg-[#FFFFFF] p-[12px] cursor-pointer"
                        onClick={() => {
                          setPart(pd);
                          setPartToggle(false);
                        }}
                      >
                        <p className="text-[14px] font-[600] text-[#9F9E9D] leading-[145%] tracking-[-0.07px] hover:text-[#474343]">
                          {pd}
                        </p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* 모집 파트 쪽 */}
        <div className="w-[195px] flex flex-col gap-[20px]">
          {/* 모집 파트 인원 */}
          <div className="w-[195px] h-[256px] bg-[#474343] rounded-[10px] p-[20px]">
            <p className="text-[18px] font-[600] text-[#FFFFFF] leading-[140%] tracking-[-0.09px]">
              모집하는 파트
            </p>
            <div className="flex flex-col gap-[22px] mt-[9px]">
              <div className="w-[155px] h-[46px]">
                <p className="text-[14px] font-[600] text-[#9F9E9D] leading-[140%] tracking-[-0.07px]">
                  기획/디자인
                </p>
                <p className="text-[16px] font-[600] text-[#FFFFFF] leading-[140%] tracking-[-0.08px]">
                  1명
                </p>
              </div>

              <div className="w-[155px] h-[46px]">
                <p className="text-[14px] font-[600] text-[#9F9E9D] leading-[140%] tracking-[-0.07px]">
                  프론트엔드
                </p>
                <p className="text-[16px] font-[600] text-[#FFFFFF] leading-[140%] tracking-[-0.08px]">
                  2명
                </p>
              </div>

              <div className="w-[155px] h-[46px]">
                <p className="text-[14px] font-[600] text-[#9F9E9D] leading-[140%] tracking-[-0.07px]">
                  백엔드
                </p>
                <p className="text-[16px] font-[600] text-[#FFFFFF] leading-[140%] tracking-[-0.08px]">
                  1명
                </p>
              </div>
            </div>
          </div>

          {/* 오픈채팅방 링크 */}
          <div className="w-[195px] h-[86px] bg-[#474343] rounded-[10px] p-[20px] flex flex-col gap-[4px]">
            <p className="text-[14px] font-[600] text-[#9F9E9D] leading-[140%] tracking-[-0.07px]">
              오픈채팅방 링크
            </p>
            <Link
              href="https://open.kakao.com/o/s95Dnyyg"
              target="_blank"
              className="w-[155px] text-[16px] font-[600] text-[#FFFFFF] leading-[140%] tracking-[-0.08px] line-clamp-1"
            >
              URLURLURLURLURLURLURLURLURL
            </Link>
          </div>
        </div>
      </div>

      {/* 버튼 모음 */}
      <div className="flex gap-[28px]">
        <button
          className={`w-[153px] h-[57px] px-[16px] py-[32px] rounded-[40px] flex gap-[4px] justify-center items-center ${
            isFormValid ? "bg-[#F08314]" : "bg-[#5E5A5A]"
          }`}
          disabled={!isFormValid}
          onClick={toggle}
        >
          <p className="text-[24px] font-[600] text-[#FFFFFF] leading-[25px] tracking-[-0.12px]">
            작성 완료
          </p>
        </button>
        <button
          onClick={toggle}
          className="w-[153px] h-[57px] px-[16px] py-[32px] bg-[#5E5A5A] rounded-[40px] flex gap-[4px] justify-center items-center"
        >
          <p className="text-[24px] font-[600] text-[#FFFFFF] leading-[25px] tracking-[-0.12px]">
            취소하기
          </p>
        </button>
      </div>
    </div>
  );
}
