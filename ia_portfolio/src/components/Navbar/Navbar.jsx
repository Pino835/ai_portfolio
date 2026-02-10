import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <h1 className={styles.brand}>Portafolio</h1>

        <nav>
          <ul className={styles.navList}>
            <li><a className={styles.navLink} href="#inicio">Inicio</a></li>
            <li><a className={styles.navLink} href="#servicios">Servicios</a></li>
            <li><a className={styles.navLink} href="#proyectos">Proyectos</a></li>
            <li><a className={styles.navLink} href="#contacto">Contacto</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}