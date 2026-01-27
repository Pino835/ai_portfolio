import Navbar from './components/Navbar/Navbar.jsx'
import Hero from './components/Hero/Hero.jsx'
import Servicios from './components/Servicios/Servicios.jsx'
import Proyectos from './components/Proyectos/Proyectos.jsx'
import Contacto from './components/Contacto/Contacto.jsx'
import Footer from './components/Footer/Footer.jsx'

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Proyectos />
      <Servicios />
      <Contacto />
      <Footer />
    </>
  );
}
