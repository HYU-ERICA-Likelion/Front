import { use3DRotation } from "@/hooks/use3DRotation";

interface RotatingImageProps {
  src: string;
  positionStyles: {
    top?: number;
    right?: number;
    bottom?: number;
    left?: number;
  };
  size: { width: number; height: number };
}

export default function RotatingImage({
  src,
  positionStyles,
  size,
}: RotatingImageProps) {
  const rotation = use3DRotation();

  const style = {
    backgroundImage: `url('${src}')`,
    transform: `perspective(600px) rotateX(${rotation.rotation.rotateX}deg) rotateY(${rotation.rotation.rotateY}deg)`,
    width: `${size.width}px`,
    height: `${size.height}px`,
    top: positionStyles.top ? `${positionStyles.top}px` : undefined,
    bottom: positionStyles.bottom ? `${positionStyles.bottom}px` : undefined,
    left: positionStyles.left ? `${positionStyles.left}%` : undefined,
    right: positionStyles.right ? `${positionStyles.right}%` : undefined,
  };

  return (
    <div
      ref={rotation.elementRef}
      className="img-container absolute bg-cover transition-transform duration-100 ease-out"
      style={style}
    ></div>
  );
}
