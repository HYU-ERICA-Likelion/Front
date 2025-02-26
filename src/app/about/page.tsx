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
            src="https://s3-alpha-sig.figma.com/img/9a5c/a6a6/8a56c51473e7800ee23f83a97dc6c58a?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=LRiB4E2HqAw6XRHU3H7ZH~HXwpSM3WpkEHEgppCQKFetXVL~9KZw8qBMJ7rnKB6wsoTt2yh9hca9PV8U6ha5YTtI1s-y2tY3vH2p8rN4tA5QukBStf~jH447l6AXWo285JKQb3mDL5PvLJPVEoyLByMBEZu-d24I8IIKupQtdeUXiR6-sv20j5WJYZsXDQL97uwuX2t7b1qWreus0vMWaivkk~jnoKDKiOPv1XHVP01YhJJqV~09UFibrS6PqTjXylBf-rxJOKtcuXvPdXBJdBxF~SwdjxLL5Uyxny4wtVYtkUGr028971NMtBP77VWegV-9YwpRrqHFlaSrgy933Q__"
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
