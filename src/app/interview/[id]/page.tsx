import Profile from "@/components/interview/profile";
import QnA from "@/components/interview/QnA";
import { API_URL } from "@/constants";

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
      `${API_URL}/interview?name=${name}&generation=${gen}`
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
        (interview: Interview, index: any) => (
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
