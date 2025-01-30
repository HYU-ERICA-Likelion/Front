import Close from '@/../public/assets/icons/close.svg'
import Arrow from '@/../public/assets/icons/arrow_forward.svg'
import Image from 'next/image'
export default function ArchivingModal() {
    return (
      <div className="fixed inset-0 z-50 flex justify-center items-center w-full h-full overflow-y-auto">
        <div className="flex flex-col p-[15px_18px] w-[738px] h-[914px] bg-background rounded-[14px] gap-[16px]">
          <div className=" flex flex-row justify-between">
            <div className="text-[18px] font-semibold h-[21px] text-white/75 ">Project</div>
            <Image
              src={Close}
              alt="X"
              width={24}
              height={24}
              className="opacity-75 cursor-pointer"/>
          </div>
          <div className="width-[701px] height-[394px] relative">
            <Image 
              src={''} 
              alt="대표사진"
              width={701}
              height={394}
              className="rounded-[10px] object-cover bg-white"/>
              <div className="absolute top-1/2 -translate-y-1/2 left-[18px] flex items-center justify-center p-[12px_16px] w-[44px] h-[44px] rounded-[84px] bg-[#CCCCCC]">
                <div className="w-[12px] h-[20px] rotate-180">
                  <Image
                    src={Arrow}
                    alt="previous"
                  />
                </div>
              </div>
              <div className="absolute top-1/2 -translate-y-1/2 right-[18px] flex items-center justify-center p-[12px_16px] w-[44px] h-[44px] rounded-[84px] bg-[#CCCCCC]">
                <div className="w-[12px] h-[20px]">
                  <Image
                    src={Arrow}
                    alt="next"
                  />
                </div>
              </div>
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
                    <div className="font-semibold text-white/55 text-[14px] h-[20px]">기획/디자인</div>
                    <div className="text-[16px] font-semibold h-[22px] ">오승아</div>
                  </div>
                  <div className="flex flex-col gap-[4px]">
                    <div className="font-semibold text-white/55 text-[14px] h-[20px]">기획/디자인</div>
                    <div className="text-[16px] font-semibold h-[22px] ">오승아</div>
                  </div>

                </div>
              </div>

              <div className="p-[20px] bg-[#464242] rounded-[10px] ">               
                <div className="flex flex-col align-start w-[155px] gap-[22px]">
                  <div className="flex flex-col gap-[4px]">
                    <div className="font-semibold text-white/55 text-[14px] h-[20px]">기획/디자인</div>
                    <div className="text-[16px] font-semibold h-[22px] ">오승아</div>
                  </div>
                  <div className="flex flex-col gap-[4px]">
                    <div className="font-semibold text-white/55 text-[14px] h-[20px]">기획/디자인</div>
                    <div className="text-[16px] font-semibold h-[22px] ">오승아</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col w-[481px] gap-[7px]">
              <div className="inline-flex items-center gap-[12px] ">
                <div className="text-[24px] font-semibold">포레스트</div>
                <div className="text-[18px] font-semibold text-white/40">WEB</div>
              </div>
              <div className="text-[18px] text-white/75 h-[350px]">
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