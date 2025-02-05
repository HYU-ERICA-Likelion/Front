import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="w-screen h-[934px] flex flex-col items-center pt-[87px]">
      <div className="relative w-[347px] h-[249px] mb-[33px]">
        <Image
          src="/assets/images/404.svg"
          alt="404"
          width={158.2}
          height={148}
          className="absolute top-[17px] left-0"
        />
        <Image
          src="/assets/images/character/404-lion.svg"
          alt="404"
          width={177}
          height={249}
          className="absolute top-0 left-[170px]"
        />
      </div>

      <strong className="text-[36px] font-bold text-white tracking-[-0.5%]">
        앗! 페이지를 찾을 수 없어요 T.T
      </strong>
      <p className="mb-[22px] text-[24px] font-semibold text-white tracking-[-0.5%]">
        올바른 URL을 입력하셨는지 다시 한 번 확인해주세요!
      </p>
      <Link
        href="/"
        className="flex justify-center items-center w-[282px] h-[61px] rounded-[40px] text-[24px] font-bold text-white tracking-[-0.5%] bg-primary "
      >
        메인 페이지로 돌아가기
      </Link>
    </div>
  );
}
