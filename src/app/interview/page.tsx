//Server Side
import InterviewClient from "@/components/interview/InterviewClient";
import { members } from "../../constants/members";

// async function getMembers() {
//   const response = await fetch(`${process.env.API_URL_KEY}/members`);
//   const data = await response.json();
//   console.log(data);
//   return data;
// }

export default async function InterviewPage() {
  // const interviewData = await getMembers();
  return <InterviewClient initialData={members} />;
}
