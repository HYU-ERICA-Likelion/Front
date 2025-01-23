"use client";
import { useState } from "react";

import InterviewTitle from "@/components/interview/title";
import InterviewSelectGen from "@/components/interview/select_gen";

export default function InterviewPage() {
  const [gen, setGen] = useState<string>("12");
  console.log(gen);
  return (
    <div className="flex flex-col items-center h-screen w-full max-w-screen">
      <div className="h-[130px]" />
      <InterviewTitle />
      <InterviewSelectGen selectedGen={gen} setSelectedGen={setGen} />
    </div>
  );
}
