interface Props {
  question: string;
  answer: string;
}

export default function QnA({ question, answer }: Props) {
  return (
    <div className="flex flex-col gap-[39px] w-full pl-[160px] pr-[160px]">
      <div className="flex flex-row gap-[14px] font-[600] text-[24px] justify-start max-w-[345px]">
        <div>Q.</div>
        <div>questiodddn {question}?</div>
      </div>
      <div className="flex flex-row justify-end">
        <div className="font-[500] text-[20px] p-[35px_69px] bg-[#474343] rounded-[40px] max-w-[830px] min-w-[610px]">
          <p className="line-clamp-15">
            저또한 지원하기 전까지 html도 잘 모르는 웹에 대해 문외한인 상태였고
            멋사에 들어와서 전부 배워서 이렇게 대표까지 하게 되었습니다. 자신이
            부족해서 13기 지원을 망설이신다면 걱정없이 지원하셔도 됩니다.
            운영진들이 친절히 알려드리고 설명해줄거에요.또한, 멋사에 들어오시면
            이전까지는 다른학교 사람들이나 다양한 분야의 사람들과 협업할 기회가
            적었는데 들어오면서 다양한 사람들을 접할 기회가 많아지고 프로젝트
            진행해볼 기회가 많아지면서 많은 경험을 하게 되었습니다. 프로젝트
            경험이나 다양한 사람들을 만나고 싶다면 정말 좋은 기회인 것 같습니다.
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
}
