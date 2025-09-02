// RAIN
export function createRain(container, count) {
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
export function createSnow(container, count) {
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
export function createClouds(container, count) {
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
export function createSunRays(container) {
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
