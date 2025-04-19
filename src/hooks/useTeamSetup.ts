import { useState } from "react";
import { useRouter } from "next/navigation";
import { createTeams } from "@/actions";
import { TeamDTORequest } from "@/types/team-maker";

export const useTeamSetup = () => {
  const router = useRouter();

  const [teamList, setTeamList] = useState<TeamDTORequest[]>([
    { design: 0, frontend: 0, backend: 0 },
  ]);

  // 팀 추가 버튼 클릭 시 팀 추가
  const addTeam = () => {
    setTeamList((prev) => [...prev, { design: 0, frontend: 0, backend: 0 }]);
  };

  const submitTeams = async () => {
    const { teamDtoList } = await createTeams(teamList); // 팀 매칭 API 호출

    const encodedData = encodeURIComponent(JSON.stringify(teamDtoList)); // 데이터 인코딩
    router.replace(`/team-maker/random-matching?result=${encodedData}`); // 쿼리로 전달
  };

  return {
    teamList,
    setTeamList,
    addTeam,
    submitTeams,
  };
};
