"use client";

import Image from "next/image";
import SectionHeader from "../section-header/SectionHeader";
import useFadeInOnScroll from "@/hooks/useFadeInOnScroll";
import Link from "next/link";

export default function Sponser() {
  const { isVisible, elementRef } = useFadeInOnScroll(400);
  const handleCopyClipBoard = () => {
    navigator.clipboard.writeText("hyuerica@likelion.org");
    alert("메일 주소가 복사되었습니다!");
  };
  return (
    <section
      ref={elementRef}
      className={` ${
        isVisible ? "opacity-100" : "opacity-0"
      } flex flex-col justify-center items-center w-screen h-[692px]`}
    >
      <SectionHeader
        subTitle="멋사 ERICA의 파트너가 되어주세요!"
        title="후원·협업 문의"
      />
      <Image
        src={"/assets/images/sponser/sponser.svg"}
        alt="sponser"
        width={167}
        height={180}
        className="mt-[14px]"
      />
      <p className="text-[24px] font-[600] text-[#9F9E9D] mt-[25px]">
        문의 가능 채널
      </p>
      <div className="flex gap-[28px] pt-[15px]">
        <button
          className="w-[60px] h-[60px] rounded-[30px] bg-gray5 flex items-center justify-center"
          onClick={handleCopyClipBoard}
        >
          <Image
            src="/assets/icons/gmail.svg"
            alt="logo"
            width={28}
            height={22}
            className=""
          />
        </button>
        <Link
          href="https://www.instagram.com/likelion_erica/"
          target="_blank"
          className="w-[60px] h-[60px] rounded-[30px] bg-gray5 flex items-center justify-center"
        >
          <Image
            src="/assets/icons/instagram.svg"
            alt="logo"
            width={34}
            height={34}
            className=""
          />
        </Link>
      </div>
    </section>
  );
}
