import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Controlla se l’utente ha già espresso una scelta
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      // Mostra il banner dopo un leggero delay per non essere invasivo
      setTimeout(() => setVisible(true), 1000);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem("cookie-consent", "declined");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 w-[90%] md:w-auto bg-brand-100 border border-brand-200 rounded-2xl shadow-lg p-5 md:p-6 flex flex-col md:flex-row items-center justify-between gap-4 max-w-2xl">
      <div className="text-center md:text-left">
        <p className="font-body text-brand-400 text-sm md:text-base leading-relaxed">
          Questo sito utilizza cookie tecnici per garantire il corretto funzionamento e migliorare
          l’esperienza di navigazione. Puoi leggere la nostra{" "}
          <Link to="/cookie-policy" className="underline font-medium hover:text-brand-500 transition">
            Cookie Policy
          </Link>
          .
        </p>
      </div>

      <div className="flex gap-3 justify-center md:justify-end w-full md:w-auto">
        <button
          onClick={handleDecline}
          className="px-5 py-2 rounded-full bg-brand-200 text-brand-50 text-sm font-cta hover:bg-brand-300 transition"
        >
          Rifiuta
        </button>
        <button
          onClick={handleAccept}
          className="px-5 py-2 rounded-full bg-brand-300 text-brand-50 text-sm font-cta hover:bg-brand-400 transition"
        >
          Accetta
        </button>
      </div>
    </div>
  );
}
