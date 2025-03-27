import Modal from "@/components/Common/Modal";
import CloseIcon from "@/assets/common/close.svg";
import MatchingResultCarousel from "./MatchingResultCarousel";
import { TeamDTO } from "@/types/team-maker";

interface IMatchiingSuccessModalProps {
  isOpen: boolean;
  toggle: () => void;
  teamData: TeamDTO[];
}

export default function MatchiingSuccessModal({
  isOpen,
  toggle,
  teamData,
}: IMatchiingSuccessModalProps) {
  return (
    <Modal isOpen={isOpen} toggle={toggle}>
      <div className="flex flex-col items-center w-[640px] h-[805px] pt-[15px] px-[19px] rounded-[13px] bg-white">
        {/* close button */}
        <button
          className="flex justify-end items-center w-full mb-[80px] cursor-pointer"
          onClick={toggle}
        >
          <CloseIcon />
        </button>

        {/* guide text */}
        <h2 className="w-full h-[60px] text-[36px] text-center font-semibold text-black">
          <span className="text-primary">매칭에 성공</span>하였습니다!
        </h2>
        <p className="w-full h-[46px] mb-[32px] text-[24px] font-semibold text-center text-black ">
          팀원 매칭이 완료되었습니다!
        </p>

        {/* 팀 매칭결과 캐러셀 */}
        <MatchingResultCarousel teamData={teamData} />
      </div>
    </Modal>
  );
}
