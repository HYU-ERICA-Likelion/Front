import AboutList from "@/components/About/AboutList";
import dataList from "@/constants/about";

export default function AboutPage() {
  return (
    <div className="flex-col justify-start items-center bg-black">
      <h1 className="pretendard text-[36px] font-bold text-center p-12">
        ~웹 사이트를 만든 사람들~
      </h1>
      <div className="flex align-start justify-center overflow-y-hidden pt-5 pb-24"> 
        {/* content */}
        <div className="w-96 h-96 mr-8">
          <video autoPlay loop muted>
            <source src="@/../assets/videos/ending-credit.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="h-96">
          <AboutList dataList={dataList} />
        </div>
      </div>
    </div>
  );
}
