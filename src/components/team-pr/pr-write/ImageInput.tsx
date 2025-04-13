"use client";

import Image from "next/image";
import { useState } from "react";

interface Props {
  setSelectedImg: (selectedImg: string) => void;
}

export default function ImageInput({ setSelectedImg }: Props) {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        setSelectedImg(reader.result as string); // Base64 URL 저장
      };
      setSelectedFile(file);
    }
  };

  const handleRemoveFile = () => {
    setSelectedFile(null);
  };
  return (
    <div className="flex flex-col tablet:flex-row gap-[8px] tablet:gap-[101px] items-start tablet:items-center w-[298px] tablet:w-[528px] desktop:w-[863px]">
      <label
        htmlFor="img"
        className="text-[16px] tablet:text-[20px] font-[600] leading-[140%] tracking-[-0.1px] text-[#FFFFFF]"
      >
        이미지
      </label>
      <div className="flex items-center">
        {!selectedFile ? (
          <label
            htmlFor="img"
            className="bg-[#F08314] text-[16px] tablet:text-[20px] font-[700] leading-[140%] tracking-[-0.1px] text-[#FFFFFF] px-[17px] py-[13px] rounded-[10px] cursor-pointer w-[154px] flex items-center justify-center"
          >
            이미지 첨부
          </label>
        ) : (
          <div className="flex items-center bg-[#FFFFFF] px-[17px] py-[13px] rounded-[10px] border-[1px] border-[#D0D0D0] w-[298px] tablet:w-[375px] desktop:w-[710px] justify-between">
            <span className="text-[20px] font-[500] text-[#000000] leading-[140%] tracking-[-0.1px]">
              {selectedFile.name}
            </span>
            <button onClick={handleRemoveFile}>
              <Image
                src="/assets/icons/img-remove.svg"
                alt="닫기"
                width={14}
                height={14}
              />
            </button>
          </div>
        )}
      </div>

      {/* 숨겨진 파일 업로드 input */}
      <input
        type="file"
        id="img"
        accept="image/*"
        className="hidden"
        onChange={handleFileChange}
      />
    </div>
  );
}
