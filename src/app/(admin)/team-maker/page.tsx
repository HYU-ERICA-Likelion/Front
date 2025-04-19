import MatchingIntro from "@/components/TeamMaker/TeamSetup/MatchingIntro";
import TeamSetupSection from "@/components/TeamMaker/TeamSetup/TeamSetupSection";

export default function TeamMakerPage() {
  return (
    <>
      <div className="flex flex-col items-center tablet:mb-[130px]">
        <MatchingIntro />
        <TeamSetupSection />
      </div>
    </>
  );
}
