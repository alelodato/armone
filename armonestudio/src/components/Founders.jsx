const founders = [
  {
    name: "Maria Rossi",
    role: "Fondatrice & Program Manager",
    img: "/assets/serena.jpg",
  },
  {
    name: "Anna Bianchi",
    role: "Fondatrice & Insegnante",
    img: "/assets/alice.jpg",
  },
];

export default function Founders() {
  return (
    <section
      id="fondatrici"
      className="bg-brand-100 py-16 md:py-24 lg:pb-8 min-h-[70vh] flex items-center"
    >
      <div className="container grid md:grid-cols-2 gap-8 md:gap-12 items-center">
        {/* TESTO */}
        <div className="flex flex-col justify-center h-full px-4 md:px-8 text-center md:text-left">
          <h2 className="font-heading text-brand-200 text-5xl sm:text-4xl md:text-5xl mb-4 md:mb-6">
            Le Fondatrici
          </h2>
          <p className="font-body text-brand-400 text-base sm:text-lg md:text-xl leading-relaxed">
            Armonē Studio nasce dall’incontro tra Maria Rossi e Anna Bianchi, 
            due insegnanti di Pilates unite da una visione comune:
            creare uno spazio dove il movimento sia espressione di equilibrio,
            grazia e consapevolezza. Con anni di esperienza nel settore del
            benessere e una profonda attenzione alla persona, guidano ogni
            lezione con passione e sensibilità, trasformando l’allenamento in un
            percorso di crescita e armonia interiore.
          </p>
        </div>

        {/* IMMAGINI */}
        <div className="grid grid-cols-1 gap-6">
          {founders.map((p) => (
            <div key={p.name} className="rounded-xl overflow-hidden">
              <img
                src={p.img}
                alt={p.name}
                className="w-full h-auto object-cover"
                loading="lazy"
              />
              <div className="bg-brand-50 p-4 text-center">
                <p className="font-heading text-brand-200 text-2xl md:text-3xl">
                  {p.name}
                </p>
                <p className="font-body text-brand-400 text-sm md:text-base">
                  {p.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
