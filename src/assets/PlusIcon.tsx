import clsx from "clsx";

interface PlutIconProps {
  width?: number;
  height?: number;
  fill?: string;
}

/**
 * 플러스 아이콘 컴포넌트
 *
 * 이 컴포넌트는 버튼 형태로 플러스(+) 아이콘을 렌더링합니다.
 * `svgr`처럼 사용 가능하며, 다양한 속성을 통해 크기, 색상 등을 커스터마이징할 수 있습니다.
 *
 * @param {number} [width=14] - 가로 길이 (기본값: 14px)
 * @param {number} [height=2] - 세로 길이 (기본값: 2px)
 * @param {string} [fill] - 아이콘의 색상 (CSS 색상 값)
 * ß
 * @example
 * ```tsx
 * <PlusIcon width={20} height={3} fill="orange" />
 * ```
 */

export default function PlusIcon({
  width = 14,
  height = 2,
  fill = "white",
}: PlutIconProps) {
  return (
    // <div className="relative">
    //   <div
    //     className={clsx(
    //       "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-[100px]",
    //       `w-[${width}px] h-[${height}px] bg-${fill}`
    //     )}
    //   />
    //   <div
    //     className={clsx(
    //       "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-[100px] rotate-90",
    //       `w-[${width}px] h-[${height}px] bg-${fill}`
    //     )}
    //   />
    // </div>
    <div className="relative">
      <div
        style={{
          width: `${width}px`,
          height: `${height}px`,
          backgroundColor: fill,
        }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-[100px]"
      />
      <div
        style={{
          width: `${width}px`,
          height: `${height}px`,
          backgroundColor: fill,
        }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-[100px] rotate-90"
      />
    </div>
  );
}
