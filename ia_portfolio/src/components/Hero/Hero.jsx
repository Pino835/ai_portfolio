import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section id="inicio" className={styles.hero}>
      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>Juan Diego Pino</h1>
        <p className={styles.heroDescript}>Automatización y contenido con IA para pymes.</p>
      </div>
    </section>
  );
}