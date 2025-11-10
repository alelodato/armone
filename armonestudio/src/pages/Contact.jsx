export default function Contact() {
    return (
        <section id="contatti" className="section bg-brand-400">
            <div className="container text-center text-brand-50">
                <h2 className="font-heading text-3xl md:text-4xl mb-3">Contattaci</h2>
                <p className="font-body opacity-90 max-w-3xl mx-auto">
                    Per qualsiasi informazione o per prenotare una lezione di prova, non esitare a contattarci. Siamo qui per aiutarti a iniziare il tuo percorso verso il benessere con Armonē Studio.
                </p>
                <div className="mt-6 flex flex-col sm:flex-row justify-center gap-4">
                    <a href="mailto:info@armonestudio.com" className="inline-block px-6 py-3 bg-brand-300 text-brand-50 rounded-full font-cta tracking-wide uppercase text-sm hover:opacity-90 transition">
                        Invia una email
                    </a>
                </div>
            </div>
        </section>
    )
}