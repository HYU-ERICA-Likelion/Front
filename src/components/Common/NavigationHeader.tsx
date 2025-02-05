"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavigationHeader() {
  const pathname = usePathname();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const getLinkClassName = (path: string) => {
    return pathname.startsWith(path) ? "text-primary" : "text-white/40";
  };

  return (
    <header
      className={`w-dvw h-[101px] flex justify-center items-center ${
        pathname === "/about" && "bg-[#000000]"
      }`}
    >
      <div className="flex justify-between items-center w-[317px] tablet:w-[696px] desktop:w-[1040px] h-[58px]">
        <Link
          href="/"
          className="flex items-center gap-[10px] w-[200px] tablet:w-[347px] desktop:w-[600px] h-[58px] cursor-pointer"
        >
          <Image
            src="/assets/icons/horizontal-logo.svg"
            alt="logo"
            width={246}
            height={20}
            className="w-[93px] tablet:w-[170px] desktop:w-[246px]"
          />
          <Image
            src="/assets/icons/close.svg"
            alt="close icon"
            width={24}
            height={24}
            className="w-[9px] tablet:w-[16px] dekstop:w-[24px]"
          />
          <strong className="text-[10px] tablet:text-[18px] desktop:text-[26px] font-bold text-[white] tracking-[-0.5%]">
            HANYANG UNIV.
          </strong>
        </Link>
        <div className="tablet:hidden">
          <Image
            src="/assets/icons/menu.svg"
            alt="menu"
            width={24}
            height={24}
            className="w-[24px] cursor-pointer"
            onClick={() => setIsModalOpen(true)}
          />
        </div>
        <div className="hidden tablet:flex tablet:w-[316px] gap-10">
          <Link
            href="/interview"
            className={`text-[20px] font-bold ${getLinkClassName(
              "/interview"
            )}`}
          >
            소개
          </Link>
          <Link
            href="/project"
            className={`text-[20px] font-bold  ${getLinkClassName("/project")}`}
          >
            아카이빙
          </Link>
          <Link
            href="/recruit"
            className={`text-[20px] font-bold  ${getLinkClassName("/recruit")}`}
          >
            모집
          </Link>
          <Link
            href="/about"
            className={`text-[20px] font-bold  ${getLinkClassName("/about")}`}
          >
            만든 이
          </Link>
        </div>
      </div>
      {/* 모달 */}
      {isModalOpen && (
        <div className="fixed pt-0 top-[0px] left-0 w-full h-full bg-black/80 flex justify-center items-start z-50">
          <div className="w-full bg-[#292725] text-white p-5 rounded-lg">
            <div className="flex justify-between items-center">
              <div className="flex gap-[10px] pt-6">
                <Image
                  src="/assets/icons/horizontal-logo.svg"
                  alt="logo"
                  width={246}
                  height={20}
                  className="w-[93px] tablet:w-[170px] desktop:w-[246px]"
                />
                <Image
                  src="/assets/icons/close.svg"
                  alt="close icon"
                  width={24}
                  height={24}
                  className="w-[9px] tablet:w-[16px] dekstop:w-[24px]"
                />

                <strong className="text-[10px] font-bold text-[white] tracking-[-0.5%]">
                  HANYANG UNIV.
                </strong>
              </div>
              <button onClick={() => setIsModalOpen(false)}>
                <Image
                  src="/assets/icons/close.svg"
                  alt="close"
                  width={24}
                  height={24}
                />
              </button>
            </div>
            <nav className="mt-[28px] flex flex-col gap-3">
              <Link
                href="/interview"
                className="text-[16px] text-white opacity-40"
                onClick={() => setIsModalOpen(false)}
              >
                소개
              </Link>
              <Link
                href="/project"
                className="text-[16px] text-white opacity-40"
                onClick={() => setIsModalOpen(false)}
              >
                아카이빙
              </Link>
              <Link
                href="/recruit"
                className="text-[16px] text-white opacity-40"
                onClick={() => setIsModalOpen(false)}
              >
                모집
              </Link>
              <Link
                href="/about"
                className="text-[16px] text-white opacity-40"
                onClick={() => setIsModalOpen(false)}
              >
                만든 이
              </Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
