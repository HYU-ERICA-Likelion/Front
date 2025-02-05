"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

export default function BackButton() {
  const router = useRouter();

  return (
    <button
      onClick={() => router.back()}
      className="w-full ml-[30px] tablet:ml-[8%] desktop:ml-[16%] mr-[auto] cursor-pointer hover:opacity-80 transition-opacity"
      aria-label="Go back"
    >
      <Image
        src="/assets/icons/left-arrow.svg"
        width={40}
        height={40}
        alt="back"
      />
    </button>
  );
}
