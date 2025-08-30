// Mock weather API
export async function getWeather(city, apiKey) {
  const types = [
    { main: "sunny", description: "Clear sky" },
    { main: "rainy", description: "Light rain" },
    { main: "snowy", description: "Snow flurries" },
    { main: "cloudy", description: "Overcast clouds" }
  ];
  const random = types[Math.floor(Math.random() * types.length)];
  return {
    name: city,
    main: { temp: Math.floor(Math.random() * 30) },
    weather: [random]
  };
}

// Display weather + effects
export function displayWeather(data, resultContainer) {
  const temp = data.main.temp;
  const weather = data.weather[0].main.toLowerCase();
  const description = data.weather[0].description;
  const cityName = data.name;

  resultContainer.innerHTML = `
    <h2>${cityName}</h2>
    <p>${description}</p>
    <p>${temp} °C</p>
  `;

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
    document.body.style.background = bgGradient; // permanently apply
    backgroundLayer.classList.remove("active");
  }, 1600); // slightly longer than CSS transition

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

// RAIN
function createRain(container, count) {
  for (let i = 0; i < count; i++) {
    const drop = document.createElement("div");
    drop.className = "raindrop";
    drop.style.left = Math.random() * 100 + "%";
    drop.style.top = -300 - Math.random() * 50 + "px";
    drop.style.height = 20 + Math.random() * 40 + "px";
    drop.style.opacity = 0.4 + Math.random() * 0.4;
    drop.style.animationDuration = 0.5 + Math.random() * 1.5 + "s";
    drop.style.animationDelay = Math.random() * 2 + "s";
    container.appendChild(drop);
  }
}

// SNOW
function createSnow(container, count) {
  for (let i = 0; i < count; i++) {
    const flake = document.createElement("div");
    flake.className = "snowflake";
    flake.style.left = Math.random() * 100 + "%";
    flake.style.top = -300 - Math.random() * 50 + "px";
    flake.style.width = 4 + Math.random() * 10 + "px";
    flake.style.height = 4 + Math.random() * 10 + "px";
    flake.style.opacity = 0.5 + Math.random() * 0.5;
    flake.style.animationDuration = 4 + Math.random() * 6 + "s";
    flake.style.animationDelay = Math.random() * 5 + "s";
    container.appendChild(flake);
  }
}

// CLOUDS
function createClouds(container, count) {
  for (let i = 0; i < count; i++) {
    const cloud = document.createElement("div");
    cloud.className = "cloud";
    cloud.style.top = 50 + Math.random() * 200 + "px";
    cloud.style.width = 200 + Math.random() * 200 + "px";
    cloud.style.height = 80 + Math.random() * 50 + "px";
    cloud.style.opacity = 0.5 + Math.random() * 0.5;
    cloud.style.animationDuration = 60 + Math.random() * 60 + "s";
    cloud.style.animationDelay = Math.random() * 30 + "s";
    container.appendChild(cloud);

    const mini = document.createElement("div");
    mini.className = "cloud";
    mini.style.top = cloud.style.top;
    mini.style.width = cloud.offsetWidth * 0.6 + "px";
    mini.style.height = cloud.offsetHeight * 0.6 + "px";
    mini.style.opacity = 0.3 + Math.random() * 0.3;
    mini.style.animationDuration = cloud.style.animationDuration;
    mini.style.animationDelay = cloud.style.animationDelay;
    container.appendChild(mini);
  }
}

// SUNRAYS
function createSunRays(container) {
  const sun = document.createElement("div");
  sun.className = "sun-rays";
  for (let i = 0; i < 60; i++) {
    const ray = document.createElement("div");
    ray.className = "ray";
    const initial = Math.random() * 360;
    ray.style.setProperty('--initial-rotate', `${initial}deg`);
    ray.style.animationDuration = (2 + Math.random() * 3) + 's';
    ray.style.width = (1400 + Math.random() * 400) + 'px';
    ray.style.opacity = 0.4 + Math.random() * 0.5;
    sun.appendChild(ray);
  }
  container.appendChild(sun);
}
