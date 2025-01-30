import AboutListElement from "@/components/About/AboutListElement";
import AboutList from "@/components/About/AboutList";
import dataList from "@/constants/about";

export default function AboutPage() {
  return (
    <div className="flex-col justify-start items-center">
      <h1 className="pretendard text-4xl font-bold text-center p-12 mb-6">
        ~웹 사이트를 만든 사람들~
      </h1>
      <div className="flex align-start justify-center overflow-y-hidden mb-12"> 
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
