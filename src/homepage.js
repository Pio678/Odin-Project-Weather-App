import searchIcon from "./assets/search.png";

import getCurrentApiData from "./ApiAccess";
import homepageStyle from "./styles/homepageStyle.css";

function createHeader() {
  const header = document.createElement("header");
  const websiteDescription = document.createElement("h1");

  const searchBarContainer = document.createElement("div");
  searchBarContainer.classList.add("search-container");

  const searchbar = document.createElement("input");
  searchbar.classList.add("searchbar");
  searchbar.type = "search";
  searchbar.placeholder = "Enter a city";

  const searchButton = document.createElement("img");
  searchButton.classList.add("search-button");
  searchButton.src = searchIcon;

  searchButton.addEventListener("click", (e) => {
    searchLocationWeather();
  });

  searchbar.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      console.log("enter pressed");
      searchLocationWeather();
    }
  });

  searchBarContainer.append(searchbar, searchButton);

  header.append(searchBarContainer);

  return header;
}

async function searchLocationWeather() {
  const searchbar = document.querySelector(".searchbar");
  const location = searchbar.value;
  loadWeatherData(location);
}

function createMain() {
  const main = document.createElement("main");

  const currentWeatherContainer = document.createElement("div");
  currentWeatherContainer.classList.add("current-weather-container");

  const location = document.createElement("div");
  location.classList.add("location");

  const dateTime = document.createElement("p");
  dateTime.classList.add("date-time");

  const currentWeatherInfo = document.createElement("div");
  currentWeatherInfo.classList.add("current-weather-info");

  const currentWeatherIcon = document.createElement("img");
  currentWeatherIcon.classList.add("current-weather-icon");

  const currentWeather = document.createElement("div");
  currentWeather.classList.add("current-weather");

  const weatherDetails = document.createElement("div");
  weatherDetails.classList.add("weather-details");

  const currentTemperature = document.createElement("div");
  currentTemperature.classList.add("current-temperature");

  const currentHumidity = document.createElement("div");
  currentHumidity.classList.add("current-humidity");

  const currentWind = document.createElement("div");
  currentWind.classList.add("current-wind");

  const forecastContainer = document.createElement("div");
  forecastContainer.classList.add("forecast-container");

  weatherDetails.append(currentTemperature, currentHumidity, currentWind);

  currentWeatherInfo.append(currentWeatherIcon, currentWeather, weatherDetails);

  currentWeatherContainer.append(location, dateTime, currentWeatherInfo);

  main.append(currentWeatherContainer);

  return main;
}

function createFooter() {
  const footer = document.createElement("footer");

  return footer;
}

export async function loadWeatherData(location) {
  const currentWeatherData = await getCurrentApiData(location);

  //setting a location
  const locationElement = document.querySelector(".location");
  locationElement.innerText = `${currentWeatherData.location.name},${currentWeatherData.location.country}`;

  const dateTime = document.querySelector(".date-time");
  dateTime.innerText = currentWeatherData.location.localtime;
  //setting current weather
  const currentWeather = document.querySelector(".current-weather");
  currentWeather.innerText = currentWeatherData.current.condition.text;
  //setting current weather icon
  const currentWeatherIcon = document.querySelector(".current-weather-icon");
  currentWeatherIcon.src = currentWeatherData.current.condition.icon;
  //setting temperature
  const currentTemperature = document.querySelector(".current-temperature");
  currentTemperature.innerText = `temperature: ${currentWeatherData.current.temp_c}°C`;
  //setting Humidity
  const currentHumidity = document.querySelector(".current-humidity");
  currentHumidity.innerText = `humidity: ${currentWeatherData.current.humidity} %`;
  //setting wind
  const currentWind = document.querySelector(".current-wind");
  currentWind.innerText = `wind: ${currentWeatherData.current.wind_kph} km/h`;

  console.log(currentWeatherData);
}

function createHomepage() {
  const content = document.createElement("div");
  content.classList.add("content");
  content.append(createHeader(), createMain());
  return content;
}

export default function loadHomepage() {
  return createHomepage();
}
