import BackButton from "@/components/interview/BackButton";
import Profile from "@/components/interview/profile";
import QnA from "@/components/interview/QnA";
import { memberInterviews } from "@/constants/member-interview";

interface InterviewDto {
  question: string;
  answer: string;
}

interface Interview {
  photoUrl: string;
  name: string;
  role: string;
  generations: number;
  interviewDtoList: InterviewDto[];
}

interface PageProps {
  params: {
    id: number;
  };
}

// async function getInterview(id: number): Promise<Interview | null> {
//   try {
//     const response = await fetch(
//       `${process.env.API_URL_KEY}/interview?name=${name}&generation=${gen}`
//     );
//     if (!response.ok) throw new Error("Failed to fetch interview");
//     console.log(response.json);
//     return response.json();
//   } catch (error) {
//     console.error("Error fetching interview:", error);
//     return null;
//   }
// }

export async function generateStaticParams() {
  return [];
}

export default function Interview({ params }: PageProps) {
  const id = params.id;
  // const interviewData = await getInterview(id);
  const interviewData = memberInterviews[id - 1];

  if (!interviewData) return <div>Interview not found</div>;

  return (
    <div className="flex flex-col items-center w-screen">
      <div className="h-[37px]" />
      <BackButton />
      <div className="h-[52px]" />
      <Profile
        img={interviewData?.photoUrl}
        role={interviewData?.role}
        name={interviewData?.name}
      />
      <div className="h-[93px]" />
      {interviewData?.interviewDtoList.map(
        (interview: InterviewDto, index: number) => (
          <div key={index} className="flex flex-col w-screen">
            <QnA question={interview?.question} answer={interview?.answer} />
            <div className="h-[60px]" />
          </div>
        )
      )}
      <div className="h-[200px]" />
    </div>
  );
}
