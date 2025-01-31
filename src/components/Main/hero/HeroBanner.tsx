export default function HeroBanner() {
  return (
    <section>
      <div className="relative w-screen h-[731px]">
        <div className="relative top-[151px] left-[50%] -translate-x-1/2 flex flex-col items-center gap-[28px]">
          <h3 className="flex justify-center items-center w-[235px] h-[53px] rounded-[4px] bg-primary text-[24px] font-bold text-white tracking-[-0.5%]">
            멋쟁이 사자처럼 13기
          </h3>
          <h2 className="flex justify-center items-center text-[48px] font-bold text-white leading-[60px] tracking-[-0.005em] text-center">
            멋쟁이 사자처럼에서 <br /> 13기 아기사자를 모집합니다!
          </h2>
        </div>
      </div>
    </section>
  );
}
