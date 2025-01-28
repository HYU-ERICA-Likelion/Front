interface RoadMapCardProps {
  month: string;
  content: string;
}

export default function RoadMapCard({ month, content }: RoadMapCardProps) {
  return (
    <li className="w-[331px] h-[198px] rounded-[20px] pt-10 pl-10 bg-gray4 hover:bg-primary shadow-[0_2px_28px_10px_rgba(0,0,0,0.05)] text-white hover:text-black duration-300 ease-in">
      <div className="inline-flex flex-col items-start gap-[10px]">
        <h4 className="text-[28px] font-bold tracking-[-0.005em] ">{month}</h4>
        <p className="text-[24px] font-semibold tracking-[-0.005em]">
          {content}
        </p>
      </div>
    </li>
  );
}
