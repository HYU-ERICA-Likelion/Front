interface TeamDTO {
  design: number;
  frontend: number;
  backend: number;
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
