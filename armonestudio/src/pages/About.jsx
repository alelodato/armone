// src/pages/About.jsx
export default function About() {
  return (
    <main className="pt-16 md:pt-20">
      {/* Hero breve */}
      <section className="section">
        <div className="container text-center">
          <h1 className="font-heading text-brand-400 text-4xl md:text-5xl drop-shadow-sm">
            Chi Siamo
          </h1>
          <p className="font-body text-brand-400/90 text-base md:text-lg mt-4 max-w-2xl mx-auto">
            Armonē Studio è uno spazio dedicato al benessere consapevole: pilates,
            postura, respiro e movimento in armonia.
          </p>
        </div>
      </section>

      {/* Intro + Info pratiche */}
      <section className="section">
        <div className="container grid gap-10 md:grid-cols-3 items-start">
          {/* Testo */}
          <article className="md:col-span-2 bg-brand-100 rounded-xl p-6 md:p-8">
            <h2 className="font-heading text-brand-400 text-2xl md:text-3xl mb-4">
              La nostra storia
            </h2>
            <p className="font-body text-brand-400 leading-relaxed">
              Nato a Roma, Armonē Studio è stato fondato con un’idea semplice:
              riportare equilibrio tra corpo e mente attraverso un approccio
              contemporaneo al Pilates. Ogni lezione è guidata da insegnanti
              certificati e attenti, per aiutarti a migliorare postura, forza e
              serenità interiore.
            </p>

            <h3 className="font-heading text-brand-400 text-xl md:text-2xl mt-8 mb-3">
              Valori
            </h3>
            <ul className="font-body text-brand-400/90 space-y-2 pl-5 list-disc">
              <li>Accoglienza e cura della persona</li>
              <li>Progressione dolce e sostenibile</li>
              <li>Consapevolezza del movimento e del respiro</li>
              <li>Qualità didattica e attenzione ai dettagli</li>
            </ul>

            <h3 className="font-heading text-brand-400 text-xl md:text-2xl mt-8 mb-3">
              Missione
            </h3>
            <p className="font-body text-brand-400 leading-relaxed">
              Offrire un ambiente intimo e luminoso dove ogni persona possa
              ritrovare il proprio ritmo naturale, migliorando equilibrio,
              flessibilità e tonicità con percorsi personalizzati.
            </p>
          </article>

          {/* Scheda info */}
          <aside className="bg-brand-50 rounded-xl p-6 border border-brand-100">
            <h3 className="font-heading text-brand-400 text-xl mb-4">Info pratiche</h3>
            <dl className="font-body text-brand-400/90 space-y-3">
              <div>
                <dt className="text-sm uppercase tracking-wide">Location</dt>
                <dd className="text-base">Viale Benessere 224, Roma (RM)</dd>
              </div>
              <div>
                <dt className="text-sm uppercase tracking-wide">Fondazione</dt>
                <dd className="text-base">2025</dd>
              </div>
              <div>
                <dt className="text-sm uppercase tracking-wide">Contatti</dt>
                <dd className="text-base">armonestudio@fit.com • 06678837843</dd>
              </div>
              <div>
                <dt className="text-sm uppercase tracking-wide">Orari</dt>
                <dd className="text-base">Lun–Sab, 8:00–20:00</dd>
              </div>
            </dl>
          </aside>
        </div>
      </section>

      {/* Valori “card” sintetici */}
      <section className="section">
        <div className="container grid gap-6 md:grid-cols-3">
          {[
            {
              title: "Ambiente Intimo",
              body:
                "Spazi curati, luminosi e accoglienti per un’esperienza serena e concentrata.",
            },
            {
              title: "Metodo Progressivo",
              body:
                "Percorsi su misura, dal livello base all’avanzato, con attenzione alla postura.",
            },
            {
              title: "Insegnanti Certificati",
              body:
                "Professionalità e sensibilità per accompagnarti con sicurezza e motivazione.",
            },
          ].map((c) => (
            <div
              key={c.title}
              className="rounded-xl overflow-hidden border border-brand-100 bg-brand-50 shadow-sm"
            >
              <div className="bg-brand-200/90 px-6 py-4">
                <h4 className="font-heading text-brand-50 text-lg">{c.title}</h4>
              </div>
              <p className="font-body text-brand-400 px-6 py-5 leading-relaxed">
                {c.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Mappa */}
      <section className="section">
        <div className="container">
          <h2 className="font-heading text-brand-400 text-2xl md:text-3xl mb-4">
            Dove Siamo
          </h2>

          {/* Wrapper responsive (16:9) senza plugin */}
          <div className="relative w-full rounded-xl overflow-hidden border border-brand-100 shadow">
            <div className="pb-[56.25%]"></div>
            <iframe
              title="Armonē Studio - Mappa"
              className="absolute inset-0 w-full h-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src={
                "https://www.google.com/maps?q=" +
                encodeURIComponent("Viale Benessere 224, Roma, RM") +
                "&output=embed"
              }
            />
          </div>
        </div>
      </section>
    </main>
  );
}
