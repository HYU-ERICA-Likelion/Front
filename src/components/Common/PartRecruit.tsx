import PmDesign from "@/../public/assets/images/pm-desing-image.svg";
import Front from "@/../public/assets/images/front-image.svg";
import Back from "@/../public/assets/images/back-image.svg";
import Image from "next/image";

export default function PartRecruit() {
  const contents = [
    {
      title: "기획 및 디자인",
      content:
        "프로젝트의 디자인을 담당하는 파트이며, 디자인 툴을 익히고 디자인 이론과 용어들로 협업에 도움이 되는 스킬을 키울 수 있어요.",
      image: PmDesign,
    },
    {
      title: "프론트엔드",
      content:
        "사용자와 가까이 있는 개발 파트로, 개발 언어를 학습하고 개발 역량을 키웁니다. 개발을 위한기초부터 심화까지 배워요.",
      image: Front,
    },
    {
      title: "백엔드",
      content:
        "눈에 보이지 않는 서버 담당하는 백엔드는 서비스의 요구사항에 맞춰 API를 개발하고 배포 및 운영을 통해 데이터를 관리해요.",
      image: Back,
    },
  ];
  return (
    <div className="flex flex-col mt-[268px]">
      <strong className="text-white text-[24px] font-bold text-center">
        13기 멋사가
      </strong>
      <strong className="text-white text-[36px] font-bold text-center">
        모집하는 파트
      </strong>
      <div className="grid grid-cols-3 mt-[67px] gap-[49px]">
        {contents.map((content, index) => {
          return (
            <div
              key={index}
              className="w-[314px] h-[421px] box box-border rounded-[20px] bg-gray4 flex flex-col items-center px-[37px] py-[44px] gap-[24px]"
            >
              <strong className="text-left text-white text-[28px] font-bold">
                {content.title}
              </strong>
              <p className="text-left text-whiteTransparent55 text-[14px]">
                {content.content}
              </p>
              <Image
                src={content.image}
                alt="파트별 이미지"
                width={222}
                height={205}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
