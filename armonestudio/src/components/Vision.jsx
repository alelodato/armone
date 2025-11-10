export default function Vision() {
  return (
    <section
      id="chi-siamo"
      className="bg-brand-100 py-20 md:py-28 min-h-[80vh] flex items-center"
    >
      <div className="container grid md:grid-cols-2 gap-10 items-center">
        {/* IMMAGINE */}
        <div className="relative rounded-xl overflow-hidden">
          <img
            src="/assets/Visione Img.jpg"
            alt="Logo Armonē Studio su parete"
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <span className="absolute bottom-8 left-8 md:bottom-10 md:left-10 text-brand-200 font-heading text-4xl md:text-5xl drop-shadow-sm">
            Visione
          </span>
        </div>

        {/* TESTO */}
        <div className="flex flex-col justify-center h-full px-4 md:px-8">
          <p className="font-body text-brand-400 text-base sm:text-lg md:text-xl leading-relaxed max-w-prose mx-auto md:mx-0">
            Da Armonē Studio crediamo che il benessere nasca
            dall’equilibrio tra corpo e mente. Il nostro spazio è pensato per
            offrire un’esperienza di Pilates contemporaneo, dove movimento,
            respirazione e consapevolezza si fondono in un flusso armonico. Ogni
            lezione è guidata da istruttori certificati che ti accompagnano con
            attenzione e professionalità, aiutandoti a migliorare postura, forza
            e serenità interiore. Un ambiente intimo, luminoso e curato nei
            dettagli, dove ogni persona può ritrovare il proprio ritmo naturale.
          </p>
        </div>
      </div>
    </section>
  );
}
