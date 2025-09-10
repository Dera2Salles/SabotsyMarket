import { useRef, useEffect, useState } from "react";

interface UseIntersectionObserverOptions {
  threshold?: number;
  rootMargin?: string;
  enabled?: boolean;
}

export const useIntersection = (
  options: UseIntersectionObserverOptions = {}
) => {
  const ref = useRef<HTMLDivElement>(null);
  const { threshold = 0.1, rootMargin = "0px", enabled = true } = options;
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    if (!ref.current || !enabled) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries[0].isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(ref.current);

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [threshold, rootMargin, enabled]);

  return { ref, isVisible };
};
