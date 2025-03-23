"use client";

import Link from "next/link";
import Image from "next/image";
import { data } from "@/constants/prview";
import useToggle from "@/hooks/useToggle";

import Modal from "../Common/Modal";
import PrModal from "./PrModal";

export default function PrView() {
  const { isOpen, toggle } = useToggle();

  return (
    <div>
      {/* PR 카드 */}
      <div className="flex justify-between items-center gap-[40px] mt-[97px]">
        <div className="w-[44px] h-[44px] rounded-[84px] bg-[rgba(0,0,0,0.06)] cursor-pointer z-10 flex items-center justify-center">
          <Image
            src="/assets/icons/carousel-prev-arrow.svg"
            width={11.78}
            height={20}
            alt="next-arrow"
          />
        </div>
        {data.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center gap-[16px] cursor-pointer"
            onClick={toggle}
          >
            <div className="w-[400px] h-[387px] bg-[#474343] rounded-[20px] flex flex-col items-center px-[20px] py-[24px] gap-[16px]">
              <div className="w-[360px] h-[186px] bg-[#8C8C8C] rounded-[13px]"></div>
              <div className="flex items-center w-[360px] gap-[20px]">
                <p className="text-[24px] font-bold text-[#ffffff]">
                  {item.title}
                </p>
                <p className="text-[20px] font-[600] text-[#918E8E]">
                  {item.category}
                </p>
              </div>
              <div>
                <p className="text-[16px] font-[400] text-[#D1D0D0]">
                  {item.description}
                </p>
              </div>
            </div>
          </div>
        ))}

        <div className="w-[44px] h-[44px] rounded-[84px] bg-[rgba(0,0,0,0.06)] cursor-pointer z-10 flex items-center justify-center">
          <Image
            src="/assets/icons/carousel-next-arrow.svg"
            width={11.78}
            height={20}
            alt="next-arrow"
          />
        </div>
      </div>

      {/* 게시글 작성 버튼 */}
      <div className="flex justify-center mb-[152px]">
        <Link
          href="/team-pr/pr-write"
          className="relative flex justify-center w-[195px] h-[49px] tablet:w-[300px] tablet:h-[62px] items-center mt-[152px] px-[24px] py-[12px] gap-[10px] box-border rounded-[20px] bg-primary h-[62px]"
        >
          <p className="text-white text-[18px] tablet:text-[32px] font-bold">
            게시글 작성하기
          </p>
          <Image
            src="/assets/icons/arrow-outward.svg"
            alt="arrow-outward"
            width={38}
            height={38}
          />
        </Link>
      </div>

      {/* 모달 */}
      <Modal isOpen={isOpen} toggle={toggle}>
        <PrModal isOpen={isOpen} toggle={toggle} />
      </Modal>
    </div>
  );
}
