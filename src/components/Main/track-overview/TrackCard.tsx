import { TrackCardProps } from "@/types/track";
import Image from "next/image";

export default function TrackCard({ title, content, image }: TrackCardProps) {
  const contentLines = content.split("\n") as string[];

  return (
    <li className="flex flex-col items-center w-[314px] h-[421px] pt-[44px] rounded-[20px] bg-gray4 shadow-[0_2px_28px_10px_rgba(0,0,0,0.05)]">
      <div className="flex flex-col items-start justify-center gap-[24px]">
        <strong className="text-[28px] font-bold text-white tracking-[-0.005em]">
          {title}
        </strong>
        <div>
          {contentLines.map((line, idx) => (
            <p
              key={idx}
              className="text-[14px] font-medium text-[rgba(255,255,255,0.55)] leading-[20px] tracking-[-0.005em]"
            >
              {line}
              {idx < contentLines.length - 1 && <br />}
            </p>
          ))}
        </div>
        <Image src={image} width={203} height={201} alt={title} />
      </div>
    </li>
  );
}
