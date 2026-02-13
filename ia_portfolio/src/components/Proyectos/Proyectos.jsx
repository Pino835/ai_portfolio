import styles from "./Proyectos.module.css";

// Imágenes de ejemplo para los proyectos
import imagen1 from "../../assets/images/imagen1.jpeg";
import imagen2 from "../../assets/images/imagen2.jpeg";
import imagen3 from "../../assets/images/imagen3.jpeg";
import imagen4 from "../../assets/images/imagen4.jpeg";
import imagen5 from "../../assets/images/imagen5.png";
import imagen6 from "../../assets/images/imagen6.png";

// Videos de ejemplo para los proyectos
import video1 from "../../assets/videos/video1.mp4";
import video2 from "../../assets/videos/video2.mp4";
import video3 from "../../assets/videos/video3.mp4";
import video4 from "../../assets/videos/video4.mp4";
import video5 from "../../assets/videos/video5.mp4";
import video6 from "../../assets/videos/video6.mp4";

// Datos externos (JSON)
import proyectosData from "../../data/proyectos.json";

export default function Proyectos() {
  const secciones = proyectosData.secciones || [];

  const mediaMap = {
    imagen1, imagen2, imagen3, imagen4, imagen5, imagen6,
    video1, video2, video3, video4, video5, video6
  };

  return (
    <section id="proyectos" className={styles.proyectos}>
      <div className={styles.proyectoHeader}>
        <h1 className={styles.proyectoTitle}>Proyectos</h1>
        <p className={styles.proyectoDescript}>Automatización y contenido con IA para pymes.</p>
      </div>

      {secciones.map((seccion) => (
        <div key={seccion.id} className={styles.sectionWrapper}>
          <h2 className={styles.sectionTitle}>{seccion.titulo}</h2>
          {seccion.items.length === 0 ? (
            <p className={styles.emptyMsg}>Próximamente...</p>
          ) : (
            <div className={styles.gridProyectos}>
              {seccion.items.map((proyecto) => (
                <div key={proyecto.id} className={styles.card}>
                  {(() => {
                    const mediaField = proyecto.media || "";
                    const mediaSrc =
                      typeof mediaField === "string" && mediaField.startsWith("http")
                        ? mediaField
                        : mediaMap[mediaField] || mediaField;

                    if (proyecto.mediaType === "video") {
                      return <video src={mediaSrc} className={styles.cardImagen} controls />;
                    }

                    return <img src={mediaSrc} alt={proyecto.titulo} className={styles.cardImagen} />;
                  })()}
                  <div className={styles.cardContent}>
                    <h3 className={styles.cardTitulo}>{proyecto.titulo}</h3>
                    <p className={styles.cardDescripcion}>{proyecto.descripcion}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </section>
  );
}