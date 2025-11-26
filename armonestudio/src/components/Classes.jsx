export default function Classes() {
  return (
    <section
      id="classi"
      className="bg-brand-100 py-16 md:py-24 lg:py-0 min-h-[70vh] flex items-center"
    >
      <div className="container grid md:grid-cols-2 gap-8 md:gap-12 items-center">
        {/* IMMAGINE */}
        <div className="relative rounded-xl overflow-hidden">
          <img
            src="/assets/Classi Img.jpg"
            alt="Sessione assistita al Reformer"
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <span className="absolute bottom-6 right-10 md:bottom-10 md:right-12 text-brand-200 font-heading text-4xl sm:text-4xl md:text-5xl drop-shadow-sm">
            Classi
          </span>
        </div>

        {/* TESTO */}
        <div className="flex flex-col justify-center h-full px-4 md:px-8 text-center md:text-left">
          <p className="font-body text-brand-400 text-base sm:text-lg md:text-xl leading-relaxed max-w-prose mx-auto md:mx-0">
            In ogni classe di Armonē Studio, il movimento diventa un dialogo
            gentile tra forza e controllo. Proponiamo lezioni di Pilates Reformer
            e Matwork adatte a ogni livello, con programmi personalizzati per
            migliorare equilibrio, flessibilità e tonicità muscolare. Che tu
            stia cercando un momento di pausa dallo stress quotidiano o un
            allenamento mirato, troverai un approccio attento e progressivo,
            pensato per valorizzare il tuo corpo e accompagnarti verso un
            benessere duraturo.
          </p>
        </div>
      </div>
    </section>
  );
}
