"use client";

import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const handleCopyClipBoard = () => {
    navigator.clipboard.writeText("likelion@이메일.com");
    alert("클립보드에 이메일이 복사되었습니다!");
  };

  return (
    <footer className="flex justify-between items-center fixed bottom-0 left-0 w-full h-[257px]  px-[120px] bg-black">
      <div>
        <div className="flex items-center gap-[10px] w-[600px] h-[58px]">
          <Image
            src="/assets/icons/horizontal-logo.svg"
            alt="logo"
            width={246}
            height={20}
          />
          <Image
            src="/assets/icons/close.svg"
            alt="close icon"
            width={24}
            height={24}
          />
          <strong className="text-[26px] font-bold text-[white] tracking-[-0.5px]">
            HANYANG UNIV.
          </strong>
        </div>

        <div className="flex flex-col gap-[7px]">
          <span className="text-[16px] font-normal tracking-[-0.5%] text-white/60">
            한양대학교 ERICA, 멋쟁이사자처럼
          </span>
          <span className="text-[16px] font-normal tracking-[-0.5%] text-white/60">
            Copyright2025.LIKELION. All rights reserved.
          </span>
        </div>
      </div>

      <div className="flex gap-5 w-[220px]">
        <Link
          href="https://www.instagram.com/likelion_erica/"
          target="_blank"
          className="relative w-[60px] h-[60px] rounded-[30px] bg-gray5"
        >
          <Image
            src="/assets/icons/instagram.svg"
            alt="logo"
            width={34}
            height={34}
            className="absolute top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%]"
          />
        </Link>
        <Link
          href="https://github.com/HYU-ERICA-Likelion"
          target="_blank"
          className="relative w-[60px] h-[60px] rounded-[30px] bg-gray5"
        >
          <Image
            src="/assets/icons/github.svg"
            alt="logo"
            width={34}
            height={34}
            className="absolute top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%]"
          />
        </Link>
        <button
          className="relative w-[60px] h-[60px] rounded-[30px] bg-gray5"
          onClick={handleCopyClipBoard}
        >
          <Image
            src="/assets/icons/gmail.svg"
            alt="logo"
            width={28}
            height={22}
            className="absolute top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%]"
          />
        </button>
      </div>
    </footer>
  );
}
