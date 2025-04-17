"use client";

import MatchingSuccessModal from "@/components/TeamMaker/Modal/MatchingSuccessModal";
import RandomMatching from "@/components/TeamMaker/RandomMatching/RandomMatching";
import useToggle from "@/hooks/useToggle";
import { useSearchParams } from "next/navigation";

export default function RandomMatchingPage() {
  const { isOpen, toggle } = useToggle();
  const searchParams = useSearchParams().get("result"); // 쿼리에서 result 값 가져오기
  const resultData = JSON.parse(decodeURIComponent(searchParams)); // 디코딩

  return (
    <>
      <RandomMatching toggle={toggle} />
      <MatchingSuccessModal
        isOpen={isOpen}
        toggle={toggle}
        teamData={resultData}
      />
    </>
  );
}
