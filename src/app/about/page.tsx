import AboutListElement from "@/components/About/AboutListElement";
import dataList from "@/constants/about";


export default function AboutPage() {
  return (
    <div className="flex-col justify-between items-center box-border">
      <h1 className="pretendard text-4xl font-bold text-center p-12 mb-6">
        ~웹 사이트를 만든 사람들~
      </h1>
      <div className="flex align-start justify-center"> 
        {/* content */}

        <div className="w-96 h-96 mr-20 bg-primary"> 
          <span>동영상 있어요!!!</span>
        </div>

        <div className="flex-col items-center w-96">
          {dataList.map((data, index) => <AboutListElement key={index} title={data.title} list={data.list} />)}
        </div>

      </div>
    </div>
  );
}
