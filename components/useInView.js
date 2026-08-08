import { useEffect, useRef, useState } from "react";

export default function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    // Fallback if IntersectionObserver is unavailable
    if (typeof IntersectionObserver === "undefined") {
      setInView(true);
      return;
    }

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          obs.disconnect();
        }
      },
      { threshold, rootMargin: "0px 0px -5% 0px" }
    );
    obs.observe(node);

    // Ensure already-visible sections (e.g. hero) become visible immediately
    const rect = node.getBoundingClientRect();
    const visible =
      rect.top < window.innerHeight && rect.bottom > 0;
    if (visible) setInView(true);

    return () => obs.disconnect();
  }, [threshold]);

  return { ref, inView };
}
