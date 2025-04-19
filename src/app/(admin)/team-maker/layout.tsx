"use client";

import AdminAuthModal from "@/components/TeamMaker/Modal/AdminAuthModal";
import useToggle from "@/hooks/useToggle";
import { useEffect, useState } from "react";

export default function TeamMakerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isOpen, setIsOpen, toggle } = useToggle();
  const [isAuth, setIsAuth] = useState<boolean>(false);

  // 페이지 마운트 시 모달 열기
  useEffect(() => {
    if (!isAuth) setIsOpen(true);
  }, []);

  return (
    <div>
      <AdminAuthModal isOpen={isOpen} toggle={toggle} />
      {children}
    </div>
  );
}
