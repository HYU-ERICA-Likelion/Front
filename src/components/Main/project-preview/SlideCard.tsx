import Image from "next/image";

interface SlideCardProps {
  title: string;
  generation: string;
  crewMembers: string[];
  imgUrl: string;
}

export default function SlideCard({
  title,
  generation,
  crewMembers,
  imgUrl,
}: SlideCardProps) {
  return (
    <div className="flex flex-col items-center gap-[21px] w-full h-[409px] mx-auto text-center">
      <div>
        <Image
          src={imgUrl}
          alt="carousel-image"
          width={597}
          height={364}
          className="rounded-[20px]"
          objectFit="cover"
        />
      </div>

      <div className="flex items-center gap-[8px]">
        <strong className="text-[20px] font-bold tracking-[0.005em] text-white">
          {title}
        </strong>

        <div className="flex gap-[5px]">
          <span className="text-[16px] font-medium tracking-[0.005em] text-white">
            {generation}
          </span>
          <ul className="flex gap-[2px]">
            {crewMembers.map((crew, index) => (
              <li
                className="text-[16px] font-medium tracking-[0.005em] text-white"
                key={`crew-${index}`}
              >
                {crew}
                {index < crewMembers.length - 1 && ","}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
