# 🧘‍♀️ Armonē Studio

![React](https://img.shields.io/badge/React-18.2.0-61DAFB?style=flat&logo=react)
![Vite](https://img.shields.io/badge/Vite-5.x-646CFF?style=flat&logo=vite)
![Tailwind](https://img.shields.io/badge/TailwindCSS-3.x-38BDF8?style=flat&logo=tailwind-css)
![Cal.com](https://img.shields.io/badge/Cal.com-Integration-00B2FF?style=flat&logo=google-calendar)
![License](https://img.shields.io/badge/License-MIT-green?style=flat)

> Un sito vetrina elegante e funzionale per un centro Pilates, con sistema di prenotazione integrato.  
> Realizzato con **React + Vite** e **Tailwind CSS**, pensato per un’esperienza fluida, responsive e moderna.

---

## 🔗 Live Site  
👉 [https://armone.vercel.app](https://armone.vercel.app)

---

## Preview  
![Armonē Studio Preview](https://raw.githubusercontent.com/alelodato/armone/main/public/preview.jpg)

---

## Table of Contents
- [Overview](#overview)
- [User Goals](#user-goals)
- [UX & Design](#ux--design)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Pages](#pages)
- [Booking System](#booking-system)
- [Privacy & Cookie Policy](#privacy--cookie-policy)
- [Future Improvements](#future-improvements)
- [Deployment](#deployment)
- [Author](#autori)
- [License](#license)

---

## Overview
**Armonē Studio** è un sito dimostrativo per un centro Pilates.  
L’obiettivo è offrire un’esperienza elegante e semplice, permettendo agli utenti di **scoprire i corsi e prenotare una lezione** in pochi clic.

Il progetto combina un **frontend minimalista e armonico** con un sistema di prenotazione reale basato su [Cal.com](https://cal.com).

---

## 🎯 User Goals
- Scoprire i valori e la filosofia dello studio  
- Visualizzare le classi disponibili e i loro orari  
- Prenotare una lezione in modo rapido e chiaro  
- Trovare informazioni pratiche (indirizzo, contatti, orari)  
- Leggere le politiche sulla privacy e sui cookie

---

## 🎨 UX & Design
- Design **femminile e bilanciato**, con palette sabbia e verde oliva  
- Layout **responsive mobile-first**  
- **Navbar sticky** per navigazione fluida  
- **Scroll-to-top button** elegante e animato  
- Immagini ottimizzate (`WebP`, lazy loading)  
- Transizioni fluide con **AOS (Animate On Scroll)**  

---

## ⚙️ Features
- **Homepage** con hero introduttiva e CTA  
- **Pagina “Chi Siamo”** con storia, valori e mappa interattiva  
- **Pagina “Classi”** con 3 sezioni dedicate:
  - *Pilates Reformer*
  - *Pilates Matwork*
  - *Posturale & Mobility*  
- Ogni classe mostra:
  - descrizione completa  
  - benefici principali  
  - durata e livello  
  - pulsante di prenotazione diretta  
- **Prenotazione integrata** (Cal.com embed)  
- **Tabbar interattiva** per cambiare classe direttamente nella pagina di prenotazione  
- **Cookie Banner** collegato alla policy  
- **Privacy e Cookie Policy pages** con pulsante per tornare indietro  
- **Scroll-to-top** persistente e animato  

---

## 💻 Tech Stack
| Tecnologia | Ruolo |
|-------------|--------|
| **React + Vite** | Frontend framework e build tool |
| **Tailwind CSS** | Styling e layout responsive |
| **React Router DOM** | Gestione delle route |
| **Cal.com Embed** | Sistema di prenotazione integrato |
| **Vercel** | Hosting e deploy automatico |
| **Google Maps Embed** | Mappa interattiva nella sezione “Dove Siamo” |
| **AOS** | Animazioni su scroll |

---

## 📑 Pages
| Pagina | Percorso | Descrizione |
|--------|-----------|-------------|
| **Home** | `/` | Hero, valori e CTA |
| **Chi Siamo** | `/about` | Missione, storia, mappa e info pratiche |
| **Classi** | `/classi` | Elenco completo delle lezioni |
| **Prenotazione** | `/prenota/:slug` | Form Cal.com integrato per la classe selezionata |
| **Contatti** | `/contact` | Modulo di contatto via EmailJS |
| **Privacy Policy** | `/privacy` | Informativa GDPR |
| **Cookie Policy** | `/cookies` | Informativa sull’uso dei cookie |

---

## 🕓 Booking System
Sistema di prenotazioni gestito tramite [Cal.com](https://cal.com):

- Ogni classe ha il proprio **link dedicato** (`/reformer`, `/matwork`, `/posturale`)
- L’utente può scegliere **data e orario** dal calendario integrato
- Gestione orari e disponibilità tramite dashboard Cal.com
- Numero massimo di partecipanti configurabile da pannello Cal.com
- Layout responsive con **tabbar per cambio classe**

---

## 🧾 Privacy & Cookie Policy
Il sito include due pagine informative conformi al **Regolamento GDPR (UE 2016/679)**:

- **Privacy Policy** – descrive modalità e finalità del trattamento dei dati personali  
- **Cookie Policy** – spiega l’utilizzo dei cookie tecnici, analitici e di terze parti  

Entrambe le pagine includono un **pulsante di ritorno** per una navigazione intuitiva.

---

## Future Improvements
- Dashboard admin per gestione classi e prenotazioni  
- Notifiche automatiche via email (Resend / EmailJS)  
- Integrazione backend per archiviazione dati utenti  
- Dark mode  
- Sistema recensioni / testimonianze clienti  

---

## Deployment
Deploy automatico su **Vercel** con configurazione per Vite:

**Build command:**  
```bash
vite build

**Output directory:**

```dist


**File vercel.json:**

{
  "rewrites": [
    { "source": "/(.*)", "destination": "/" }
  ],
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        { "key": "Cache-Control", "value": "public, max-age=0, must-revalidate" },
        { "key": "X-Content-Type-Options", "value": "nosniff" },
        { "key": "X-Frame-Options", "value": "DENY" },
        { "key": "X-XSS-Protection", "value": "1; mode=block" },
        { "key": "Referrer-Policy", "value": "strict-origin-when-cross-origin" }
      ]
    }
  ]
}


Questo file assicura la corretta gestione delle route e aggiunge header di sicurezza per protezione base (CSP, XSS, CORS).
```
---

## Autore

Alessio Lodato
Frontend Developer • React / Django / UI Design
📍 Roma — alessiolodato.dev

📜 License

Distribuito sotto licenza MIT.
© 2025 Armonē Studio — Progetto dimostrativo per portfolio.