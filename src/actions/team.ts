"use server";

import { TeamDTORequest } from "@/types/team-maker";

const createTeams = async (teamList: TeamDTORequest[]) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL_KEY}/teams`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      teamList,
    }),
  });

  if (!res.ok) {
    throw new Error("랜덤 매칭 요청 실패");
  }

  return await res.json();
};

export { createTeams };
