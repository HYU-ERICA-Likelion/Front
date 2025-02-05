interface Props {
  question: string;
  answer: string;
}

export default function QnA({ question, answer }: Props) {
  return (
    <div className="flex flex-col gap-[60px] ml-[30px] mr-[30px] tablet:ml-[8%] tablet:mr-[8%] desktop:ml-[16%] desktop:mr-[16%]">
      <div className="flex flex-row gap-[14px] font-[600] text-[20px] tablet:text-[22px] desktop:text-[24px] justify-start max-w-[290px] tablet:max-w-[320px] desktop:max-w-[360px]">
        <div>Q.</div>
        <div>{question}</div>
      </div>
      <div className="flex flex-row justify-end">
        <div className="font-[500] text-[16px] tablet:text-[18px] desktop:text-[20px] p-[20px] tablet:p-[35px_69px] desktop:p-[35px_69px] bg-[#474343] rounded-[40px_40px_0_40px] max-w-[300px] tablet:max-w-[616px] desktop:max-w-[794px]">
          <p className="">{answer}</p>
        </div>
      </div>
    </div>
  );
}
