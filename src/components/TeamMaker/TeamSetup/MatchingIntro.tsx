import React from "react";

export default function MatchingIntro() {
  return (
    <div className="flex flex-col items-center justify-center gap-11 text-center pt-[120px] mb-[76px]">
      <div className="flex flex-col items-center justify-center gap-3">
        <span className="flex justify-center items-center w-[121px] h-[53px] rounded-[4px] text-[24px] font-bold text-white tracking-[-0.5%] bg-primary">
          팀 메이커
        </span>
        <h2 className="flex justify-center items-center h-[60px] text-[36px] font-bold text-white tracking-[-0.5%]">
          랜덤 매칭
        </h2>
      </div>

      <p className="h-[120px] text-[48px] font-semibold text-white leading-[60px] tracking-[-0.5%]">
        팀메이커로 랜덤 매칭하고
        <br />
        나와 함께 <span className="text-primary">협업할 팀원</span>을
        찾아가세요!
      </p>
    </div>
  );
}
