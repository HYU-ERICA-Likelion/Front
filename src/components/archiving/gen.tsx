interface Props {
    selectedGen: string;
    setSelectedGen: (gen: string) => void;
  }
  
  export default function ArchivingSelectGen({
    selectedGen,
    setSelectedGen,
  }: Props) {
    return (
      <div className="flex flex-row gap-x-[16px] justify-start xl:justify-start xl:px-[122px] sm:justify-center mt-[126px]">
        {["전체", "12기", "13기"].map((gen) => (
          <div
            key={gen}
            onClick={() => setSelectedGen(gen)}
            className={`font-bold text-[20px] p-[12px_52px] border-none rounded-[505px] cursor-pointer ${
              selectedGen === gen ? "bg-[#F08314]" : "bg-[#5A5858]"
            }`}
          >
            {gen}
          </div>
        ))}
      </div>
    );
  }