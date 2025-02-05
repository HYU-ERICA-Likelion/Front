interface Props {
  selectedGen: string;
  setSelectedGen: (gen: string) => void;
}

export default function ArchivingSelectGen({
  selectedGen,
  setSelectedGen,
}: Props) {
  return (
    <div
      className="flex flex-row justify-center desktop:justify-start w-[1025.95px] gap-x-[16px] mt-[68px]
    tablet:mt-[126px]"
    >
      {["전체", "12기", "13기"].map((gen) => (
        <div
          key={gen}
          onClick={() => setSelectedGen(gen)}
          className={`font-bold w-[68px] text-[12px] tablet:text-[20px] flex justify-center h-[34px] tablet:h-[48px] tablet:w-[144px] items-center text-[12px] tablet:px-[12px] tablet:py-52px px-[10px] py-[22px] border-none rounded-[505px] cursor-pointer ${
            selectedGen === gen ? "bg-[#F08314]" : "bg-[#5A5858]"
          }`}
        >
          {gen}
        </div>
      ))}
    </div>
  );
}
