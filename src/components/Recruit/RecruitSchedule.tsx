export default function RecruitSchedule() {
  const contents = [
    {
      schedule: "2.7~2.21",
      title: "서류 모집",
    },
    {
      schedule: "2.23",
      title: "서류 합격자 발표",
    },
    {
      schedule: "2.24~2.28",
      title: "면접 진행",
    },
    {
      schedule: "3.2",
      title: "최종 합격자 발표",
    },
    {
      schedule: "3.4",
      title: "OT",
    },
  ];

  return (
    <div className="mt-[289px] flex- flex-col items-center">
      <p className="text-center text-white text-[24px] font-bold">
        13기 멋사의
      </p>
      <p className="text-center text-white text-[36px] font-bold">모집 일정</p>

      <div className="flex w-[1006px] h-[70px] items-center relative justify-between mt-[99px]">
        <div className="w-[961px] h-[18px] bg-gray6 absolute left-[23px]"></div>
        {contents.map((content, index) => {
          return (
            <div
              key={index}
              className=" w-[70px] h-[70px] p-[16px] items-center gap-[10px] relative rounded-[35px] bg-gray4"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="38"
                height="38"
                viewBox="0 0 38 38"
                fill="none"
              >
                <circle cx="19" cy="19" r="19" fill="#F08314" />
              </svg>
              <div className="flex flex-col items-center mt-[25px]">
                <p className="text-whiteTransparent70 text-center text-[20px] font-bold">
                  {content.schedule}
                </p>
                <p className="text-white text-[26px] text-center font-bold whitespace-nowrap">
                  {content.title}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
