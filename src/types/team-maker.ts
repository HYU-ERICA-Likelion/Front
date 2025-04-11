interface TeamDTO {
  design: number | string;
  frontend: number | string;
  backend: number | string;
}

interface TeamSetupFormProps {
  teamDTO: TeamDTO;
  teamNum: number;
  setTeamList: React.Dispatch<React.SetStateAction<TeamDTO[]>>;
}

interface TeamRoleSlotProps extends TeamSetupFormProps {
  role: string;
}

export type { TeamDTO, TeamSetupFormProps, TeamRoleSlotProps };
