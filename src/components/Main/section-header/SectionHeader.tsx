export default function SectionHeader({
  subTitle,
  title,
}: {
  subTitle: string;
  title: string;
}) {
  return (
    <header className="flex flex-col items-center gap-[12px] w-full">
      <strong className=" h-[29px] tablet:text-[24px] mobile:text-[18px] font-bold text-white tracking-[-0.005em] text-center">
        {subTitle}
      </strong>
      <h3 className="h-[43px] tablet:text-[36px] mobile:text-[26px] font-bold text-white tracking-[-0.005em]">
        {title}
      </h3>
    </header>
  );
}
