import Image from "next/image";

export const metadata = {
  title: "Loading...",
};

export default function Loading() {
  return (
    <div className="flex flex-col items-center w-full">
      <div className="h-[100px]" />
      <Image
        src="/assets/images/loading.png"
        alt="loading"
        className="w-[347px] h-[249px] mb-[126px]"
      />

      <div className="h-[100px]" />
    </div>
  );
}
