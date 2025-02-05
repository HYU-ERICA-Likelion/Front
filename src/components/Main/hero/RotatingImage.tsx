import { use3DRotation } from "@/hooks/use3DRotation";

interface RotatingImageProps {
  src: string;
  size: { width: number; height: number };
}

export default function RotatingImage({ src, size }: RotatingImageProps) {
  const rotation = use3DRotation();

  const style = {
    transform: `perspective(600px) rotateX(${rotation.rotation.rotateX}deg) rotateY(${rotation.rotation.rotateY}deg)`,
    width: `${size.width}px`,
    height: `${size.height}px`,
  };

  return (
    <div
      ref={rotation.elementRef}
      className="img-container absolute bg-cover transition-transform duration-100 ease-out"
      style={style}
    >
      <img
        src={src}
        className="desktop:scale-100 tablet:scale-[0.7] mobile:scale-[0.46]"
        alt="2D-image"
      />
    </div>
  );
}
