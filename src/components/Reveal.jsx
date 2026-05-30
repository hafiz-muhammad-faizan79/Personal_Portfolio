import { useEffect, useRef, useState } from "react";

/**
 * Reveal — production scroll-reveal with:
 *   - IntersectionObserver (fires once)
 *   - fade + translateY + blur entrance
 *   - configurable delay, duration, direction
 */
export default function Reveal({
  children,
  delay = 0,
  duration = 0.65,
  y = 28,
  blur = true,
  once = true,
  className = "",
}) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          if (once) obs.disconnect();
        } else if (!once) {
          setVisible(false);
        }
      },
      { threshold: 0.12 }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, [once]);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0px)" : `translateY(${y}px)`,
        filter: blur ? (visible ? "blur(0px)" : "blur(6px)") : undefined,
        transition: `opacity ${duration}s cubic-bezier(.22,1,.36,1) ${delay}s,
                     transform ${duration}s cubic-bezier(.22,1,.36,1) ${delay}s,
                     filter ${duration * 0.8}s ease ${delay}s`,
        willChange: "opacity, transform, filter",
      }}
    >
      {children}
    </div>
  );
}