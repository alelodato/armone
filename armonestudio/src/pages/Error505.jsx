import { Link } from "react-router-dom";

export default function Error500() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center text-center 
    bg-gradient-to-b from-brand-50 to-brand-100 animate-fade px-6">
      <h1 className="text-8xl md:text-9xl font-heading text-brand-400 mb-4 drop-shadow-sm">
        500
      </h1>
      <p className="text-lg md:text-xl text-brand-400/80 mb-8 max-w-md leading-relaxed">
        Qualcosa è andato storto. Stiamo lavorando per risolvere il problema.
      </p>
      <Link
        to="/"
        className="inline-block px-8 py-3 rounded-full bg-brand-300 text-brand-50 font-cta tracking-wide 
        hover:bg-brand-400 transition"
      >
        Torna alla Home
      </Link>
    </main>
  );
}
