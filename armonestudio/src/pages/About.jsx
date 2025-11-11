
export default function About() {
  const HERO_IMG = "/assets/about.jpg";
  const VALUE_IMAGES = {
    intimate: "/assets/ambiente.jpg",
    progressive: "/assets/about-posturale.jpg",
    teachers: "/assets/about-classi.jpg",
  };

  return (
    <main className="pt-16 md:pt-20">
      {/* HERO con immagine + overlay */}
      <section className="relative">
        {/* immagine full-bleed */}
        <img
          src={HERO_IMG}
          alt="Interno luminoso di Armonē Studio"
          className="w-full h-[56vh] md:h-[68vh] object-cover"
          loading="eager"
        />
        {/* overlay per migliorare la leggibilità del testo */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/25 to-transparent" />
        {/* testo */}
        <div className="absolute inset-0 flex items-center">
          <div className="container text-center">
            <h1 className="font-heading text-brand-50 drop-shadow-sm text-4xl md:text-6xl">
              Chi Siamo
            </h1>
            <p className="font-body text-brand-50/90 max-w-3xl mx-auto mt-4 md:mt-6 text-base md:text-xl leading-relaxed">
              Armonē Studio è uno spazio dedicato al benessere consapevole:
              pilates, postura, respiro e movimento in armonia.
            </p>
          </div>
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
                <dd className="text-base">Viale Palestra 224, Roma (RM)</dd>
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

      {/* Valori con immagini */}
      <section className="section">
        <div className="container grid gap-6 md:grid-cols-3">
          {[
            {
              title: "Ambiente Intimo",
              body:
                "Spazi curati, luminosi e accoglienti per un’esperienza serena e concentrata.",
              img: VALUE_IMAGES.intimate,
              alt: "Sala Pilates intima e luminosa",
            },
            {
              title: "Metodo Progressivo",
              body:
                "Percorsi su misura, dal livello base all’avanzato, con attenzione alla postura.",
              img: VALUE_IMAGES.progressive,
              alt: "Lezione Pilates con progressione degli esercizi",
            },
            {
              title: "Insegnanti Certificati",
              body:
                "Professionalità e sensibilità per accompagnarti con sicurezza e motivazione.",
              img: VALUE_IMAGES.teachers,
              alt: "Insegnante certificata durante una lezione",
            },
          ].map((c) => (
            <div
              key={c.title}
              className="rounded-xl overflow-hidden border border-brand-100 bg-brand-50 shadow-sm flex flex-col"
            >
              <div className="bg-brand-200/90 px-6 py-4">
                <h4 className="font-heading text-brand-50 text-lg">{c.title}</h4>
              </div>

              {/* immagine sotto l’header */}
              <img
                src={c.img}
                alt={c.alt}
                className="w-full h-48 md:h-56 object-cover"
                loading="lazy"
              />

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

          {/* Wrapper responsive (16:9) */}
          <div className="relative w-full rounded-xl overflow-hidden border border-brand-100 shadow">
            <div className="pb-[56.25%]" />
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
