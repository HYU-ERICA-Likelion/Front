"use client";

import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const handleCopyClipBoard = () => {
    navigator.clipboard.writeText("hyuerica@likelion.org");
    alert("메일 주소가 복사되었습니다!");
  };

  return (
    <footer className="flex flex-col tablet:flex-row desktop:flex-row items-center justify-center w-screen h-[354px] tablet:h-[257px] desktop:h-[257px]  z-10 bg-black gap-[38px] tablet:justify-between desktop:justify-between tablet:px-[60px]  desktop:px-[120px]">
      <div className="flex flex-col">
        <Image
          src="/assets/images/footer-logo.png"
          alt="likelion univ. x hanyang"
          width={490}
          height={58}
          className="w-[300px] tablet:w-[400px] desktop:w-[490px]"
        />
        <span className="text-[14px] tablet:text-[16px] desktop:text-[16px] font-normal text-white/60">
          한양대학교 ERICA, 멋쟁이사자처럼
        </span>
        <span className="text-[14px] tablet:text-[16px] desktop:text-[16px] font-normal text-white/60">
          Copyright2025.LIKELION. All rights reserved.
        </span>
      </div>
      <div className="flex gap-5 w-[220px]">
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
        <Link
          href="https://github.com/HYU-ERICA-Likelion"
          target="_blank"
          className="w-[60px] h-[60px] rounded-[30px] bg-gray5 flex items-center justify-center"
        >
          <Image
            src="/assets/icons/github.svg"
            alt="logo"
            width={34}
            height={34}
            className=""
          />
        </Link>
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
      </div>
    </footer>
  );
}
