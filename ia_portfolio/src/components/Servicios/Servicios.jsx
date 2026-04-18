import styles from './Servicios.module.css';
import imagen1 from '../../assets/servicio1.jpeg';
import imagen2 from '../../assets/servicio2.jpeg';
import imagen3 from '../../assets/servicio3.jpeg';
import imagen4 from '../../assets/servicio4.jpeg';

export default function Servicios() {
  const servicios = [
    {
      id: 1,
      titulo: "Generación de Contenido Audiovisual con IA",
      descripcion: "Perfecto para mejorar su presencia online con contenido visual atractivo",
      imagen: imagen1,
      caracteristicas: ["Texto", "Imágenes", "Videos", "Audios"]
    },
    {
      id: 2,
      titulo: "Generación de Páginas o Sitios web con IA",
      descripcion: "Ideal para crear o mejorar tu sitio web con diseño moderno y funcional",
      imagen: imagen2,
      caracteristicas: ["Diseño moderno", "Responsive", "Optimización SEO"]
    },
    {
      id: 3,
      titulo: "Generación de ChatBots y Agentes GPT con IA",
      descripcion: "Perfecto para mejorar la atención al cliente y automatizar respuestas con chatbots inteligentes",
      imagen: imagen3,
      caracteristicas: ["Chatbot personalizado", "Integración con plataformas", "Análisis de conversaciones"]
    },
    {
      id: 4,
      titulo: "Generación de Automatizaciones a medida con IA",
      descripcion: "Ideal para optimizar procesos internos y mejorar la eficiencia con soluciones de automatización personalizadas",
      imagen: imagen4,
      caracteristicas: ["Solución a medida", "Integraciones custom"]
    }
  ];

  return (
    <section id="servicios" className={styles.servicios}>
      <div className={styles.servicioHeader}>
        <h1 className={styles.servicioTitle}>Servicios</h1>
        <p className={styles.servicioDescript}>Automatización y contenido con IA para pymes.</p>
      </div>

      <div className={styles.gridServicios}>
        {servicios.map((servicio) => (
          <div key={servicio.id} className={styles.servicioCard}>
            <img src={servicio.imagen} alt={servicio.titulo} className={styles.servicioImagen} />
            <div className={styles.servicioCardContent}>
              <h3 className={styles.servicioCardTitulo}>{servicio.titulo}</h3>
              <p className={styles.servicioCardDescripcion}>{servicio.descripcion}</p>
              <ul className={styles.servicioCaracteristicas}>
                {servicio.caracteristicas.map((caracteristica, index) => (
                  <li key={index}>✓ {caracteristica}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}