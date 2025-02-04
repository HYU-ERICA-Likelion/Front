"use client";

import { useRouter } from "next/navigation";

export default function BackButton() {
  const router = useRouter();

  return (
    <button
      onClick={() => router.back()}
      className="w-full ml-[160px] mr-[auto] cursor-pointer hover:opacity-80 transition-opacity"
      aria-label="Go back"
    >
      <img src="/assets/icons/left-arrow.svg" alt="back" />
    </button>
  );
}
