// src/pages/PrenotaClasse.jsx
import { useEffect } from "react";
import { useParams, Link, NavLink } from "react-router-dom";
import Cal from "@calcom/embed-react";

const CAL_LINKS = {
    reformer: "alessio-l-lcxiyo/reformer",
    matwork: "alessio-l-lcxiyo/matwork",
    posturale: "alessio-l-lcxiyo/posturale",
};

const TITLES = {
    reformer: "Prenota — Pilates Reformer",
    matwork: "Prenota — Pilates Matwork",
    posturale: "Prenota — Posturale & Mobility",
};

const TABS = [
    { slug: "reformer", label: "Reformer" },
    { slug: "matwork", label: "Matwork" },
    { slug: "posturale", label: "Posturale" },
];

export default function PrenotaClasse() {
    const { slug } = useParams();
    const calLink = CAL_LINKS[slug];

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, [slug]);

    if (!calLink) {
        return (
            <main className="pt-16 md:pt-20 section">
                <div className="container text-center">
                    <p className="font-body text-brand-400">Classe non trovata.</p>
                    <Link to="/classi" className="underline text-brand-400">Torna alle classi</Link>
                </div>
            </main>
        );
    }

    return (
        <main className="pt-16 md:pt-20">
            {/* Hero compatta */}
            <section className="pt-6 md:pt-8 pb-2">
                <div className="container text-center">
                    <h1 className="font-heading text-brand-400 text-3xl md:text-5xl">
                        {TITLES[slug]}
                    </h1>
                    <p className="font-body text-brand-400/80 mt-2 md:mt-3">
                        Seleziona data e orario. I posti sono limitati.
                    </p>

                    {/* Tabbar */}
                    <div className="mt-4 md:mt-5 inline-flex rounded-full bg-brand-50/70 p-1 border border-brand-100">
                        {TABS.map(t => (
                            <NavLink
                                key={t.slug}
                                to={`/prenota/${t.slug}`}
                                className={({ isActive }) =>
                                    `px-4 md:px-5 py-2 rounded-full text-sm md:text-base transition
                   ${isActive
                                        ? "bg-brand-300 text-brand-50"
                                        : "text-brand-400 hover:bg-brand-100"}`
                                }
                            >
                                {t.label}
                            </NavLink>
                        ))}
                    </div>
                </div>
            </section>

            {/* Embed Cal.com */}
            <section className="pb-8 md:pb-12">
                <div className="container max-w-screen-sm md:max-w-3xl mx-auto">
                    {/* wrapper responsivo: altezze diverse per breakpoints */}
                    <div className="cal-wrapper rounded-xl border border-brand-100 shadow overflow-hidden
                    h-[620px] xs:h-[660px] sm:h-[700px] md:h-[780px] lg:h-[840px]">
                        <Cal
                            key={slug}                // Ricarica l'embed quando cambi tab/classe
                            calLink={calLink}
                            style={{ width: "100%", height: "100%" }}  // L’iframe prende tutta l’altezza del wrapper
                            config={{
                                layout: "month_view",   // puoi mettere "week_view" se vuoi più compattezza su mobile
                                theme: "light",
                                primaryColor: "97C68A",
                                locale: "it",
                                hideEventTypeDetails: true,
                                hideLandingPageDetails: true,
                            }}
                        />
                    </div>

                    <p className="text-center mt-3">
                        <a
                            href={`https://cal.com/${calLink}`}
                            target="_blank"
                            rel="noreferrer"
                            className="underline text-brand-400"
                        >
                            Apri lo scheduler in una nuova scheda
                        </a>
                    </p>
                </div>
            </section>

        </main>
    );
}
