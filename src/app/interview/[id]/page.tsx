import Profile from "@/components/interview/profile";

const img = "/assets/images/jongwon.png";

export default function Interview({
  params: { id },
}: {
  params: { id: string };
}) {
  return (
    <div>
      <div className="h-[129px]" />
      <Profile img={img} position="Software Engineer" name="John Doe" />
    </div>
  );
}
