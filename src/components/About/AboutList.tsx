import AboutListElement, {AboutListElementProps} from "@/components/About/AboutListElement";

interface AboutListProps {
    dataList: AboutListElementProps[];
};
  
export default function AboutList({dataList}: AboutListProps) {
  return (
    <div className="flex-col items-center animate-endingCredit">
      {dataList.map((data, index) => <AboutListElement key={index} title={data.title} list={data.list} />)}
    </div>
  );
}