export default function Wanted() {
  return (
    <div className="mt-[289px] flex- flex-col items-center">
      <p className="text-center text-white text-[24px] font-bold">
        13기 멋사는
      </p>
      <p className="text-center text-white text-[36px] font-bold">
        이런 분들을 원해요
      </p>
      <div className="grid grid-cols-3 flex gap-[19px] mt-[83px]">
        <div className="w-[334px] h-[216px] px-[58px] py-[75px] flex items-center justify-center bg-gray4 rounded-[20px]">
          <p className="text-center text-[24px] font-[500] text-whiteTransparent70">
            <span className="text-white font-bold">IT 창업 및 개발 분야</span>
            에
            <br />
            관심이 많으신 분!
          </p>
        </div>
        <div className="w-[334px] h-[216px] px-[27px] py-[42px] flex items-center justify-center bg-gray4 rounded-[20px]">
          <p className="text-center text-[24px] font-[500] text-whiteTransparent70">
            매주 진행되는
            <br />
            세션에 <span className="text-white font-bold">빠짐없이 출석</span>
            할 수<br />
            있으며, 1년 동안
            <br />
            <span className="text-primary font-bold">적극적으로 참여</span>할 수
            있는 분!
          </p>
        </div>
        <div className="w-[334px] h-[216px] px-[64px] py-[58px] flex items-center justify-center bg-gray4 rounded-[20px]">
          <p className="text-center text-[24px] font-[500] text-whiteTransparent70">
            자신의 역량을 키우고
            <br />
            지식을 나누고자 하는
            <br />
            <span className="text-white font-bold">열정적인 분!</span>
          </p>
        </div>
      </div>
    </div>
  );
}
