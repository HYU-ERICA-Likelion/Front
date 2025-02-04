import Profile from "@/components/interview/profile";
import QnA from "@/components/interview/QnA";

interface Interview {
  question: string;
  answer: string;
}

interface InterviewData {
  photoUrl: string;
  name: string;
  role: string;
  interviewDtoList: Interview[];
}

async function getInterview(id: string) {
  try {
    const [gen, name] = id.split("-");
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_KEY}/interview?name=${name}&generation=${gen}`
    );
    if (!response.ok) throw new Error("Failed to fetch interview");
    return response.json();
  } catch (error) {
    console.error("Error fetching interview:", error);
    return null;
  }
}

export default async function Interview({
  params: { id },
}: {
  params: { id: string };
}) {
  const interviewData: InterviewData | null = await getInterview(id);

  if (!interviewData) return <div>Interview not found</div>;

  return (
    <div className="flex flex-col items-center">
      <div className="h-[129px]" />
      <Profile
        img={interviewData.photoUrl}
        role={interviewData.role}
        name={interviewData.name}
      />
      <div className="h-[93px]" />
      {interviewData.interviewDtoList.map(
        (interview: Interview, index: number) => (
          <div key={index} className="flex flex-col w-full">
            <QnA question={interview.question} answer={interview.answer} />
            <div className="h-[60px]" />
          </div>
        )
      )}
      <div className="h-[200px]" />
    </div>
  );
}
