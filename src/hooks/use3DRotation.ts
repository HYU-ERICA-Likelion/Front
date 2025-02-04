import { useEffect, useState, useRef } from "react";

export function use3DRotation() {
  const [rotation, setRotation] = useState({ rotateX: 0, rotateY: 0 });
  const elementRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = elementRef.current;
    if (!container) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateY = ((x - centerX) / centerX) * 20;
      const rotateX = ((centerY - y) / centerY) * 20;

      setRotation({ rotateX, rotateY });
    };

    const handleMouseLeave = () => {
      setRotation({ rotateX: 0, rotateY: 0 });
    };

    container.addEventListener("mousemove", handleMouseMove);
    container.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      container.removeEventListener("mousemove", handleMouseMove);
      container.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return { rotation, elementRef };
}
