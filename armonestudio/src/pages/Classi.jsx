// src/pages/Classes.jsx
import { Link } from "react-router-dom";

const CLASSES = [
  {
    slug: "reformer",
    title: "Pilates Reformer",
    level: "Tutti i livelli",
    duration: "55 min",
    image: "/assets/Reformer.webp",
    desc:
      "Lezione su Reformer per migliorare forza, allineamento e controllo. Il carrello e le molle permettono una progressione dolce ma efficace, adatta sia a principianti che avanzati.",
    benefits: [
      "Postura ed allineamento",
      "Stabilità del core",
      "Tonicità e controllo"
    ],
  },
  {
    slug: "matwork",
    title: "Pilates Matwork",
    level: "Base • Intermedio",
    duration: "50 min",
    image: "/assets/Matwork.webp",
    desc:
      "Sequenze al tappetino con piccoli attrezzi (ring, soft ball, elastici). Focus su respirazione, mobilità e precisione del gesto, per costruire consapevolezza e fluidità.",
    benefits: [
      "Mobilità articolare",
      "Consapevolezza del respiro",
      "Forza funzionale"
    ],
  },
  {
    slug: "posturale",
    title: "Posturale & Mobility",
    level: "Tutti i livelli",
    duration: "45–50 min",
    image: "/assets/Posturale.webp",
    desc:
      "Sessione mirata a decomprimere, allungare e riequilibrare. Ideale per chi sta molte ore seduto o avverte rigidità a schiena, anche e spalle.",
    benefits: [
      "Decompressione e allungamento",
      "Prevenzione dolori ricorrenti",
      "Benessere quotidiano"
    ],
  },
];

export default function Classes() {
  return (
    <main className="pt-16 md:pt-20">
      {/* Hero / Intro */}
      <section id="classi" className="section">
        <div className="container text-center">
          <h1 className="font-heading text-brand-400 text-4xl md:text-5xl drop-shadow-sm">
            Le nostre classi
          </h1>
          <p className="font-body text-brand-400/90 text-base md:text-lg mt-4 max-w-2xl mx-auto">
            Programmi progressivi e personalizzati per ritrovare equilibrio, forza
            e fluidità. Scegli la classe più adatta al tuo momento.
          </p>
        </div>
      </section>

      {/* Cards delle classi */}
      <section className="section">
        <div className="container space-y-12">
          {CLASSES.map((c, i) => (
            <article
              key={c.slug}
              className={`grid gap-6 md:grid-cols-2 items-stretch`}
            >
              {/* Immagine (alterno ordine su desktop) */}
              <div
                className={`relative rounded-xl overflow-hidden border border-brand-100 shadow
                ${i % 2 === 1 ? "md:order-2" : ""}`}
              >
                <img
                  src={c.image}
                  alt={c.title}
                  className="w-full h-full max-h-[420px] object-cover"
                  loading="lazy"
                />
                {/* Etichetta in alto a sx */}
                <span className="absolute top-3 left-3 bg-brand-200/90 text-brand-50 font-heading text-sm px-3 py-1 rounded">
                  {c.duration}
                </span>
              </div>

              {/* Contenuto */}
              <div
                className={`
                  bg-brand-100 rounded-xl p-6 md:p-8 border border-brand-100
                  flex flex-col
                  ${i % 2 === 1 ? "md:order-1" : ""}
                `}
              >
                <h2 className="font-heading text-brand-400 text-2xl md:text-3xl mb-2">
                  {c.title}
                </h2>
                <p className="font-body text-brand-400/80 text-sm md:text-base mb-4">
                  {c.level}
                </p>

                <p className="font-body text-brand-400 leading-relaxed">
                  {c.desc}
                </p>

                {/* Benefici */}
                <ul className="font-body text-brand-400/90 mt-5 space-y-2 list-disc pl-5">
                  {c.benefits.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>

                {/* CTA */}
                <div className="mt-6 flex gap-3">
                  <Link
                    to={`/prenota?classe=${encodeURIComponent(c.slug)}`}
                    className="inline-flex items-center rounded-full px-5 py-3 bg-brand-300 text-brand-50 font-cta tracking-wide uppercase text-sm hover:opacity-90 transition"
                  >
                    Prenota ora
                  </Link>

                  <a
                    href="#contatti"
                    className="inline-flex items-center rounded-full px-5 py-3 border border-brand-300/50 bg-brand-50 text-brand-400 font-body hover:bg-brand-100 transition"
                  >
                    Richiedi informazioni
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Paragrafo di chiusura */}
      <section className="section">
        <div className="container">
          <p className="font-body text-brand-400 leading-relaxed text-center max-w-3xl mx-auto">
            Ogni percorso è pensato per essere sostenibile e personalizzato.
            Se hai dubbi su quale classe scegliere, scrivici: ti aiutiamo a comporre
            il programma più adatto ai tuoi obiettivi e al tuo livello.
          </p>
        </div>
      </section>
    </main>
  );
}
