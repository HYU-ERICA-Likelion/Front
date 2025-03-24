import { TeamRoleSlotProps } from "@/types/team-maker";

export default function TeamRoleSlot({
  role,
  teamDTO,
  teamNum,
  setTeamList,
}: TeamRoleSlotProps) {
  const partMapping =
    role === "프론트엔드"
      ? "frontend"
      : role === "백엔드"
      ? "backend"
      : "design";

  const handleIncrement = () => {
    // setRoleList((prev) =>
    //   prev.map((item) =>
    //     item.role === part.role ? { ...item, count: item.count + 1 } : item
    //   )
    // );
  };

  const handleDecreament = () => {
    // setRoleList((prev) =>
    //   prev.map((item) =>
    //     item.role === part.role ? { ...item, count: item.count - 1 } : item
    //   )
    // );
  };

  return (
    <div
      className="flex items-center justify-between
                    tablet:w-[322px] tablet:h-[60px]"
    >
      <strong
        className="flex justify-start items-center font-semibold tracking-[-0.5%] text-white
                         tablet:w-[119px] tablet:text-[24px] tablet:leading-[60px]"
      >
        {role}
      </strong>

      <div className="flex justify-around items-center tablet:w-[144px]">
        {/* - 버튼 */}
        <button
          className="flex justify-center items-center w-[24px] h-[24px]"
          onClick={handleDecreament}
          disabled={teamDTO[partMapping] === 0}
        >
          <div className="w-[14px] h-[2px] rounded-[100px] bg-white" />
        </button>
        {/* 인원 수 */}
        <div
          className="flex justify-center items-center rounded-[5px] bg-white text-black tracking-[-0.5%] 
                tablet:w-12 tablet:h-12 tablet:text-[24px] tablet:font-semibold tablet:leading-[60px]
                mobile:w-[31px] mobile:h-[31px] mobile:text-[16px] mobile:font-semibold mobile:leading-[38px]
                "
        >
          {teamDTO[partMapping]}
        </div>
        {/* + 버튼 */}
        <button
          className="relative w-[24px] h-[24px]"
          onClick={handleIncrement}
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[14px] h-[2px] rounded-[100px] bg-white" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[14px] h-[2px] rounded-[100px] bg-white rotate-90" />
        </button>
      </div>
    </div>
  );
}
