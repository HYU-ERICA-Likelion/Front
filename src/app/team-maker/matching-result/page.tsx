"use client";

import MatchiingSuccessModal from "@/components/TeamMaker/Modal/MatchingSuccessModal";
import useToggle from "@/hooks/useToggle";
import mockData from "@/mocks/teamDTOList.json";

export default function MatchingResultPage() {
  const { isOpen, toggle } = useToggle();

  const { teamDtoList } = mockData;

  return (
    <div>
      <button onClick={toggle}>Trigger button</button>

      {/* <AdminAuthModal isOpen={isOpen} toggle={toggle} /> */}
      <MatchiingSuccessModal
        teamData={teamDtoList}
        isOpen={isOpen}
        toggle={toggle}
      />
    </div>
  );
}
