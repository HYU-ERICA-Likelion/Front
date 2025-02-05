export interface AboutListElementProps {
  title: string;
  list: string[];
}

export default function AboutListElement({
  title,
  list,
}: AboutListElementProps) {
  return (
    <div className="flex justify-between itmes-center w-[263px] tablet:w-[415px] mb-[10px]">
      <span className="flex items-start text-[14px] tablet:text-[24px] font-medium pretendard text-whiteTransparent55">
        {title}
      </span>
      <div className="flex-col items-center justify-start">
        {list.map((name, index) => (
          <span
            key={index}
            className="flex itmes-start text-[14px] tablet:text-[24px] font-semibold pretendard text-white mb-[10px] h-[34px]"
          >
            {name}
          </span>
        ))}
      </div>
    </div>
  );
}
