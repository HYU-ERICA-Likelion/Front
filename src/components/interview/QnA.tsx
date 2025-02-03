interface Props {
  question: string;
  answer: string;
}

export default function QnA({ question, answer }: Props) {
  return (
    <div className="flex flex-col gap-[39px] w-full pl-[160px] pr-[160px]">
      <div className="flex flex-row gap-[14px] font-[600] text-[24px] justify-start max-w-[345px]">
        <div>Q.</div>
        <div>{question}</div>
      </div>
      <div className="flex flex-row justify-end">
        <div className="font-[500] text-[20px] p-[35px_69px] bg-[#474343] rounded-[40px] max-w-[830px] min-w-[610px]">
          <p className="line-clamp-15">{answer}</p>
        </div>
      </div>
    </div>
  );
}
