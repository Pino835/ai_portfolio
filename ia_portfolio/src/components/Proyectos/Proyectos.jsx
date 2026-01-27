import styles from "./Proyectos.module.css";

export default function Proyectos() {
  return (
    <section id="proyectos" className={styles.proyectos}>
      <div className={styles.proyectoContent}>
        <h1 className={styles.proyectoTitle}>Proyectos</h1>
        <p className={styles.proyectoDescript}>Automatización y contenido con IA para pymes.</p>
      </div>
    </section>
  );
}