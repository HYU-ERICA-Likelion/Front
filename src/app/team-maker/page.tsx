"use client";

import Modal from "@/components/Common/Modal";
import useToggle from "@/hooks/useToggle";
import React from "react";

export default function TeamMakerPage() {
  const { isOpen, toggle } = useToggle();

  return (
    <>
      <button onClick={toggle}>Modal Open</button>

      <Modal isOpen={isOpen} toggle={toggle}>
        <div className="w-[400px] h-[300px] bg-white">TeamMaker Modal</div>
      </Modal>
    </>
  );
}
