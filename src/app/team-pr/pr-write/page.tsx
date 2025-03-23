import PostInput from "@/components/team-pr/pr-write/PostInput";
import PrHeader from "@/components/team-pr/PrHeader";

export default function Home() {
  return (
    <div>
      <PrHeader pageTitle="팀 메이커" mainTitle="모집 게시글 작성" />
      <PostInput />
    </div>
  );
}
