export const metadata = {
  title: "Loading...",
};

export default function Loading() {
  return (
    <div className="flex flex-col items-center w-full">
      <div className="h-[100px]" />
      <img
        src="/assets/images/loading.png"
        alt="loading"
        className="w-[347px] h-[249px]"
      />
      <div className="h-[100px]" />
    </div>
  );
}
