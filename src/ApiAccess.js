async function getCurrentWeather(location) {
  const apiResponce = await fetch(
    `https://api.weatherapi.com/v1/current.json?key=d7b14c7965ef4d51a58203751230910&q=${location}`
  );

  const weatherData = await apiResponce.json();

  return weatherData;
}

export default getCurrentWeather;
