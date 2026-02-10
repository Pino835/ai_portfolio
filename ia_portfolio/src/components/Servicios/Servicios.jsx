import styles from './Servicios.module.css';

export default function Servicios() {
  const servicios = [
    {
      id: 1,
      titulo: "Inicio",
      descripcion: "Perfecto para empezar con la automatización básica y contenido con IA generativo",
      imagen: "https://upload.wikimedia.org/wikipedia/commons/6/64/Dall-e_3_%28jan_%2724%29_artificial_intelligence_icon.png",
      caracteristicas: ["Chatbot básico", "1 campaña mensual", "Soporte por email"]
    },
    {
      id: 2,
      titulo: "Profesional",
      descripcion: "Ideal para pymes que buscan automatizar procesos y marketing con IA avanzada",
      imagen: "https://upload.wikimedia.org/wikipedia/commons/6/64/Dall-e_3_%28jan_%2724%29_artificial_intelligence_icon.png",
      caracteristicas: ["Chatbot avanzado", "4 campañas mensuales", "Soporte prioritario"]
    },
    {
      id: 3,
      titulo: "Empresarial",
      descripcion: "Solución completa con análisis de datos y automatización personalizada",
      imagen: "https://upload.wikimedia.org/wikipedia/commons/6/64/Dall-e_3_%28jan_%2724%29_artificial_intelligence_icon.png",
      caracteristicas: ["Chatbot personalizado", "Campañas ilimitadas", "Análisis de datos"]
    },
    {
      id: 4,
      titulo: "Personalizado",
      descripcion: "Plan a medida según tus necesidades específicas con integraciones personalizadas",
      imagen: "https://upload.wikimedia.org/wikipedia/commons/6/64/Dall-e_3_%28jan_%2724%29_artificial_intelligence_icon.png",
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