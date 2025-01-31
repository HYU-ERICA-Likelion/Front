"use client";

import AboutListElement, {AboutListElementProps} from "@/components/About/AboutListElement";
import { useState } from "react";

interface AboutListProps {
    dataList: AboutListElementProps[];
};
  
export default function AboutList({dataList}: AboutListProps) {
  const [isPressed, setIsPressed] = useState(false)
  
  return (
    <div 
      className="flex-col items-center animate-endingCredit"
      onMouseDown={() => setIsPressed(true)}
      onMouseUp={() => setIsPressed(false)}
      onMouseLeave={() => setIsPressed(false)}
      style={{ animationPlayState: isPressed ? 'paused' : 'running' }}
    >
      {dataList.map((data, index) => <AboutListElement key={index} title={data.title} list={data.list} />)}
    </div>
  );
}