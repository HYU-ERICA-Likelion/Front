interface Props {
  img: string;
  role: string;
  name: string;
}

export default function Profile({ img, role, name }: Props) {
  return (
    <div className="flex flex-col items-center">
      <img src={img} className="w-[156px] h-[156px]" />
      <div className="h-[20px]" />
      <div className="text-[24px] font-semibold text-center">{role}</div>
      <div className="h-[12px]" />
      <div className="text-[36px] font-[700] text-center">{name}</div>
    </div>
  );
}
