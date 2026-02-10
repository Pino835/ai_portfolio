import styles from "./Proyectos.module.css";
import imagen1 from "../../assets/proyectos/arboles1.jpeg";
import imagen2 from "../../assets/proyectos/arboles2.jpeg";
import imagen3 from "../../assets/proyectos/paisaje1.jpeg";
import imagen4 from "../../assets/proyectos/paisaje2.jpeg";

export default function Proyectos() {
  const proyectos = [
    {
      id: 1,
      titulo: "Generador de Contenido IA",
      descripcion: "Automatiza la creación de contenido para redes sociales con inteligencia artificial",
      imagen: imagen1
    },
    {
      id: 2,
      titulo: "Chatbot para Pymes",
      descripcion: "Asistente conversacional inteligente para atender clientes 24/7",
      imagen: imagen2
    },
    {
      id: 3,
      titulo: "Análisis de Datos IA",
      descripcion: "Extrae insights valiosos de tus datos empresariales con machine learning",
      imagen: imagen3
    },
    {
      id: 4,
      titulo: "Optimización de Procesos",
      descripcion: "Automatiza procesos empresariales para aumentar eficiencia",
      imagen: imagen4
    },
    {
      id: 5,
      titulo: "Marketing Automatizado",
      descripcion: "Campañas de marketing personalizadas impulsadas por IA",
      imagen: "https://upload.wikimedia.org/wikipedia/commons/6/64/Dall-e_3_%28jan_%2724%29_artificial_intelligence_icon.png"
    },
    {
      id: 6,
      titulo: "Predicción de Ventas",
      descripcion: "Modelos predictivos para forecasting de ventas y demanda",
      imagen: "https://upload.wikimedia.org/wikipedia/commons/6/64/Dall-e_3_%28jan_%2724%29_artificial_intelligence_icon.png"
    },
    {
      id: 7,
      titulo: "Detección de Fraudes",
      descripcion: "Sistema inteligente para identificar y prevenir fraudes",
      imagen: "https://upload.wikimedia.org/wikipedia/commons/6/64/Dall-e_3_%28jan_%2724%29_artificial_intelligence_icon.png"
    },
    {
      id: 8,
      titulo: "Segmentación de Clientes",
      descripcion: "Agrupa clientes automáticamente para estrategias personalizadas",
      imagen: "https://upload.wikimedia.org/wikipedia/commons/6/64/Dall-e_3_%28jan_%2724%29_artificial_intelligence_icon.png"
    }
  ];

  return (
    <section id="proyectos" className={styles.proyectos}>
      <div className={styles.proyectoHeader}>
        <h1 className={styles.proyectoTitle}>Proyectos</h1>
        <p className={styles.proyectoDescript}>Automatización y contenido con IA para pymes.</p>
      </div>

      <div className={styles.gridProyectos}>
        {proyectos.map((proyecto) => (
          <div key={proyecto.id} className={styles.card}>
            <img src={proyecto.imagen} alt={proyecto.titulo} className={styles.cardImagen} />
            <div className={styles.cardContent}>
              <h3 className={styles.cardTitulo}>{proyecto.titulo}</h3>
              <p className={styles.cardDescripcion}>{proyecto.descripcion}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}