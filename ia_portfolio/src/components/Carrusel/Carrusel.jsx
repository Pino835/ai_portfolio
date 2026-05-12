import React from "react";
import styles from "./Carrusel.module.css";

const tools = [
  { name: "ChatGPT",    logo: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@latest/icons/openai.svg" },
  { name: "Claude",     logo: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@latest/icons/anthropic.svg" },
  { name: "Gemini",     logo: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@latest/icons/googlegemini.svg" },
  { name: "Midjourney", logo: "https://cdn.jsdelivr.net/gh/homarr-labs/dashboard-icons/webp/midjourney.webp" },
  { name: "Canva",      logo: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@latest/icons/canva.svg" },
  { name: "Make",       logo: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@latest/icons/make.svg" },
  { name: "Perplexity", logo: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@latest/icons/perplexity.svg" },
];

export default function Carrusel() {
  return (
    <section className={styles.carouselSection}>
      <p className={styles.carouselLabel}>Herramientas que uso</p>
      <div className={styles.carouselWrapper}>
        <div className={styles.carouselTrack}>
          {[...tools, ...tools].map((tool, i) => (
            <div className={styles.toolCard} key={i}>
              <img src={tool.logo} alt={tool.name} className={styles.toolLogo} />
              <span className={styles.toolName}>{tool.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}