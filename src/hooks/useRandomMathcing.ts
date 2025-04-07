import { useEffect, useState } from "react";

export function useRandomMatching(
  initialRows: string[][],
  toggle: () => void,
  duration: number = 3000,
  delay: number = 1000
) {
  const [rows, setRows] = useState<string[][]>(initialRows);
  const [offsets, setOffsets] = useState([0, 0, 0]);
  const [stopped, setStopped] = useState(false);

  useEffect(() => {
    if (stopped) return;

    const interval = setInterval(() => {
      setOffsets(([o1, o2, o3]) => [o1 + 1, o2 - 1, o3 + 1]);
    }, 100);

    const stopTimeout = setTimeout(() => {
      clearInterval(interval);
      setStopped(true);

      // `delay` 뒤에 toggle() 실행
      setTimeout(() => {
        toggle();
      }, delay);
    }, duration);

    return () => {
      clearInterval(interval);
      clearTimeout(stopTimeout);
    };
  }, [stopped, toggle, duration, delay]);

  return { rows, offsets, stopped };
}
