"use client";

import AdminAuthModal from "@/components/TeamMaker/Modal/AdminAuthModal";
import useToggle from "@/hooks/useToggle";

export default function MatchingResultPage() {
  const { isOpen, toggle } = useToggle();

  return (
    <div>
      <button onClick={toggle}>Trigger button</button>

      <AdminAuthModal isOpen={isOpen} toggle={toggle} />
    </div>
  );
}
