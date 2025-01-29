"use client";

import { ReactNode, useEffect, useState } from "react";

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
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(false);

    const timeoutId = setTimeout(() => {
      setIsVisible(true);
    }, 400);

    return () => clearTimeout(timeoutId);
  }, [selectedPart]);

  return (
    <li
      className={`flex items-center w-[481px] h-[85px] pl-[20px] bg-gray4 rounded-[12px] transition-all duration-500 ease-in-out
        ${
          isVisible
            ? "opacity-100 translate-y-0 scale-100"
            : "opacity-0 translate-y-2 scale-80"
        }
      `}
    >
      <div className="flex gap-[16px]">
        <strong className="flex justify-center items-center w-[40px] h-[40px] rounded-[8px] text-[24px] font-bold text-white tracking-[-0.005em] bg-background">
          {isVisible ? num : ""}
        </strong>
        <p className="text-[24px] font-semibold text-white tracking-[-0.005em]">
          {isVisible ? children : ""}
        </p>
      </div>
    </li>
  );
}
