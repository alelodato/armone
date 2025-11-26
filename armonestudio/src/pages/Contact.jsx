import { useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState({ ok: false, error: "", loading: false });

  async function onSubmit(e) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget));

    // Validazione base
    if (!data.name?.trim() || !data.email?.trim() || !data.message?.trim()) {
      setStatus({ ok: false, loading: false, error: "Compila nome, email e messaggio." });
      return;
    }

    try {
      setStatus({ ok: false, error: "", loading: true });

      // 👉 Opzione A (Formspree): sostituisci l'URL con il tuo endpoint
      // const res = await fetch("https://formspree.io/f/TUO_ID", {
      //   method: "POST",
      //   headers: { "Accept": "application/json" },
      //   body: new FormData(e.currentTarget),
      // });

      // 👉 Opzione B (EmailJS): lascia il submit al tuo handler esterno
      // Qui facciamo finta di inviare:
      await new Promise(r => setTimeout(r, 700));

      e.currentTarget.reset();
      setStatus({ ok: true, error: "", loading: false });
    } catch (err) {
      setStatus({ ok: false, error: "Invio non riuscito, riprova.", loading: false });
    }
  }

  return (
    <main className="pt-16 md:pt-20">
      {/* Intro */}
      <section className="relative section h-[56vh] md:h-[68vh]">
        <img
          src="/assets/contact-bg.jpg"
          alt="Interno luminoso di Armonē Studio"
          className="absolute inset-0 w-full h-[56vh] md:h-[68vh] object-cover object-center"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative container text-center">
          <h1 className="font-heading text-brand-50 text-4xl md:text-6xl drop-shadow-sm">
            CONTATTACI
          </h1>
          <p className="font-body text-brand-50 text-lg md:text-2lg mt-4 max-w-3xl mx-auto">
            Domande, prenotazioni o informazioni sui corsi? Scrivici: ti rispondiamo al più presto.
          </p>
        </div>
      </section>

      {/* Form */}
      <section className="section">
        <div className="container grid gap-8 md:grid-cols-2 items-start">
          {/* Scheda info rapida */}
          <aside className="bg-brand-100 rounded-xl p-6 md:p-8 border border-brand-100">
            <h2 className="font-heading text-brand-400 text-2xl mb-3">Armonē Studio</h2>
            <ul className="font-body text-brand-400/90 space-y-2">
              <li><strong>Indirizzo:</strong> Via Esempio 123, Pomezia (RM)</li>
              <li><strong>Email:</strong> armonestudio@fit.com</li>
              <li><strong>Telefono:</strong> 06xxxxxxx</li>
            </ul>
            <p className="font-body text-brand-400/80 mt-5">
              Orari flessibili su prenotazione. Se hai esigenze specifiche (dolori o infortuni),
              segnalacelo nel messaggio: ti consigliamo la classe più adatta.
            </p>
          </aside>

          {/* Form vero e proprio */}
          <form
            onSubmit={onSubmit}
            className="bg-brand-50 rounded-xl p-6 md:p-8 border border-brand-100 shadow space-y-5"
          >
            {/* honeypot anti-bot */}
            <input type="text" name="company" className="hidden" tabIndex={-1} autoComplete="off" />

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block font-body text-brand-400 mb-1">Nome*</label>
                <input
                  id="name" name="name" type="text" required
                  className="w-full rounded-lg border border-brand-100 bg-white px-4 py-3 font-body text-brand-400
                             focus:outline-none focus:ring-2 focus:ring-brand-300"
                />
              </div>
              <div>
                <label htmlFor="email" className="block font-body text-brand-400 mb-1">Email*</label>
                <input
                  id="email" name="email" type="email" required
                  className="w-full rounded-lg border border-brand-100 bg-white px-4 py-3 font-body text-brand-400
                             focus:outline-none focus:ring-2 focus:ring-brand-300"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="phone" className="block font-body text-brand-400 mb-1">Telefono</label>
                <input
                  id="phone" name="phone" type="tel"
                  className="w-full rounded-lg border border-brand-100 bg-white px-4 py-3 font-body text-brand-400
                             focus:outline-none focus:ring-2 focus:ring-brand-300"
                />
              </div>
              <div>
                <label htmlFor="topic" className="block font-body text-brand-400 mb-1">Argomento</label>
                <select
                  id="topic" name="topic" defaultValue="Informazioni"
                  className="w-full rounded-lg border border-brand-100 bg-white px-4 py-3 font-body text-brand-400
                             focus:outline-none focus:ring-2 focus:ring-brand-300"
                >
                  <option>Informazioni</option>
                  <option>Prenotazione lezione di prova</option>
                  <option>Consiglio sulla classe</option>
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block font-body text-brand-400 mb-1">Messaggio*</label>
              <textarea
                id="message" name="message" rows={6} required
                className="w-full rounded-lg border border-brand-100 bg-white px-4 py-3 font-body text-brand-400
                           focus:outline-none focus:ring-2 focus:ring-brand-300"
                placeholder="Raccontaci obiettivi, livello o eventuali esigenze…"
              />
            </div>

            {/* Stato invio */}
            {status.error && (
              <p className="text-red-600 text-sm">{status.error}</p>
            )}
            {status.ok && (
              <p className="text-green-700 text-sm">Messaggio inviato! Ti risponderemo al più presto.</p>
            )}

            <div className="flex flex-wrap gap-3">
              <button
                type="submit"
                disabled={status.loading}
                className="inline-flex items-center rounded-full px-6 py-3
                           bg-brand-300 text-brand-50 font-cta tracking-wide uppercase text-sm
                           hover:opacity-90 transition disabled:opacity-60"
              >
                {status.loading ? "Invio…" : "Invia messaggio"}
              </button>

              {/* Fallback mailto (apre client email) */}
              <a
                href={`mailto:armonestudio@fit.com?subject=Richiesta%20informazioni`}
                className="inline-flex items-center rounded-full px-6 py-3
                           border border-brand-300/50 bg-brand-50 text-brand-400 font-body
                           hover:bg-brand-100 transition"
              >
                Scrivi via email
              </a>
            </div>

            <p className="font-body text-xs text-brand-400/70">
              Inviando il form accetti il trattamento dei dati esclusivamente per rispondere alla tua richiesta.
            </p>
          </form>
        </div>
      </section>
    </main>
  );
}
