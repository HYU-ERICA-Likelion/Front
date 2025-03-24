"use client";

import { useState } from "react";
import MatchingIntro from "@/components/TeamMaker/MatchingIntro";
import TeamSetupForm from "@/components/TeamMaker/TeamSetupForm";
import { TeamDTO } from "@/types/team-maker";

export default function TeamMakerPage() {
  const [teamList, setTeamList] = useState<TeamDTO[]>([
    {
      design: 0,
      frontend: 0,
      backend: 0,
    },
  ]);

  return (
    <>
      <section>
        <MatchingIntro />
        <div>
          {teamList.map((teamDTO, idx) => (
            <TeamSetupForm
              key={`team-${idx}`}
              teamDTO={teamDTO}
              setTeamList={setTeamList}
              teamNum={idx + 1}
            />
          ))}
        </div>
      </section>
    </>
  );
}
