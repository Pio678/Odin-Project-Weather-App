import normalize from "./styles/normalize.css";
import style from "./styles/style.css";

import loadHomepage, { loadWeatherData } from "./homepage.js";
import getCurrentWeather from "./ApiAccess";

const body = document.querySelector("body");

body.appendChild(loadHomepage());
loadWeatherData("warsaw");
