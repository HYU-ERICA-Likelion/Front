import Image from "next/image";
import Link from "next/link";

const img1 = "/assets/icons/quotes.svg";
const img2 = "/assets/icons/right-arrow.svg";

interface Props {
  id: number;
  photoUrl: string;
  name: string;
  generations: number[];
  role: string;
  description: string;
}

export default function InterviewCard({
  id,
  photoUrl,
  name,
  role,
  description,
}: Props) {
  return (
    <div className="flex flex-col bg-[#474343] active:bg-[#5E5A5A] w-[306px] tablet:w-[325px] max-h-[412px] p-[22px_15px_15px_15px] text-center rounded-[14px] items-center">
      <div className="w-[176px] h-[176px] bg-[#FFFFFF90] overflow-hidden rounded-full flex items-center justify-center border-0">
        <Image
          src={photoUrl}
          width={176.64}
          height={176.64}
          quality={100}
          className="w-full h-full object-cover"
          alt=""
        />
      </div>
      <div className="h-[20px]" />
      <div>
        <div className="text-[#FFF] text-[26px] font-[700]">{name}</div>
        <div className="text-[#FFF] text-[20px] font-[500]">{role}</div>
      </div>
      <div className="h-[30px]" />
      <Link
        prefetch
        href={`/interview/${id}`}
        className="flex flex-row items-center gap-x-[12px] p-[18.5px_13.5px] bg-[#292725] rounded-[12px]"
      >
        <Image src={img1} width={27.39} height={27.39} alt="quotes" />
        <p className="text-[14px] font-medium w-[200px] break-words line-clamp-2 text-left">
          {description}
        </p>
        <Image
          src={img2}
          width={24.65}
          height={24.65}
          className="w-[18px] h-[18px]"
          alt="arrow"
        />
      </Link>
    </div>
  );
}
