"use client";

import PrView from "@/components/team-pr/PrView";
import PrHeader from "@/components/team-pr/PrHeader";

export default function Home() {
  return (
    <div>
      <PrHeader pageTitle="팀 메이커" mainTitle="팀 모집 게시글" />
      <PrView />
    </div>
  );
}
