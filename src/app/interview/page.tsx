//Server Side
import InterviewClient from "@/components/interview/InterviewClient";

async function getMembers() {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_KEY}/members`);
  return response.json();
}

export default async function InterviewPage() {
  const interviewData = await getMembers();
  return <InterviewClient initialData={interviewData} />;
}