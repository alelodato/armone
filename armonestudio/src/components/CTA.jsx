import { Link } from "react-router-dom";

export default function CTA(){
  return (
    <section id="prenota" className="section bg-brand-400">
      <div className="container text-center text-brand-50">
        <h2 className="font-heading text-3xl md:text-4xl mb-3 text-brand-200">Scopri il piacere di muoverti in armonia.</h2>
        <p className="font-body opacity-90 max-w-3xl mx-auto">
          Con una lezione di prova potrai conoscere da vicino il metodo Armonē Studio e vivere un’esperienza che unisce equilibrio, forza e consapevolezza.Un momento solo per te, in un ambiente accogliente dove ogni dettaglio è pensato per farti stare bene.
        </p>
        <Link to="/prenota/reformer" className="btn mt-6">Prenota ora una lezione di prova</Link>
      </div>
    </section>
  )
}
