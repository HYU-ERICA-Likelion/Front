export interface AboutListElementProps {
    title: string;
    list: string[];
};

export default function AboutListElement({title, list}: AboutListElementProps) {
    return (
        <div className="flex justify-between itmes-center mb-2.5">
            <span className="flex items-start text-[24px] font-medium pretendard text-whiteTransparent55 w-96 pr-1 h-8">
                {title}
            </span>
            <div className="flex-col items-center justify-start">
                {list.map((name, index) => (
                    <span key={index} className="flex itmes-start text-[24px] font-semibold pretendard text-white mb-1.5 h-8 w-40">{name}</span>
                    ))
                }
            </div>
        </div>
    );
}