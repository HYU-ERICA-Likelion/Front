import Link from "next/link";

const img1 = "/assets/images/quotes.svg";
const img2 = "/assets/images/right-arrow.svg";

interface Props {
  img: string;
  name: string;
  position: string;
  text: string;
  id: string;
}

export default function InterviewCard({
  name,
  position,
  img,
  text,
  id,
}: Props) {
  return (
    <div className="flex flex-col bg-[#474343] active:bg-[#5E5A5A] w-[325px] max-h-[412px] p-[22px_15px_15px_15px] text-center rounded-[14px] items-center">
      <div className="w-[176px] h-[176px] bg-[#FFFFFF90] overflow-hidden rounded-full flex items-center justify-center border-0">
        <img src={img} className="w-full h-full object-cover" alt="" />
      </div>
      <div className="h-[20px]" />
      <div>
        <div className="text-[#FFF] text-[26px] font-[700]">{name}</div>
        <div className="text-[#FFF] text-[20px] font-[500]">{position}</div>
      </div>
      <div className="h-[30px]" />
      <Link
        prefetch
        href={`/interview/${id}`}
        className="flex flex-row items-center gap-x-[12px] p-[18.5px_13.5px] bg-[#292725] rounded-[12px]"
      >
        <img src={img1} alt="quotes" />
        <p className="text-[14px] font-medium w-[200px] break-words line-clamp-2 text-left">
          {text}
        </p>
        <img src={img2} alt="arrow" />
      </Link>
    </div>
  );
}
