interface Props {
  designAppNum: number;
  setDesignAppNum: (value: number) => void;
  frontAppNum: number;
  setFrontAppNum: (value: number) => void;
  backAppNum: number;
  setBackAppNum: (value: number) => void;
}

export default function PartInput({
  designAppNum,
  setDesignAppNum,
  frontAppNum,
  setFrontAppNum,
  backAppNum,
  setBackAppNum,
}: Props) {
  return (
    <div className="flex gap-[79px] items-center tablet:w-[528px] desktop:w-[863px] h-[188px]">
      <p className="hidden tablet:block w-[91px] text-[20px] font-[600] leading-[140%] tracking-[-0.1px] text-[#FFFFFF]">
        구하는 파트
      </p>
      <div className="w-[294px] flex flex-col gap-[13px]">
        {/* 기획&디자인 */}
        <div className="w-[239px] h-[54px] flex gap-[56px] tablet:gap-[54px] items-center">
          <label
            htmlFor="designAppNum"
            className="text-[16px] tablet:text-[20px] font-[600] leading-[140%] tracking-[-0.1px] text-[#FFFFFF]"
          >
            기획&디자인
          </label>
          <div className="flex gap-[8px] items-center">
            <input
              type="text"
              id="designAppNum"
              value={designAppNum}
              placeholder="0"
              onChange={(e) => {
                const value = e.target.value;
                if (/^[0-9]*$/.test(value)) {
                  setDesignAppNum(value === "" ? 0 : Number(value));
                }
              }}
              className="focus:text-[#474343] placehodler:text-[#9F9E9D] placeholder:text-[20px] placeholder:font-[500] leading-[140%] tracking-[-0.1px] text-[#000] w-[60px] h-[54px] py-[13px] pl-[17px] pr-[20px] rounded-[10px] border-[1px] border-[#D0D0D0] bg-[#FFFFFF] flex justify-center items-center gap-[33px]"
            />
            <span className="text-[16px] tablet:text-[20px] font-[500] leading-[140%] tracking-[-0.1px] text-[#FFFFFF]">
              명
            </span>
          </div>
        </div>

        {/* 프론트 */}
        <div className="w-[239px] h-[54px] flex gap-[66px] tablet:gap-[66px] items-center">
          <label
            htmlFor="frontAppNum"
            className="text-[16px] tablet:text-[20px] font-[600] leading-[140%] tracking-[-0.1px] text-[#FFFFFF]"
          >
            프론트엔드
          </label>
          <div className="flex gap-[8px] items-center">
            <input
              type="text"
              id="frontAppNum"
              value={frontAppNum}
              placeholder="0"
              onChange={(e) => {
                const value = e.target.value;
                if (/^[0-9]*$/.test(value)) {
                  setFrontAppNum(value === "" ? 0 : Number(value));
                }
              }}
              className="focus:text-[#474343] placehodler:text-[#9F9E9D] placeholder:text-[20px] placeholder:font-[500] leading-[140%] tracking-[-0.1px] text-[#000] w-[60px] h-[54px] py-[13px] pl-[17px] pr-[20px] rounded-[10px] border-[1px] border-[#D0D0D0] bg-[#FFFFFF] flex justify-center items-center gap-[33px] appearance-none"
            />
            <span className="text-[16px] tablet:text-[20px] font-[500] leading-[140%] tracking-[-0.1px] text-[#FFFFFF]">
              명
            </span>
          </div>
        </div>

        {/* 백 */}
        <div className="w-[239px] h-[54px] flex gap-[93px] tablet:gap-[101px] items-center">
          <label
            htmlFor="backAppNum"
            className="text-[16px] tablet:text-[20px] font-[600] leading-[140%] tracking-[-0.1px] text-[#FFFFFF]"
          >
            백엔드
          </label>
          <div className="flex gap-[8px] items-center">
            <input
              type="text"
              id="backAppNum"
              value={backAppNum}
              placeholder="0"
              onChange={(e) => {
                const value = e.target.value;
                if (/^[0-9]*$/.test(value)) {
                  setBackAppNum(value === "" ? 0 : Number(value));
                }
              }}
              className="focus:text-[#474343] placehodler:text-[#9F9E9D] placeholder:text-[20px] placeholder:font-[500] leading-[140%] tracking-[-0.1px] text-[#000] w-[60px] h-[54px] py-[13px] pl-[17px] pr-[20px] rounded-[10px] border-[1px] border-[#D0D0D0] bg-[#FFFFFF] flex justify-center items-center gap-[33px]"
            />
            <span className="text-[16px] tablet:text-[20px] font-[500] leading-[140%] tracking-[-0.1px] text-[#FFFFFF]">
              명
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
