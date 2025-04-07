"use client";

import MatchingSuccessModal from "@/components/TeamMaker/Modal/MatchingSuccessModal";
import RandomMatching from "@/components/TeamMaker/RandomMatching/RandomMatching";
import useToggle from "@/hooks/useToggle";
import mockData from "@/mocks/teamDTOList.json";

export default function RandomMatchingPage() {
  const { isOpen, toggle } = useToggle();

  const { teamDtoList } = mockData;

  return (
    <>
      <RandomMatching toggle={toggle} />
      <MatchingSuccessModal
        isOpen={isOpen}
        toggle={toggle}
        teamData={teamDtoList}
      />
    </>
  );
}
