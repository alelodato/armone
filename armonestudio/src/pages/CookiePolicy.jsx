import { useNavigate } from "react-router-dom";

export default function CookiePolicy() {
    const navigate = useNavigate();
  return (
    <main className="pt-16 md:pt-20 section">
      <div className="container text-brand-400 font-body space-y-6 max-w-3xl mx-auto leading-relaxed">
        <h1 className="font-heading text-3xl md:text-4xl text-center mb-6">
          Cookie Policy
        </h1>
        <button
            onClick={() => navigate(-1)}
            className="inline-flex items-center gap-2 mt-2 px-4 py-2 rounded-full bg-brand-200 text-brand-50 font-cta text-sm hover:bg-brand-300 transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
            Torna indietro
          </button>
        <p>
          Questo sito utilizza cookie tecnici e funzionali per garantire il corretto funzionamento del sito e migliorare l’esperienza dell’utente.
        </p>

        <h2 className="font-heading text-xl mt-4">1. Cosa sono i cookie</h2>
        <p>
          I cookie sono piccoli file di testo che i siti web possono salvare sul tuo dispositivo per raccogliere informazioni sull’attività di navigazione.
        </p>

        <h2 className="font-heading text-xl mt-4">2. Tipologie di cookie utilizzate</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Cookie tecnici:</strong> necessari al corretto funzionamento del sito (es. gestione sessioni).</li>
          <li><strong>Cookie analitici anonimi:</strong> possono essere utilizzati per analizzare statisticamente l’uso del sito.</li>
          <li><strong>Cookie di terze parti:</strong> nel caso di integrazioni come <strong>Cal.com</strong>.</li>
        </ul>

        <h2 className="font-heading text-xl mt-4">3. Come gestire i cookie</h2>
        <p>
          Puoi disattivare o gestire i cookie direttamente dalle impostazioni del tuo browser. 
          Tuttavia, la disattivazione dei cookie tecnici può compromettere alcune funzionalità del sito.
        </p>

        <h2 className="font-heading text-xl mt-4">4. Servizi di terze parti</h2>
        <p>
          Per le prenotazioni utilizziamo <strong>Cal.com</strong>, che può installare cookie tecnici o funzionali necessari al suo funzionamento.
          Consulta la <a href="https://cal.com/privacy" target="_blank" className="underline">Privacy Policy di Cal.com</a> per maggiori informazioni.
        </p>

        <p className="mt-6 text-sm text-brand-400/70 text-center">
          Ultimo aggiornamento: Novembre 2025
        </p>
      </div>
    </main>
  );
}
