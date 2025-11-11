import { useNavigate } from "react-router-dom";

export default function PrivacyPolicy() {
  const navigate = useNavigate();
  return (
    <main className="pt-16 md:pt-20 section">
      <div className="container text-brand-400 font-body space-y-6 max-w-3xl mx-auto leading-relaxed">
        <h1 className="font-heading text-3xl md:text-4xl text-center mb-6">
          Informativa sulla Privacy
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
          In conformità al Regolamento (UE) 2016/679 (GDPR), il presente sito raccoglie e tratta i dati personali esclusivamente per finalità di prenotazione delle lezioni offerte da Armonē Studio.
        </p>

        <h2 className="font-heading text-xl mt-4">1. Titolare del trattamento</h2>
        <p>
          Il Titolare del trattamento è Armonē Studio. Puoi contattarci tramite il modulo nella sezione “Contatti”.
        </p>

        <h2 className="font-heading text-xl mt-4">2. Finalità del trattamento</h2>
        <p>
          I dati (nome, email, eventuali note) vengono raccolti esclusivamente per gestire la prenotazione di una lezione. 
          Non vengono utilizzati per finalità commerciali o ceduti a terzi.
        </p>

        <h2 className="font-heading text-xl mt-4">3. Modalità di trattamento</h2>
        <p>
          I dati vengono trattati elettronicamente in modo sicuro. Le prenotazioni sono gestite tramite la piattaforma 
          <strong> Cal.com</strong>, che agisce come responsabile del trattamento in conformità con il GDPR.
        </p>

        <h2 className="font-heading text-xl mt-4">4. Diritti dell’interessato</h2>
        <p>
          In qualsiasi momento puoi chiedere l’accesso, la rettifica o la cancellazione dei tuoi dati scrivendoci dal form di contatto.
        </p>

        <h2 className="font-heading text-xl mt-4">5. Conservazione dei dati</h2>
        <p>
          I dati vengono conservati per il tempo necessario alla gestione della prenotazione, dopodiché vengono eliminati.
        </p>

        <h2 className="font-heading text-xl mt-4">6. Base giuridica</h2>
        <p>
          Il trattamento si basa sull’esecuzione di un contratto o di misure precontrattuali su richiesta dell’interessato (art. 6, par. 1, lett. b del GDPR).
        </p>

        <h2 className="font-heading text-xl mt-4">7. Servizi di terze parti</h2>
        <p>
          Cal.com può utilizzare cookie tecnici per garantire il corretto funzionamento del servizio. 
          Ti invitiamo a consultare la loro <a href="https://cal.com/privacy" target="_blank" className="underline">Privacy Policy</a>.
        </p>

        <p className="mt-6 text-sm text-brand-400/70 text-center">
          Ultimo aggiornamento: Novembre 2025
        </p>
      </div>
    </main>
  );
}
