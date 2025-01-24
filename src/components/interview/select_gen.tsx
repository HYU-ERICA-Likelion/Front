interface Props {
  selectedGen: string;
  setSelectedGen: (gen: string) => void;
}

export default function InterviewSelectGen({
  selectedGen,
  setSelectedGen,
}: Props) {
  return (
    <div className="flex flex-row gap-x-[16px] justify-start xl:justify-start sm:justify-center">
      {["12", "13"].map((gen) => (
        <div
          key={gen}
          onClick={() => setSelectedGen(gen)}
          className={`font-bold text-[20px] p-[12px_52px] border-none rounded-[505px] cursor-pointer ${
            selectedGen === gen ? "bg-[#F08314]" : "bg-[#5A5858]"
          }`}
        >
          {gen}기
        </div>
      ))}
    </div>
  );
}
