"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavigationHeader() {
  const pathname = usePathname();

  const getLinkClassName = (path: string) => {
    return pathname.startsWith(path) ? "text-primary" : "text-white/40";
  };

  return (
    <header className="w-dvw h-[101px] flex justify-center items-center ">
      <div className="flex justify-between items-center w-[1040px] h-[58px]">
        <Link
          href="/"
          className="flex items-center gap-[10px] w-[600px] h-[58px] cursor-pointer"
        >
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
          <strong className="text-[26px] font-bold text-[white] tracking-[-0.5%]">
            HANYANG UNIV.
          </strong>
        </Link>

        <div className="w-[316px] flex gap-10">
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
    </header>
  );
}
