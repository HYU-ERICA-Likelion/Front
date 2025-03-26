"use client";

import { IModalProps } from "@/types/modal";
import clsx from "clsx";
import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

/**
 * Modal 컴포넌트는 모달을 렌더링합니다.
 *
 * @param {boolean} isOpen - 모달이 열려 있는지 여부를 나타내는 상태
 * @param {() => void} toggle - 모달의 열림/닫힘 상태를 토글하는 훅
 * @param {ReactNode} children - 모달의 내용
 */

export default function Modal({ children, isOpen, toggle }: IModalProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  // 모달 열고 닫는 기본 로직
  useEffect(() => {
    if (isOpen) {
      dialogRef.current?.showModal();
      dialogRef.current?.scrollTo({
        top: 0,
      });

      document.body.style.overflow = "hidden"; // 배경 스크롤 방지
    } else {
      const timer = setTimeout(() => {
        dialogRef.current?.close();
        document.body.style.overflow = ""; // 배경 스크롤 허용
      }, 200); // 애니메이션 시간보다 조금 더 빠르게

      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  const handleClickOutside = (e: React.MouseEvent<HTMLDialogElement>) => {
    // 모달 바깥을 클릭하면 닫히도록
    if ((e.target as HTMLDialogElement).nodeName === "DIALOG") {
      toggle();
    }
  };

  return typeof window !== "undefined" && document.getElementById("modal-root")
    ? createPortal(
        <dialog
          onClick={handleClickOutside}
          ref={dialogRef}
          className={clsx(
            "fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-0 border-0 bg-transparent outline-none scrollbar-hide",
            isOpen ? "animate-modalFadeIn" : "animate-modalFadeOut"
          )}
        >
          {children}
        </dialog>,
        document.getElementById("modal-root") as HTMLElement
      )
    : null;
}
