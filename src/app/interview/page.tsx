//Server Side
import InterviewClient from "@/components/interview/InterviewClient";
import { API_URL } from "@/constants/index";

async function getMembers() {
  const response = await fetch(`${API_URL}/members`);
  return response.json();
}

export default async function InterviewPage() {
  const interviewData = await getMembers();
  return <InterviewClient initialData={interviewData} />;
}