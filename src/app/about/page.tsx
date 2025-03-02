import AboutList from "@/components/About/AboutList";
import dataList from "@/constants/about";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="flex-col justify-start items-center bg-black">
      <p className="pretendard flex-wrap text-[26px] tablet:text-[36px] font-bold text-center px-[58px] pt-[106px] pb-[40px] tablet:pt-[180px]">
        ~웹 사이트를 만든 사람들~
      </p>
      <div className="flex flex-col desktop:flex-row items-center justify-center overflow-y-hidden pb-[96px]">
        {/* content */}
        <div className="w-[263px] h-[284px] tablet:w-[467px] tablet:h-[504px] desktop:mr-[88px] opacity-40 desktop:opacity-100">
          <Image
            src="/assets/images/character/dance.gif"
            alt="춤"
            width={467}
            height={504}
          />
          {/* <video autoPlay loop muted>
            <source
              src="@/../../assets/videos/ending-credit.mp4"
              type="video/mp4"
            />
          </video> */}
        </div>
        <div className="h-[100px] tablet:h-[504px]">
          <AboutList dataList={dataList} />
        </div>
      </div>
    </div>
  );
}
