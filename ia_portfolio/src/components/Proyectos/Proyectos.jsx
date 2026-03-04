import React from "react";
import styles from "./Proyectos.module.css";

// Imágenes de ejemplo para los proyectos
import imagen1 from "../../assets/images/imagen1.jpeg";
import imagen2 from "../../assets/images/imagen2.jpeg";
import imagen3 from "../../assets/images/imagen3.jpeg";
import imagen4 from "../../assets/images/imagen4.jpeg";
import imagen5 from "../../assets/images/imagen5.png";
import imagen6 from "../../assets/images/imagen6.png";
import imagen7 from "../../assets/images/imagen7.png";
import imagen8 from "../../assets/images/imagen8.png";
import imagen9 from "../../assets/images/imagen9.png";
import imagen10 from "../../assets/images/imagen10.png";
import imagen11 from "../../assets/images/imagen11.jpeg";
import imagen12 from "../../assets/images/imagen12.jpeg";
import imagen13 from "../../assets/images/imagen13.jpeg";
import imagen14 from "../../assets/images/imagen14.jpeg";
import imagen15 from "../../assets/images/imagen15.jpeg";
import imagen16 from "../../assets/images/imagen16.jpeg";
import imagen17 from "../../assets/images/imagen17.jpeg";
import imagen18 from "../../assets/images/imagen18.jpeg";
import imagen19 from "../../assets/images/imagen19.jpeg";

// Videos de ejemplo para los proyectos
import video1 from "../../assets/videos/video1.mp4";
import video2 from "../../assets/videos/video2.mp4";
import video3 from "../../assets/videos/video3.mp4";
import video4 from "../../assets/videos/video4.mp4";
import video5 from "../../assets/videos/video5.mp4";
import video6 from "../../assets/videos/video6.mp4";
import video7 from "../../assets/videos/video7.mp4";
import video8 from "../../assets/videos/video8.mp4";
import video9 from "../../assets/videos/video9.mp4";

// Audios de ejemplo para los proyectos
import audio1 from "../../assets/audios/audio1.mp3";
import audio2 from "../../assets/audios/audio2.mp3";
import audio3 from "../../assets/audios/audio3.mp3";
import audio4 from "../../assets/audios/audio4.mp3";
import audio5 from "../../assets/audios/audio5.mp3";

// Chatbot de ejemplo para los proyectos
import chatbot1 from "../../assets/chatbots/chatbot1.png";

// Otras herramientas de ejemplo para los proyectos
import tool1 from "../../assets/tools/tool1.png";

// Datos externos (JSON)
import proyectosData from "../../data/proyectos.json";

export default function Proyectos() {
  const secciones = proyectosData.secciones || [];
  const mediaMap = {
    imagen1, imagen2, imagen3, imagen4, imagen5, 
    imagen6, imagen7, imagen8, imagen9, imagen10, 
    imagen11, imagen12, imagen13, imagen14, imagen15,
    imagen16, imagen17, imagen18, imagen19,
    video1, video2, video3, video4, video5, video6, video7, video8, video9,
    audio1, audio2, audio3, audio4, audio5,
    chatbot1,
    tool1
  };

  // Modal state
  const [modalOpen, setModalOpen] = React.useState(false);
  const [modalMedia, setModalMedia] = React.useState(null);
  const [modalType, setModalType] = React.useState(null);
  const [modalTitle, setModalTitle] = React.useState("");

  // Abrir modal
  const openModal = (mediaSrc, mediaType, title) => {
    setModalOpen(true);
    setModalMedia(mediaSrc);
    setModalType(mediaType);
    setModalTitle(title);
  };

  // Cerrar modal
  const closeModal = () => {
    setModalOpen(false);
    setModalMedia(null);
    setModalType(null);
    setModalTitle("");
  };

  // Cerrar modal al hacer clic fuera del contenido
  const handleModalBgClick = (e) => {
    if (e.target.classList.contains(styles.modalGallery)) {
      closeModal();
    }
  };

  return (
    <>
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
                {seccion.items.map((proyecto) => {
                  const mediaField = proyecto.media || "";
                  const mediaSrc =
                    typeof mediaField === "string" && mediaField.startsWith("http")
                      ? mediaField
                      : mediaMap[mediaField] || mediaField;
                  return (
                    <div
                      key={proyecto.id}
                      className={styles.card}
                      onClick={() =>
                        proyecto.mediaType === "audio"
                          ? null
                          : openModal(mediaSrc, proyecto.mediaType, proyecto.titulo)
                      }
                      style={proyecto.mediaType === "audio" ? { cursor: "default" } : {}}
                    >
                      {(() => {
                        if (proyecto.mediaType === "video") {
                          return <video src={mediaSrc} className={styles.cardImagen} controls />;
                        } else if (proyecto.mediaType === "audio") {
                          return <audio src={mediaSrc} controls />;
                        }
                        return <img src={mediaSrc} alt={proyecto.titulo} className={styles.cardImagen} />;
                      })()}
                      <div className={styles.cardContent}>
                        <h3 className={styles.cardTitulo}>{proyecto.titulo}</h3>
                        <p className={styles.cardDescripcion}>{proyecto.descripcion}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        ))}
      </section>

      {/* Modal de galería */}
      {modalOpen && (
        <div className={styles.modalGallery} onClick={handleModalBgClick}>
          <div className={styles.modalContent}>
            <button className={styles.modalCloseBtn} onClick={closeModal} aria-label="Cerrar">&times;</button>
            {modalType === "video" ? (
              <video src={modalMedia} className={styles.modalMedia} controls autoPlay />
            ) : (
              <img src={modalMedia} alt={modalTitle} className={styles.modalMedia} />
            )}
            <div style={{ color: '#fff', marginTop: '12px', fontWeight: 600 }}>{modalTitle}</div>
          </div>
        </div>
      )}
    </>
  );
}