import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";

const CAL_LINKS = {
  reformer: "armone/reformer",   // <--- sostituisci con i tuoi slug Cal.com reali
  matwork:  "armone/matwork",
  posturale:"armone/posturale",
};

const TITLES = {
  reformer: "Prenota — Pilates Reformer",
  matwork:  "Prenota — Pilates Matwork",
  posturale:"Prenota — Posturale & Mobility",
};

export default function PrenotaClasse() {
  const { slug } = useParams();
  const calLink = CAL_LINKS[slug];

  // carica lo script Cal.com una volta
  useEffect(() => {
    if (!document.querySelector('script[src="https://cal.com/embed.js"]')) {
      const s = document.createElement("script");
      s.src = "https://cal.com/embed.js";
      s.async = true;
      document.body.appendChild(s);
    }
  }, []);

  if (!calLink) {
    return (
      <main className="pt-16 md:pt-20 section">
        <div className="container text-center">
          <p className="font-body text-brand-400">Classe non trovata.</p>
          <Link to="/classi" className="underline text-brand-400">Torna alle classi</Link>
        </div>
      </main>
    );
  }

  return (
    <main className="pt-16 md:pt-20">
      {/* Hero compatta */}
      <section className="section">
        <div className="container text-center">
          <h1 className="font-heading text-brand-400 text-3xl md:text-5xl">{TITLES[slug]}</h1>
          <p className="font-body text-brand-400/80 mt-3">Seleziona data e orario. I posti sono limitati.</p>
        </div>
      </section>

      {/* Embed Cal.com */}
      <section className="section">
        <div className="container">
          <div
            className="cal-embed w-full rounded-xl border border-brand-100 shadow overflow-hidden bg-brand-50"
            data-cal-link={calLink}
            data-cal-config='{"layout":"month_view"}'
            style={{ minHeight: 720 }}
          />
          <div className="text-center mt-4">
            <a
              href={`https://cal.com/${calLink}`}
              target="_blank" rel="noreferrer"
              className="underline text-brand-400"
            >
              Apri lo scheduler in una nuova scheda
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
