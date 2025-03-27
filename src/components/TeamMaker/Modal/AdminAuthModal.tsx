"use client";

import Modal from "@/components/Common/Modal";
import CloseIcon from "@/assets/common/close.svg";
import { useEffect, useState } from "react";

interface IAdminAuthModalProps {
  isOpen: boolean;
  toggle: () => void;
}

export default function AdminAuthModal({
  isOpen,
  toggle,
}: IAdminAuthModalProps) {
  const [inputValue, setInputValue] = useState<string>("");

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  useEffect(() => {
    if (!isOpen) setInputValue("");
  }, [isOpen]);

  return (
    <Modal isOpen={isOpen} toggle={toggle}>
      <div className="flex flex-col items-center w-[640px] h-[425px] pt-[15px] px-[19px] rounded-[13px] bg-white">
        <button
          className="flex justify-end items-center w-full cursor-pointer"
          onClick={toggle}
        >
          <CloseIcon />
        </button>

        <form className="flex flex-col items-center w-[431px]">
          <h2 className="w-full h-[38px] mb-[28px] text-[32px] text-center font-bold text-black">
            비밀번호 입력 창
          </h2>
          <input
            type="password"
            value={inputValue}
            onChange={handleChange}
            placeholder="비밀번호를 입력해주세요"
            className="w-full h-[54px] mb-[8px] border border-solid border-subWhite rounded-[7px] placeholder:font-bold
                       tablet:pl-[16px] tablet:placeholder:text-[20px]
                       mobile:pl-[12px]"
          />
          <p className="w-full h-[16px] mb-[72px] text-[16px] font-medium text-[#5E5A5A] ">
            *멋사 운영진만 접속할 수 있는 페이지입니다.
          </p>

          <button
            type="submit"
            className="w-[170px] h-[62px] rounded-[20px] text-[32px] font-bold text-white bg-primary"
          >
            입력 완료
          </button>
        </form>
      </div>
    </Modal>
  );
}
