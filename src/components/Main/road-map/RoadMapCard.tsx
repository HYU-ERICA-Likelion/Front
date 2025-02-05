interface RoadMapCardProps {
  month: string;
  content: string;
}

export default function RoadMapCard({ month, content }: RoadMapCardProps) {
  return (
    <li className="w-[331px] desktop:h-[198px] tablet:h-[151px] mobile:h-[86px] tablet:rounded-[20px] mobile:rounded-[10px] desktop:pt-10 desktop:pl-10 tablet:pt-[29px] tablet:pl-[32px] mobile:pt-[18px] mobile:pl-[32px] bg-gray4 hover:bg-primary shadow-[0_2px_28px_10px_rgba(0,0,0,0.05)] text-white hover:text-black duration-300 ease-in">
      <div className="inline-flex flex-col items-start tablet:gap-[20px] mobile:gap-[10px]">
        <h4 className="md:text-[28px] sm:text-[18px] font-bold tracking-[-0.005em] ">
          {month}
        </h4>
        <p className="tablet:text-[24px] mobile:text-[16px] font-semibold tracking-[-0.005em]">
          {content}
        </p>
      </div>
    </li>
  );
}
