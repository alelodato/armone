// src/pages/ErrorOffline.jsx
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function ErrorOffline() {
  const [online, setOnline] = useState(navigator.onLine);

  useEffect(() => {
    const handleOnline = () => setOnline(true);
    const handleOffline = () => setOnline(false);
    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);
    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  if (online) return null;

  return (
    <main className="min-h-screen flex flex-col items-center justify-center text-center 
    bg-gradient-to-b from-brand-50 to-brand-100 animate-fade px-6">
      <h1 className="text-7xl md:text-8xl font-heading text-brand-400 mb-4 drop-shadow-sm">
        Offline
      </h1>
      <p className="text-lg md:text-xl text-brand-400/80 mb-8 max-w-md leading-relaxed">
        Sembra che tu non sia connesso a Internet.  
        Controlla la connessione e ricarica la pagina.
      </p>
      <button
        onClick={() => window.location.reload()}
        className="inline-block px-8 py-3 rounded-full bg-brand-300 text-brand-50 font-cta tracking-wide 
        hover:bg-brand-400 transition"
      >
        Ricarica
      </button>
    </main>
  );
}
