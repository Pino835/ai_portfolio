import styles from './Servicios.module.css';

export default function Servicios() {
  return (
    <section id="servicios" className={styles.servicios}>
      <div className={styles.servicioContent}>
        <h1 className={styles.servicioTitle}>Servicios</h1>
        <p className={styles.servicioDescript}>Automatización y contenido con IA para pymes.</p>
      </div>
    </section>
  );
}