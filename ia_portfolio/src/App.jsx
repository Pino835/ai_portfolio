import { useEffect } from 'react'
import Navbar from './components/Navbar/Navbar.jsx'
import Hero from './components/Hero/Hero.jsx'
import Servicios from './components/Servicios/Servicios.jsx'
import Proyectos from './components/Proyectos/Proyectos.jsx'
import Carrusel from './components/Carrusel/Carrusel.jsx'
import Contacto from './components/Contacto/Contacto.jsx'
import Footer from './components/Footer/Footer.jsx'

const CHATBOT_SCRIPT_SRC = 'https://centeia-sass-gsxz.onrender.com/static/embed.min.js';
const CHATBOT_BOT_ID = '845e8a5d-8cb6-432e-abe2-9a665a27b852';
const CHATBOT_LOAD_DELAY_MS = 3000;

export default function App() {
  useEffect(() => {
    const timer = setTimeout(() => {
      const script = document.createElement('script');
      script.src = CHATBOT_SCRIPT_SRC;
      script.dataset.publicBotId = CHATBOT_BOT_ID;
      script.defer = true;
      document.body.appendChild(script);
    }, CHATBOT_LOAD_DELAY_MS);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <Servicios />
      <Proyectos />
      <Carrusel />
      <Contacto />
      <Footer />
    </>
  );
}
