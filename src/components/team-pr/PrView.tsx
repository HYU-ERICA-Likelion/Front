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

      {/* 모바일 게시글 작성 버튼 */}
      <div className="flex justify-center tablet:hidden">
        <Link
          href="/team-pr/pr-write"
          className="relative flex justify-center w-[212px] h-[49px] tablet:w-[300px] tablet:h-[62px] items-center mt-[60px] px-[26px] tablet:px-[24px] py-[12px] gap-[10px] box-border rounded-[20px] bg-primary h-[62px]"
        >
          <p className="text-white text-[20px] tablet:text-[32px] font-bold tracking-[-0.1px]">
            게시글 작성하기
          </p>
          <Image
            src="/assets/icons/arrow-outward.svg"
            alt="arrow-outward"
            width={38}
            height={38}
            className="tablet:w-[38px] tablet:h-[38px] w-[25px] h-[25px]"
          />
        </Link>
      </div>


      {/* PR 카드 */}
      <div className="relative flex justify-between items-center gap-[40px] mt-[97px] overflow-x-auto mb-[152px]">
        <button
          onClick={() => scroll("left")}
          className="hidden tablet:flex absolute left-[22px] tablet:left-[120px] z-10 w-[44px] h-[44px] rounded-[84px] bg-[rgba(0,0,0,0.06)] flex items-center justify-center top-[50%] -translate-y-1/2"
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
          className="flex  tablet:gap-[40px] overflow-x-auto px-[60px] scroll-smooth scrollbar-hide"
          style={{
            paddingLeft: "calc(50% - 200px)",
            paddingRight: "calc(50% - 200px)",
          }}
        >
          {data.map((item, index) => {
            const isFlipped = index !== centerIndex;
            const backImage = ["/assets/images/card_back_front.svg",
              "/assets/images/card_back_back.svg",
              "/assets/images/card_back_design.svg",]
            const backgroundImage = backImage[index % backImage.length]
            return (
              <div key={index} className="[perspective:1000px] cursor-pointer">
                <div
                  className={`
                    relative flex w-[322px] h-[258px] justify-center tablet:w-[400px] tablet:h-[387px] transition-transform duration-700
                    flip-card
                    ${isFlipped ? "rotate-y-180" : ""}
                  `}
                >
                  {/* 앞면 */}
                  <div
                    className={`absolute w-[322px] h-[258px] tablet:w-[400px] tablet:h-[387px] rounded-[20px] flex flex-col items-center px-[16px] tablet:px-[20px] py-[15px] tablet:py-[24px] gap-[0px] tablet:gap-[16px] bg-[#474343] text-white backface-hidden
                  `}
                    style={{ transformStyle: "preserve-3d" }}
                    onClick={toggle}
                  >
                    <div className="w-[288px] h-[144px] tablet:w-[360px] tablet:h-[186px] bg-[#8C8C8C] rounded-[13px]" />
                    <div className="flex items-center w-[288px] tablet:w-[360px] gap-[11px] tablet:gap-[20px]  h-[24px] tablet:h-[30px] mt-[15px] tablet:mt-0">
                      <p className="text-[20px] tablet:text-[24px] font-bold">{item.title}</p>
                      <p className="text-[12px] tablet:text-[20px] font-semibold text-[#918E8E]">
                        {item.category}
                      </p>
                    </div>
                    <p className="text-[14px] tablet:text-[16px] line-clamp-2 tablet:line-clamp-4 mt-[7px] tablet:mt-0">{item.description}</p>
                  </div>

                  {/* 뒷면 */}
                  <div
                    className="tablet:block absolute w-[322px] h-[258px] tablet:w-full tablet:h-full backface-hidden rotate-y-180 rounded-[20px] bg-[#474343] flex items-center justify-center text-gray-700 font-bold text-xl"
                    style={{ backfaceVisibility: "hidden" }}
                  >
                    <Image
                      src={backgroundImage}
                      width={400}
                      height={364}
                      alt="card-back"
                      className="w-[322px] h-[258px] tablet:w-[400px] tablet:h-[387px]"
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <button
          onClick={() => scroll("right")}
          className="hidden tablet:flex absolute right-[120px] z-10 w-[44px] h-[44px] rounded-full bg-[rgba(0,0,0,0.06)] flex items-center justify-center top-[50%] -translate-y-1/2"
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
      <div className="flex justify-center mb-[152px] hidden tablet:flex">
        <Link
          href="/team-pr/pr-write"
          className="relative flex justify-center w-[212px] h-[49px] tablet:w-[300px] tablet:h-[62px] items-center mt-[152px] px-[26px] tablet:px-[24px] py-[12px] gap-[10px] box-border rounded-[20px] bg-primary h-[62px]"
        >
          <p className="text-white text-[20px] tablet:text-[32px] font-bold tracking-[-0.1px]">
            게시글 작성하기
          </p>
          <Image
            src="/assets/icons/arrow-outward.svg"
            alt="arrow-outward"
            width={38}
            height={38}
            className="tablet:w-[38px] tablet:h-[38px] w-[25px] h-[25px]"
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
