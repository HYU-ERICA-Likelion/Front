import { TeamDTOFormatted, TeamDTOResponse } from "@/types/team-maker";

/**
 * 팀 데이터를 역할별로 변환하여 포맷팅합니다.
 * @param teamData - TeamDTOResponse 배열
 * @returns TeamDTOFormatted[][] - 변환된 팀 데이터
 */

const formatTeamDTO = (teamData: TeamDTOResponse[]): TeamDTOFormatted[][] => {
  return teamData.map((team) => {
    const roleNameMapping = [
      { role: "design", names: team.design },
      { role: "frontend", names: team.frontend },
      { role: "backend", names: team.backend },
    ];

    return roleNameMapping
      .filter((data) => data.names) // 데이터가 없는 역할은 제외
      .flatMap((data) =>
        data.names
          .split(",") // 각 역할의 이름 배열로 변환
          .map((name) => ({
            // 역할별 이름 객체로 매핑
            role: data.role,
            name: name.trim(),
          }))
      );
  });
};

export { formatTeamDTO };
