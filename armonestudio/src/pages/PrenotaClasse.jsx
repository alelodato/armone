import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import Cal, { getCalApi } from "@calcom/embed-react";

const CAL_LINKS = {
  reformer:  "alessio-l-lcxiyo/reformer",
  matwork:   "alessio-l-lcxiyo/matwork",
  posturale: "alessio-l-lcxiyo/posturale",
};

const TITLES = {
  reformer:  "Prenota — Pilates Reformer",
  matwork:   "Prenota — Pilates Matwork",
  posturale: "Prenota — Posturale & Mobility",
};

export default function PrenotaClasse() {
  const { slug } = useParams();
  const calLink = CAL_LINKS[slug];

  const [name, setName]   = useState("");
  const [email, setEmail] = useState("");

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
          <h1 className="font-heading text-brand-400 text-3xl md:text-5xl">
            {TITLES[slug]}
          </h1>
          <p className="font-body text-brand-400/80 mt-3">
            Seleziona data e orario. I posti sono limitati.
          </p>
        </div>
      </section>
      {/* Embed Cal.com */}
      <section className="section">
        <div className="container">
          <Cal
            calLink={calLink}
            style={{ width: "100%", height: "760px" }}
            // Config del widget (documentata da Cal.com)
            config={{
              layout: "month_view",
              theme: "light",
              primaryColor: "97C68A",
              locale: "it",
              name,
              email,
              hideEventTypeDetails: false,
              hideLandingPageDetails: true,
            }}
          />

          {/* Fallback link se l’embed non carica */}
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
