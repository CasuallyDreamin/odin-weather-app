import { getWeather, displayWeather } from './weather.js';

const apiKey = "11aca38e4a80563f0eae33df5f0a1a38";
const form = document.getElementById("weatherForm");
const cityInput = document.getElementById("cityInput");
const weatherResult = document.getElementById("weatherResult");

form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const city = cityInput.value.trim();
    if (!city) return;

    try {
        const data = await getWeather(city, apiKey);
        displayWeather(data, weatherResult);
    } catch (err) {
        weatherResult.innerHTML = `<p>${err.message}</p>`;
        document.body.style.background = "#999"; // fallback
    }
});
