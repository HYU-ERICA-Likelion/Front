import { ReactNode } from "react";

interface PartSelectorProps {
  children: ReactNode;
  width: number;
  height: number;
  selectedPart: string;
  onClick: (part: string) => void;
}

export default function TabSelector({
  children,
  width,
  height,
  selectedPart,
  onClick,
}: PartSelectorProps) {
  return (
    <button
      onClick={() => onClick(children as string)}
      style={{ width: `${width}px`, height: `${height}px` }}
      className={`rounded-[50px] ${
        selectedPart === children ? "bg-primary" : "bg-gray5"
      } transition-colors duration-500 ease-in-out text-[20px] font-bold text-subWhite tracking-[-0.005em]`}
    >
      {children}
    </button>
  );
}
