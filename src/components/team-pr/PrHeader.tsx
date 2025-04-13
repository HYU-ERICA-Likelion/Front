interface PrHeaderProps {
  pageTitle: string;
  mainTitle: string;
}

export default function PrHeader({ pageTitle, mainTitle }: PrHeaderProps) {
  return (
    <div className="flex flex-col items-center">
      {/* 페이지 타이틀 */}
      <div className="font-bold text-[18px] tablet:text-[24px] desktop:text-[24px] p-[12px_16px] border-none rounded-[4px] bg-[#F08314] mt-[152px]">
        {pageTitle}
      </div>

      {/* 메인 타이틀 */}
      <div className="font-bold text-[26px] tablet:text-[36px] desktop:text-[36px] mt-[12px]">
        {mainTitle}
      </div>
    </div>
  );
}
