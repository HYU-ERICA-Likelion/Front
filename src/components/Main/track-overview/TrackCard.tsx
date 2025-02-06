import { TrackCardProps } from "@/types/track";

export default function TrackCard({ title, content, image }: TrackCardProps) {
  const contentLines = content.split("\n") as string[];

  return (
    <>
      <li
        className="flex items-center w-full 
                   desktop:flex-col desktop:gap-[24px] desktop:w-[314px] desktop:h-[421px]  
                   tablet:flex-row tablet:justify-center tablet:gap-[84px] tablet:min-h-[168px] tablet:rounded-[20px] 
                   mobile:flex-col mobile:justify-center mobile:gap-[11px] mobile:min-h-[369px] mobile:rounded-[10px] bg-gray4 shadow-[0_2px_28px_10px_rgba(0,0,0,0.05)]"
      >
        <div className="flex flex-col desktop:items-start tablet:gap-[24px] mobile:gap-[11px]">
          <strong className="tablet:text-[28px] mobile:text-[22px] font-bold text-white tracking-[-0.005em]">
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
        </div>

        <img
          src={image}
          alt={title}
          className={`${
            title === "기획 및 디자인"
              ? "desktop:w-[222px] desktop:h-[205px] tablet:w-[121px] tablet:h-[111px] mobile:w-[222px] mobile:h-[205px]"
              : title === "프론트엔드"
              ? "desktop:w-[240px] desktop:h-[192px] tablet:w-[140px] tablet:h-[112px] mobile:w-[240px] mobile:h-[192px]"
              : "desktop:w-[203px] desktop:h-[201px] tablet:w-[121px] tablet:h-[119px] mobile:w-[203px] mobile:h-[201px]"
          }`}
        />
      </li>
    </>
  );
}
