import Modal from "@/components/Common/Modal";
import CloseIcon from "@/assets/common/close.svg";
import MatchingResultCarousel from "./MatchingResultCarousel";
import { TeamDTOResponse } from "@/types/team-maker";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

interface IMatchiingSuccessModalProps {
  isOpen: boolean;
  toggle: () => void;
  teamData: TeamDTOResponse[];
}

export default function MatchiingSuccessModal({
  isOpen,
  toggle,
  teamData,
}: IMatchiingSuccessModalProps) {
  const router = useRouter();
  const [hasMounted, setHasMounted] = useState<boolean>(false); // 처음 열렸는지 여부
  const [isRoutingToHome, setIsRoutingToHome] = useState<boolean>(false); // 홈으로 이동 클릭 여부

  // 모달 ON/OFF 및 라우팅 분기
  useEffect(() => {
    // 처음 열렸을 때
    if (!hasMounted && isOpen) {
      setHasMounted(true);
    }

    // 방금 열고난 후에 닫을 때
    if (hasMounted && !isOpen) {
      // 페이드아웃 애니메이션을 위해 0.3초 딜레이 후 라우팅
      setTimeout(() => {
        // 홈으로 돌아가기
        if (isRoutingToHome) {
          router.replace("/");
        } else {
          // 그냥 닫기 or 다시 매칭하기
          router.replace("/team-maker");
        }
        document.body.style.overflow = ""; // 배경 스크롤 허용
      }, 300);
    }
  }, [isOpen, hasMounted]);

  return (
    <Modal isOpen={isOpen} toggle={toggle}>
      <div className="flex flex-col items-center w-[640px] min-h-[805px] h-fit pt-[15px] px-[19px] pb-[60px] rounded-[13px] bg-white">
        {/* 닫기 버튼 */}
        <button
          className="flex justify-end items-center w-full mb-[80px] cursor-pointer"
          onClick={toggle}
        >
          <CloseIcon />
        </button>

        {/* 가이드 문구 */}
        <h2 className="w-full h-[60px] text-[36px] text-center font-semibold text-black">
          <span className="text-primary">매칭에 성공</span>하였습니다!
        </h2>
        <p className="w-full h-[46px] mb-[32px] text-[24px] font-semibold text-center text-black ">
          팀원 매칭이 완료되었습니다!
        </p>

        {/* 팀 매칭결과 캐러셀 */}
        <MatchingResultCarousel
          teamData={teamData}
          toggle={toggle}
          setIsRoutingToHome={setIsRoutingToHome}
        />
      </div>
    </Modal>
  );
}
