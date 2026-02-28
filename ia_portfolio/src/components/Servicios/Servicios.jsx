import styles from './Servicios.module.css';
import imagen1 from '../../assets/servicio1.jpeg';
import imagen2 from '../../assets/servicio2.jpeg';
import imagen3 from '../../assets/servicio3.jpeg';
import imagen4 from '../../assets/servicio4.jpeg';

export default function Servicios() {
  const servicios = [
    {
      id: 1,
      titulo: "Inicio",
      descripcion: "Perfecto para empezar con la automatización básica y contenido con IA generativo",
      imagen: imagen1,
      caracteristicas: ["Chatbot básico", "1 campaña mensual", "Soporte por email"]
    },
    {
      id: 2,
      titulo: "Profesional",
      descripcion: "Ideal para pymes que buscan automatizar procesos y marketing con IA avanzada",
      imagen: imagen2,
      caracteristicas: ["Chatbot avanzado", "4 campañas mensuales", "Soporte prioritario"]
    },
    {
      id: 3,
      titulo: "Empresarial",
      descripcion: "Solución completa con análisis de datos y automatización personalizada",
      imagen: imagen3,
      caracteristicas: ["Chatbot personalizado", "Campañas ilimitadas", "Análisis de datos"]
    },
    {
      id: 4,
      titulo: "Personalizado",
      descripcion: "Plan a medida según tus necesidades específicas con integraciones personalizadas",
      imagen: imagen4,
      caracteristicas: ["Solución a medida", "Integraciones custom", "Soporte 24/7"]
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