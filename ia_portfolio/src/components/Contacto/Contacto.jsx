import styles from './Contacto.module.css';

export default function Contacto() {
  return (
    <section id="contacto" className={styles.contacto}>
      <div className={styles.contactoContent}>
        <h1 className={styles.contactoTitle}>Contacto</h1>
        <p className={styles.contactoDescript}>Automatización y contenido con IA para pymes.</p>
      </div>
    </section>
  );
}