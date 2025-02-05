import Image, { StaticImageData } from "next/image";

interface PartRecruitProps {
  contents: {
    title: string;
    content: string;
    image: StaticImageData;
  }[];
}

export default function PartRecruit({ contents }: PartRecruitProps) {
  return (
    <div className="flex flex-col mt-[112px] tablet:mt-[268px]">
      <strong className="text-white text-[18px] tablet:text-[24px] font-bold text-center">
        13기 멋사가
      </strong>
      <strong className="text-white text-[26px] tablet:text-[36px] font-bold text-center">
        모집하는 파트
      </strong>
      <div className="grid grid-cols-1 desktop:grid-cols-3 mt-[67px] gap-[49px]">
        {contents.map((content, index) => {
          return (
            <div
              key={index}
              className="tablet:flex w-[314px] h-[421px] tablet:h-[168px] desktop:h-[421px] tablet:w-[549px] desktop:w-[314px] box box-border rounded-[20px] bg-gray4 flex flex-col tablet:flex-row desktop:flex-col items-center px-[37px] py-[44px] gap-[24px]"
            >
              <div>
                <strong className="text-left text-white text-[28px] font-bold">
                  {content.title}
                </strong>
                <p className="text-left text-whiteTransparent55 text-[14px] mt-[16px]">
                  {content.content}
                </p>
              </div>
              <Image
                src={content.image}
                alt="파트별 이미지"
                width={222}
                height={205}
                className="tablet:w-[121px] desktop:w-[222px]"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
