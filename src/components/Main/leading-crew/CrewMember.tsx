import { useVisibility } from "@/hooks/useVisibility";
import Image from "next/image";

interface CrewMemberProps {
  member: { generation: string; role: string; name: string; imgUrl: string };
  selectedValue: string;
}

export default function CrewMember({ member, selectedValue }: CrewMemberProps) {
  const { isVisible } = useVisibility(selectedValue, 150);

  return (
    <div
      className={`flex flex-col tablet:gap-[12px] mobile:gap-[8px] transition-all duration-1000 ease-in-out
    ${isVisible ? "opacity-100" : "opacity-0"}
    `}
    >
      <Image
        src={member.imgUrl}
        alt={`leading-crew-${member.name}`}
        width={100}
        height={100}
        quality={100}
        className="rounded-[8px]"
      />

      <div>
        <p>{member.role}</p>
        <strong>{member.name}</strong>
      </div>
    </div>
  );
}
