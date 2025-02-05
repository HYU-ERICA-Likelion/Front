import { trackOverview } from "@/constants/track-overview";
import TrackCard from "./TrackCard";
import SectionHeader from "../section-header/SectionHeader";

export default function TrackOverview() {
  return (
    <section className="flex flex-col items-center gap-[105px] w-screen h-[810px] pt-[97px]">
      <SectionHeader subTitle="13기 멋사의" title="파트별 소개 및 커리큘럼" />

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
