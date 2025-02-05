import { useState, useEffect } from "react";

function useVisibility(selectedValue: string, delay: number = 400) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(false);

    const timeoutId = setTimeout(() => {
      setIsVisible(true);
    }, delay);

    return () => clearTimeout(timeoutId);
  }, [selectedValue, delay]);

  return { isVisible };
}

export { useVisibility };
