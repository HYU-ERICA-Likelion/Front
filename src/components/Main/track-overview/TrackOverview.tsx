import { trackOverview } from "@/constants/track-overview";
import TrackCard from "./TrackCard";

export default function TrackOverview() {
  return (
    <section className="flex flex-col items-center gap-[105px] w-screen h-[810px] pt-[97px]">
      <div className="flex flex-col items-center gap-[12px] w-[334px]">
        <strong className=" h-[29px] text-[24px] font-bold text-white tracking-[-0.005em] text-center">
          13기 멋사의
        </strong>
        <h3 className="h-[43px] text-[36px] font-bold text-white tracking-[-0.005em]">
          파트별 소개 및 커리큘럼
        </h3>
      </div>

      <ul className="w-[1040px] h-[421px] flex gap-[49px]">
        {trackOverview.map((track, idx) => (
          <TrackCard
            key={`track-${idx}`}
            title={track.title}
            content={track.content}
            image={track.image}
          />
        ))}
      </ul>
    </section>
  );
}
