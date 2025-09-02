import { createRain, createSnow, createClouds, createSunRays } from "./animations.js";


// Mock weather API
export async function getWeather(city, apiKey) {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${apiKey}&units=metric`;
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Network error: ${res.status}`);
  const data = await res.json();
  if (Number(data.cod) !== 200) throw new Error(data.message || "API error");
  return data;
}

// Display weather + effects
export function displayWeather(data, resultContainer) {
  const temp = data.main.temp;
  const weather = data.weather[0].main.toLowerCase();
  const description = data.weather[0].description;
  const cityName = data.name;

  // extra fields
  const feelsLike = data.main.feels_like;
  const tempMin = data.main.temp_min;
  const tempMax = data.main.temp_max;
  const humidity = data.main.humidity;
  const pressure = data.main.pressure;
  const windSpeed = data.wind.speed;
  const windDeg = data.wind.deg;
  const visibility = data.visibility;
  const cloudiness = data.clouds.all;

  resultContainer.innerHTML = `
    <div class="weather-card">
      <h2>${cityName}</h2>
      <p>${description}</p>
      <p>Temperature: ${temp} °C</p>
      <p>Feels like: ${feelsLike} °C</p>
      <p>Min/Max: ${tempMin} °C / ${tempMax} °C</p>
      <p>Humidity: ${humidity}%</p>
      <p>Pressure: ${pressure} hPa</p>
      <p>Wind: ${windSpeed} m/s at ${windDeg}°</p>
      <p>Visibility: ${visibility / 1000} km</p>
      <p>Cloudiness: ${cloudiness}%</p>
    </div>
  `;


  // --- existing smooth background and effects code below ---
  const effectsContainer = document.getElementById("weatherEffects");
  effectsContainer.innerHTML = "";
  effectsContainer.classList.remove("active");
  document.querySelectorAll(".sun-rays").forEach(r => r.remove());

  // --- SMOOTH BACKGROUND ---
  const backgroundLayer = document.getElementById("backgroundLayer");
  let bgGradient = "";

  if (weather.includes("rain")) bgGradient = "linear-gradient(120deg, #5a8bdc, #a0c4ff)";
  else if (weather.includes("snow")) bgGradient = "linear-gradient(120deg, #e0eafc, #cfdef3)";
  else if (weather.includes("cloud")) bgGradient = "linear-gradient(120deg, #bdc3c7, #2c3e50)";
  else bgGradient = "linear-gradient(120deg, #fceabb, #f8b500)";

  backgroundLayer.style.background = bgGradient;
  backgroundLayer.classList.add("active");

  setTimeout(() => {
    document.body.style.background = bgGradient;
    backgroundLayer.classList.remove("active");
  }, 1600);

  // --- WEATHER EFFECTS ---
  if (weather.includes("rain")) {
    createRain(effectsContainer, 120);
  } else if (weather.includes("snow")) {
    createSnow(effectsContainer, 80);
  } else if (weather.includes("cloud")) {
    createClouds(effectsContainer, 7);
  } else {
    createSunRays(effectsContainer);
  }

  requestAnimationFrame(() => effectsContainer.classList.add("active"));
}