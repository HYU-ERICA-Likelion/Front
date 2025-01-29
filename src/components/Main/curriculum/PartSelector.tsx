import { ReactNode } from "react";

interface PartSelectorProps {
  children: ReactNode;
  selectedPart: string;
  onClick: (part: string) => void;
}

export default function PartSelector({
  children,
  selectedPart,
  onClick,
}: PartSelectorProps) {
  return (
    <button
      onClick={() => onClick(children as string)}
      className={`w-[214px] h-[56px] rounded-[50px] ${
        selectedPart === children ? "bg-primary" : "bg-gray5"
      } transition-colors duration-500 ease-in-out text-[20px] font-bold text-subWhite tracking-[-0.005em]`}
    >
      {children}
    </button>
  );
}
