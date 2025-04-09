import { useEffect, useState } from "react";

export function useRandomMatching() {
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
    }, 3000);

    return () => {
      clearInterval(interval);
      clearTimeout(stopTimeout);
    };
  }, [stopped]);

  return { offsets, stopped };
}
