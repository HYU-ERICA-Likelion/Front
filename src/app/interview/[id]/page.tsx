import Profile from "@/components/interview/profile";
import QnA from "@/components/interview/QnA";

const img = "/assets/images/jongwon.png";

export default function Interview({
  params: { id },
}: {
  params: { id: string };
}) {
  return (
    <div className="flex flex-col items-center">
      <div className="h-[129px]" />
      <Profile img={img} position="Software Engineer" name="John Doe" />
      <div className="h-[93px]" />
      <QnA question={`${id}`} answer={`${id}`} />
      <div className="h-[200px]" />
    </div>
  );
}
