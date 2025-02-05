import { ReactNode } from "react";

interface PartSelectorProps {
  children: ReactNode;
  selectedValue: string;
  onClick: (part: string) => void;
}

export default function TabSelector({
  children,
  selectedValue,
  onClick,
}: PartSelectorProps) {
  return (
    <button
      onClick={() => onClick(children as string)}
      className={`w-full h-full rounded-[50px] ${
        selectedValue === children ? "bg-primary" : "bg-gray5"
      } transition-colors duration-500 ease-in-out 
      tablet:text-[20px] mobile:text-[12px] font-bold text-subWhite tracking-[-0.005em]`}
    >
      {children}
    </button>
  );
}
