import { Link } from "react-router-dom";

export default function Hero() {
    return (
        <section className="relative">
            {/* Immagine full-bleed */}
            <img
                src="/assets/Hero Section.jpg"
                alt="Lezione di Pilates in studio"
                className="absolute inset-0 w-full h-full object-cover"
                fetchpriority="high"
            />
            {/* Vignettatura + overlay caldo */}
            <div className="absolute inset-0 bg-black/30"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-brand-50/20 via-transparent to-transparent"></div>


            {/* Contenuto */}
            <div className="relative container min-h-[72vh] md:min-h-[80vh] flex items-center">
                <div className="max-w-2xl">
                    <h1 className="font-heading text-brand-200 text-5xl md:text-7xl leading-[1.05] drop-shadow mt-2">
                        Equilibrio<br /> e Movimento.
                    </h1>

                    <div className="mt-6 flex flex-wrap gap-3">
                        <Link to="/prenota/reformer" className="inline-flex items-center justify-center px-6 py-3 rounded-full font-body text-sm md:text-base font-medium tracking-wide 
    bg-[#97C68A] text-white shadow-md hover:bg-[#8AB57C] transition">PRENOTA ORA</Link>
                        <Link to="/classi" className="inline-flex items-center rounded-full text-sm md:text-base font-medium
                        px-6 py-3 border border-brand-200 text-brand-50/95 bg-brand-400/30 backdrop-blur hover:bg-brand-400/40 transition">
                            LE NOSTRE CLASSI
                        </Link>
                    </div>
                </div>
            </div>
            {/* Bordo inferiore sottile come nel Figma */}
            <div className="h-3 bg-brand-50"></div>
        </section>
    )
}
