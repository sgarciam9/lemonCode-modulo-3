import "./styles.scss";
import logo from "./logo.png";

const app = document.createElement("div");

const img = document.createElement("img");
img.src = logo;
img.width = 200;

const title = document.createElement("h1");
title.textContent = "Hola mundo";

app.appendChild(img);
app.appendChild(title);

document.body.appendChild(app);
