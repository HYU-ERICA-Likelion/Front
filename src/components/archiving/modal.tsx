"use client";

interface Project { 
  id: number;
  images: string[];
  title: string;
  description: string;
  type: string;
  gen: number;
}

interface ArchivingModalProps { 
  project: Project;
  onClose: () => void;
}

import Close from '@/../public/assets/icons/close.svg'
import Arrow from '@/../public/assets/icons/arrow_forward.svg'
import Image from 'next/image'
import {useState} from 'react';


export default function ArchivingModal({ project, onClose }: ArchivingModalProps) {

  const [currentSlide, setCurrentSlide] = useState<number>(0);

    const handlePrevSlide = () => {
      const newSlide = currentSlide === 0 ? project.images.length - 1 : currentSlide - 1;
      setCurrentSlide(newSlide);
    };

    const handleNextSlide = () => {
      const newSlide = currentSlide === project.images.length - 1 ? 0 : currentSlide + 1;
      setCurrentSlide(newSlide);
    };

    return (
      <div onClick={onClose} className="z-50 flex justify-center items-center w-full h-full overflow-y-auto">
        <div onClick={(e)=> e.stopPropagation()} className="flex flex-col p-[15px_18px] w-[738px] h-[914px] bg-background rounded-[14px] gap-[16px]">
          <div className=" flex flex-row justify-between">
            <div className="text-[18px] font-semibold h-[21px] text-white/75 ">Project</div>
            <Image
              src={Close}
              alt="X"
              width={24}
              height={24}
              className="opacity-75 cursor-pointer"
              onClick={onClose}/>
          </div>

          <div className="w-[701px] h-[394px] relative">

            <Image 
              src={project.images[currentSlide]}
              alt={`프로젝트 이미지 ${currentSlide + 1}`}
              width={701}
              height={394}
              className="h-[394px] shrink-0 rounded-[10px] object-cover bg-white"/>
              
              <button 
                onClick={handlePrevSlide}
                className={`absolute top-1/2 -translate-y-1/2 left-[18px] flex items-center justify-center p-[12px_16px] w-[44px] h-[44px] rounded-[84px] bg-black/20 hover:bg-black/30 ${
                  currentSlide === 0 ? 'opacity-[0.5] cursor-not-allowed' : 'opacity-100'
                }`}
                disabled={currentSlide === 0}
              >
                <div className="w-[12px] h-[20px] rotate-180">
                  <Image
                    src={Arrow}
                    alt="previous"
                  />
                </div>
              </button>
              <button 
                onClick={handleNextSlide}
                className={`absolute top-1/2 -translate-y-1/2 right-[18px] flex items-center justify-center p-[12px_16px] w-[44px] h-[44px] rounded-[84px] bg-black/20 hover:bg-black/30 ${
                  currentSlide === project.images.length - 1 ? 'opacity-[0.5] cursor-not-allowed' : 'opacity-100'
                }`}
                disabled={currentSlide === project.images.length - 1}
              >
                <div className="w-[12px] h-[20px]">
                  <Image
                    src={Arrow}
                    alt="next"
                  />
                </div>
              </button>
          </div>
          <div className="flex flex-row gap-[26px]">
            <div className="flex flex-col w-[195px] flex-start justify-center gap-[20px]">
              <div className="inline-flex flex-col h-[256px] gap-[9px] p-[20px] bg-[#464242] rounded-[10px] ">
                <div className="align-center gap-[40px] text-[18px] font-semibold h-[25px]">Team 3</div>
                <div className="flex flex-col align-start w-[155px] gap-[22px]">

                  <div className="flex flex-col gap-[4px]">
                    <div className="font-semibold text-white/55 text-[14px] h-[20px]">기획/디자인</div>
                    <div className="text-[16px] font-semibold h-[22px] ">오승아</div>
                  </div>
                  <div className="flex flex-col gap-[4px]">
                    <div className="font-semibold text-white/55 text-[14px] h-[20px]">프론트엔드</div>
                    <div className="text-[16px] font-semibold h-[22px] ">이종원, 김선후, 김아영</div>
                  </div>
                  <div className="flex flex-col gap-[4px]">
                    <div className="font-semibold text-white/55 text-[14px] h-[20px]">백엔드</div>
                    <div className="text-[16px] font-semibold h-[22px] ">송재현, 이수민</div>
                  </div>

                </div>
              </div>

              <div className="p-[20px] bg-[#464242] rounded-[10px] ">               
                <div className="flex flex-col align-start w-[155px] gap-[22px]">
                  <div className="flex flex-col gap-[4px]">
                    <div className="font-semibold text-white/55 text-[14px] h-[20px]">프로젝트 기간</div>
                    <div className="text-[16px] font-semibold h-[22px] ">2024. 07~2024. 08</div>
                  </div>
                  <div className="flex flex-col gap-[4px]">
                    <div className="font-semibold text-white/55 text-[14px] h-[20px]">프로젝트 링크</div>
                    <div className="text-[16px] font-semibold h-[22px] ">-</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col w-[481px] gap-[7px]">
              <div className="inline-flex items-center gap-[12px]">
                <div className="text-[24px] font-semibold">{project.title}</div>
                <div className="text-[18px] font-semibold text-white/40">{project.type}</div>
              </div>
              <div className="text-[18px] text-white/75">
                Z세대, 웰니스 중에서도 정신건강에 관심이 높아졌는데요, 하지만, Z세대의 정신건강 어떻게 채워야 할까요?

                포레스트는 힐링 이미지를 통한 테라피와 Z세대의 성향에 맞춘 유쾌한 웹사이트 Therapy입니다.

                Therapy - 미술관에 들어온 듯, 갤러리 테라피
                Creation - 크리에이터이자 유저가 이미지를 생산 후에 굿즈로 재탄생
                Joy - MZ 타겟을 위한 이미지 콘테스트


                당신의 편안한
                쉼을 위해, 포레스트.
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }