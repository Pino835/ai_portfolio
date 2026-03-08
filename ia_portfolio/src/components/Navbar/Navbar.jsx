import { useState, useEffect } from "react";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => setOpen((prev) => !prev);
  const closeMenu = () => setOpen(false);

  // if the viewport is resized back above mobile breakpoint, hide dropdown
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768 && open) {
        setOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [open]);

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <h1 className={styles.brand}>Portafolio</h1>

        {/* hamburger button for mobile */}
        <button
          className={styles.hamburger}
          onClick={toggleMenu}
          aria-label="Menu"
          aria-expanded={open}
        >
          <span />
          <span />
          <span />
        </button>

        <nav>
          <ul className={`${styles.navList} ${open ? styles.open : ""}`}>
            <li>
              <a
                className={styles.navLink}
                href="#inicio"
                onClick={closeMenu}
              >
                Inicio
              </a>
            </li>
            <li>
              <a
                className={styles.navLink}
                href="#servicios"
                onClick={closeMenu}
              >
                Servicios
              </a>
            </li>
            <li>
              <a
                className={styles.navLink}
                href="#proyectos"
                onClick={closeMenu}
              >
                Proyectos
              </a>
            </li>
            <li>
              <a
                className={styles.navLink}
                href="#contacto"
                onClick={closeMenu}
              >
                Contacto
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}