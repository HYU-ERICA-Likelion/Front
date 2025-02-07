"use client";

import { useVisibility } from "@/hooks/useVisibility";
import { ReactNode } from "react";

interface CurriculumItemProps {
  children: ReactNode;
  num: number;
  selectedPart: string;
}

export default function CurriculumItem({
  children,
  num,
  selectedPart,
}: CurriculumItemProps) {
  const { isVisible } = useVisibility(selectedPart);

  return (
    <li
      className={`flex items-center bg-gray4 rounded-[12px] transition-all duration-500 ease-in-out
                   desktop:w-[481px] desktop:h-[85px] desktop:pl-[20px] desktop:pr-[5px]
                   tablet:w-[390px] tablet:h-[69px] 
                   mobile:w-[311px] mobile:h-[63px] mobile:pl-[16px]
                ${
                  isVisible
                    ? "opacity-100 translate-y-0 scale-100"
                    : "opacity-0 translate-y-2 scale-80"
                }
                `}
    >
      <div className="flex items-center desktop:gap-[16px] mobile:gap-[13px]">
        <strong
          className="flex justify-center items-center font-bold text-white tracking-[-0.005em] bg-background
                           desktop:w-[40px] desktop:h-[40px] desktop:rounded-[8px] desktop:text-[24px]
                           tablet:w-[32px] tablet:h-[32px] tablet:rounded-[7px] tablet:text-[20px]
                           mobile:w-[24px] mobile:h-[27px] mobile:rounded-[4px] mobile:text-[16px]"
        >
          {isVisible ? num : ""}
        </strong>
        <p className="desktop:text-[24px] tablet:text-[20px] mobile:text-[16px]  font-semibold text-white tracking-[-0.005em]">
          {isVisible ? children : ""}
        </p>
      </div>
    </li>
  );
}
