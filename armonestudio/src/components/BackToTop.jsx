import { useEffect, useRef, useState } from "react";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);
  const ticking = useRef(false);

  useEffect(() => {
    const onScroll = () => {
      if (!ticking.current) {
        window.requestAnimationFrame(() => {
          setVisible(window.scrollY > 400);
          ticking.current = false;
        });
        ticking.current = true;
      }
    };
    onScroll(); // stato iniziale
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Torna all'inizio"
      className={[
        "fixed right-4 bottom-[calc(env(safe-area-inset-bottom,0)+1rem)] md:right-8 md:bottom-[calc(env(safe-area-inset-bottom,0)+2rem)]",
        "h-11 w-11 md:h-12 md:w-12 rounded-full",
        "bg-brand-100/90 text-brand-200 border border-brand-200/60 shadow-lg backdrop-blur",
        "hover:bg-brand-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-300",
        "transition-all duration-300",
        "z-[200]", // sopra hero/menu
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
      ].join(" ")}
    >
      {/* Chevron up */}
      <svg viewBox="0 0 24 24" className="mx-auto h-5 w-5 md:h-6 md:w-6" fill="none" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
      </svg>
    </button>
  );
}
