import Curriculum from "@/components/Main/curriculum/Curriculum";
import LeadingCrew from "@/components/Main/leading-crew/LeadingCrew";
import HeroBanner from "@/components/Main/hero/HeroBanner";
import RoadMap from "@/components/Main/road-map/RoadMap";
import TrackOverview from "@/components/Main/track-overview/TrackOverview";
import ProjectPreview from "@/components/Main/project-preview/ProjectPreview";
import Sponser from "@/components/Main/sponser/Sponser";

export default function Home() {
  return (
    <div>
      <HeroBanner />
      <RoadMap />
      <TrackOverview />
      <Curriculum />
      <LeadingCrew />
      <ProjectPreview />
      <Sponser />
    </div>
  );
}
