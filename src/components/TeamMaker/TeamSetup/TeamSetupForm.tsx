import TeamRoleSlot from "./TeamRoleSlot";
import { TeamSetupFormProps } from "@/types/team-maker";

export default function TeamSetupForm({
  teamDTO,
  setTeamList,
  teamNum,
}: TeamSetupFormProps) {
  return (
    <div
      className="flex flex-col items-center gap-2 
                    tablet:w-[458px] tablet:h-[342px]"
    >
      <strong
        className="flex justify-center items-center font-medium text-white tracking-[-0.5%] 
                         tablet:h-[60px] tablet:text-[24px]
                         mobile:h-[39px]"
      >
        {teamNum}팀
      </strong>

      <div
        className="flex flex-col justify-center items-center w-full rounded-[12px] bg-gray4 
                   tablet:h-[274px]"
      >
        {["프론트엔드", "백엔드", "기획&디자인"].map((role, idx) => (
          <TeamRoleSlot
            key={`${teamNum}team-${idx}`}
            teamDTO={teamDTO}
            setTeamList={setTeamList}
            teamNum={teamNum}
            role={role}
          />
        ))}
      </div>
    </div>
  );
}
