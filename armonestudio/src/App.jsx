import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Classi from "./pages/Classi";
import Contact from "./pages/Contact";
import PrenotaClasse from "./pages/PrenotaClasse.jsx";
import BackToTop from "./components/BackToTop";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import CookiePolicy from "./pages/CookiePolicy";
import CookieBanner from "./components/CookieBanner";
import Error404 from "./pages/Error404.jsx";
import Error500 from "./pages/Error505.jsx";
import ErrorOffline from "./pages/ErrorOffline.jsx";

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/classi" element={<Classi />} />
        <Route path="/prenota/:slug" element={<PrenotaClasse />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/cookie-policy" element={<CookiePolicy />} />
        <Route path="/error-offline" element={<ErrorOffline />} />
        <Route path="/error-500" element={<Error500 />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
      <Footer />
      <BackToTop />
      <CookieBanner />
    </>
  )
}
