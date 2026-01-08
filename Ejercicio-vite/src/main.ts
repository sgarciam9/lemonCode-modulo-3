import styles from "./style.module.css";

const app = document.querySelector<HTMLDivElement>("#app");

if (!app) {
  throw new Error("App container not found");
}

// Crear H1 usando DOM API
const title = document.createElement("h1");
title.textContent = "Hola mundo con Vite";
title.className = styles.title;

app.appendChild(title);

// Variable de entorno
console.log(import.meta.env.VITE_ENV_MESSAGE);
