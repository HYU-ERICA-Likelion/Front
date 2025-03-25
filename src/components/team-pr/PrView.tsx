"use client";

import Link from "next/link";
import Image from "next/image";
import { data } from "@/constants/prview";
import useToggle from "@/hooks/useToggle";
import Modal from "../Common/Modal";
import PrModal from "./PrModal";
import { useEffect, useRef, useState } from "react";

export default function PrView() {
  const { isOpen, toggle } = useToggle();
  const scrollRef = useRef<HTMLDivElement>(null);
  const [centerIndex, setCenterIndex] = useState<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!scrollRef.current) return;

      const container = scrollRef.current;
      const scrollLeft = container.scrollLeft;
      const containerWidth = container.offsetWidth;
      const center = scrollLeft + containerWidth / 2;

      const children = Array.from(container.children);
      const closestIndex = children.reduce(
        (closest, child, index) => {
          const el = child as HTMLElement;
          const box = el.getBoundingClientRect();
          const elCenter = box.left + box.width / 2;
          const distance = Math.abs(center - (scrollLeft + elCenter));

          if (distance < closest.distance) {
            return { index, distance };
          } else {
            return closest;
          }
        },
        { index: 0, distance: Infinity }
      );

      setCenterIndex(closestIndex.index);
    };
    const ref = scrollRef.current;
    ref?.addEventListener("scroll", handleScroll);
    handleScroll(); // 초기 인식

    return () => {
      ref?.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 440; // 카드 너비 + 간격
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div>
      {/* PR 카드 */}
      <div className="relative flex justify-between items-center gap-[40px] mt-[97px] overflow-x-auto">
        <button
          onClick={() => scroll("left")}
          className="absolute left-[120px] z-10 w-[44px] h-[44px] rounded-[84px] bg-[rgba(0,0,0,0.06)] flex items-center justify-center top-[50%] -translate-y-1/2"
        >
          <Image
            src="/assets/icons/carousel-prev-arrow.svg"
            width={11.78}
            height={20}
            alt="prev-arrow"
          />
        </button>
        <div
          ref={scrollRef}
          className="flex gap-[40px] overflow-x-auto px-[60px] scroll-smooth scrollbar-hide"
          style={{
            paddingLeft: "calc(50% - 200px)", // 카드 너비 절반 (400px / 2)
          }}
        >
          {data.map((item, index) => {
            const isFlipped = index !== centerIndex;
            return (
              <div key={index} className="[perspective:1000px] cursor-pointer">
                <div
                  className={`
                    relative w-[400px] h-[387px] transition-transform duration-700
                    flip-card
                    ${isFlipped ? "rotate-y-180" : ""}
                  `}
                >
                  {/* 앞면 */}
                  <div
                    className={`absolute w-full h-full rounded-[20px] flex flex-col items-center px-[20px] py-[24px] gap-[16px] bg-[#474343] text-white backface-hidden
                  `}
                    style={{ transformStyle: "preserve-3d" }}
                    onClick={toggle}
                  >
                    <div className="w-[360px] h-[186px] bg-[#8C8C8C] rounded-[13px]" />
                    <div className="flex items-center w-[360px] gap-[20px]">
                      <p className="text-[24px] font-bold">{item.title}</p>
                      <p className="text-[20px] font-semibold text-[#918E8E]">
                        {item.category}
                      </p>
                    </div>
                    <p className="text-[16px]">{item.description}</p>
                  </div>

                  {/* 뒷면 */}
                  <div
                    className="absolute w-full h-full backface-hidden rotate-y-180 rounded-[20px] bg-[#474343] flex items-center justify-center text-gray-700 font-bold text-xl"
                    style={{ backfaceVisibility: "hidden" }}
                  ></div>
                </div>
              </div>
            );
          })}
        </div>

        <button
          onClick={() => scroll("right")}
          className="absolute right-[120px] z-10 w-[44px] h-[44px] rounded-full bg-[rgba(0,0,0,0.06)] flex items-center justify-center top-[50%] -translate-y-1/2"
        >
          <Image
            src="/assets/icons/carousel-next-arrow.svg"
            width={11.78}
            height={20}
            alt="next-arrow"
          />
        </button>
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
