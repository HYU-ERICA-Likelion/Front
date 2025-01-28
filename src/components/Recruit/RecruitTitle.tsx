import Image from "next/image";
import Lion from "@/../public/assets/icons/recruit-lion.svg";

export default function RecruitTitle() {
  return (
    <div className="flex flex-col items-center mt-[144px]">
      <p className="text-center text-white text-[48px] font-bold">
        멋쟁이 사자처럼에서
        <br />
        13기 아기사자를 모집합니다!
      </p>
      <button className="relative flex justify-center items-center mt-[89px] px-[26px] py-[12px] gap-[10px] box-border rounded-[20px] bg-primary h-[62px]">
        <p className="text-white text-[32px] font-bold">지원하러 가기</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="38"
          height="38"
          viewBox="0 0 38 38"
          fill="none"
        >
          <path
            d="M10.1337 28.4993L7.91699 26.2827L23.117 11.0827H9.50033V7.91602H28.5003V26.916H25.3337V13.2993L10.1337 28.4993Z"
            fill="white"
          />
        </svg>
        <Image
          src={Lion}
          alt="라이언"
          width={126}
          height={177}
          className="absolute right-[248px] top-[-80px]"
        />
      </button>
    </div>
  );
}
