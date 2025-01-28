import PartRecruit from "@/components/Common/PartRecruit";
import FAQ from "@/components/Recruit/FAQ";
import RecruitSchedule from "@/components/Recruit/RecruitSchedule";
import RecruitTitle from "@/components/Recruit/RecruitTitle";
import Wanted from "@/components/Recruit/Wanted";
import { contents } from "@/constants/part-recruit";
import { questions } from "@/constants/faq";
import { roads } from "@/constants/schedule-recruit";

export default function RecruitPage() {
  return (
    <div className="flex flex-col items-center pb-[365px]">
      <RecruitTitle />
      <PartRecruit contents={contents} />
      <Wanted />
      <RecruitSchedule roads={roads} />
      <FAQ questions={questions} />
    </div>
  );
}
