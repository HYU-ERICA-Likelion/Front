"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

export default function BackButton() {
  const router = useRouter();

  return (
    <div className="w-full pl-[30px] tablet:pl-[8%] desktop:pl-[16%] pr-[auto]">
      <button
        onClick={() => router.back()}
        className="cursor-pointer hover:opacity-80 transition-opacity"
        aria-label="Go back"
      >
        <Image
          src="/assets/icons/left-arrow.svg"
          width={40}
          height={40}
          alt="back"
        />
      </button>
    </div>
  );
}
