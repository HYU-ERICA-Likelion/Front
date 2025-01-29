import HeroBanner from "@/components/Main/hero/HeroBanner";
import RoadMap from "@/components/Main/road-map/RoadMap";
import TrackOverview from "@/components/Main/track-overview/TrackOverview";

export default function Home() {
  return (
    <div>
      <HeroBanner />
      <RoadMap />
      <TrackOverview />
    </div>
  );
}
