"use client";

import { row1Names, row2Names, row3Names } from "@/constants/team-maker";
import { useRandomMatching } from "@/hooks/useRandomMathching";
import { getRandomRow, getVisibleRow } from "@/utils/randomRowUtils";
import { useEffect } from "react";

export default function RandomMatching({ toggle }: { toggle: () => void }) {
  const initialRows = [
    getRandomRow(row1Names),
    getRandomRow(row2Names),
    getRandomRow(row3Names),
  ];

  const { stopped, offsets } = useRandomMatching();

  useEffect(() => {
    // 매칭 완료 후 0.7초 뒤 매칭 성공 모달 렌더링
    if (stopped) {
      setTimeout(() => {
        toggle();
      }, 700);
    }
  }, [stopped]);

  const visibleRows = initialRows.map((row, i) =>
    getVisibleRow(row, offsets[i])
  );

  return (
    <div className="w-screen flex flex-col items-center justify-center pt-[120px]">
      <div className="flex flex-col items-center mb-[91px]">
        <span className="w-[121px] h-[53px] text-[24px] font-bold px-4 py-3 mb-3 rounded-[4px] bg-primary">
          팀 메이커
        </span>
        <h1 className="h-[60px] text-[36px] mb-11 font-bold leading-[60px]">
          랜덤 매칭
        </h1>
        <p className="text-center text-[48px] font-semibold leading-[60px]">
          팀메이커로 랜덤 매칭하고 <br />
          나와 함께
          <span className="text-primary"> 협업할 팀원 </span>
          찾아가세요!
        </p>
      </div>

      <div className="w-screen mb-[243px]">
        {visibleRows.map((row, rowIndex) => (
          <div key={rowIndex} className="flex justify-center min-h-[106px]">
            {row.map((name, idx) => (
              <div
                key={`${rowIndex}-${idx}`}
                className={`w-full px-[47px] py-[32px] text-[32px] font-semibold text-white leading-10 text-center min-w-[178px] ${
                  idx === 3 ? "bg-orange-500" : "bg-gray5"
                }`}
              >
                {name}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
