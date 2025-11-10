export default function Footer(){
  return (
    <footer id="contatti" className="section bg-brand-50 border-t border-brand-100">
      <div className="container grid gap-8 md:grid-cols-[1fr_1fr_1fr_1fr] items-start">
        <div className="col-span-1">
          <img src="/assets/armone logo.png" alt="Logo Armonē Studio" className="w-44 h-auto" loading="lazy"/>
        </div>

        <div>
          <p className="font-body text-brand-400"><span className="font-heading">Email:</span><br/>armonestudio@fit.com</p>
        </div>
        <div>
          <p className="font-body text-brand-400"><span className="font-heading">Indirizzo:</span><br/>Viale Benessere 224, Roma, RM</p>
        </div>
        <div>
          <p className="font-body text-brand-400"><span className="font-heading">Telefono:</span><br/>06678837843</p>
        </div>
      </div>

      <div className="container mt-10 border-t border-brand-100 pt-6 flex flex-col sm:flex-row items-center justify-between">
        <p className="font-body text-brand-400 text-sm">© {new Date().getFullYear()} Armonē Studio</p>
        <div className="flex gap-4">
          <a href="#" className="font-body text-sm text-brand-400 hover:opacity-80">Instagram</a>
          <a href="#" className="font-body text-sm text-brand-400 hover:opacity-80">Privacy</a>
          <a href="#" className="font-body text-sm text-brand-400 hover:opacity-80">Cookie</a>
        </div>
        <div className="flex gap-4">
            <p>Sito Web By <a href="https://www.alessiolodato.dev" target="_blank" rel="noopener noreferrer">Alessio Lodato</a></p>
        </div>
      </div>
    </footer>
  )
}
