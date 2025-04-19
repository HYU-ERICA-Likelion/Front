interface TeamDTO<T> {
  design: T;
  frontend: T;
  backend: T;
}

interface TeamDTORequest extends TeamDTO<number> {}

interface TeamDTOResponse extends TeamDTO<string> {}

interface TeamDTOFormatted {
  role: string;
  name: string;
}

interface TeamSetupFormProps {
  teamDTO: TeamDTO<number>;
  teamNum: number;
  setTeamList: React.Dispatch<React.SetStateAction<TeamDTO<number>[]>>;
}

interface TeamRoleSlotProps extends TeamSetupFormProps {
  role: string;
}

export type {
  TeamDTORequest,
  TeamDTOResponse,
  TeamDTOFormatted,
  TeamSetupFormProps,
  TeamRoleSlotProps,
};
