const apiKey = 'YOUR_OPENWEATHERMAP_API_KEY'; // <-- Replace with your API key
const cityInput = document.getElementById('cityInput');
const searchBtn = document.getElementById('searchBtn');
const weatherResult = document.getElementById('weatherResult');

async function fetchWeather(city) {
  try {
    weatherResult.textContent = 'Loading...';
    const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${apiKey}&units=metric`);
    if (!res.ok) throw new Error('City not found');
    const data = await res.json();
    weatherResult.innerHTML = `
      <div><strong>${data.name}</strong></div>
      <div>${data.weather[0].main} <img class="weather-icon" src="https://openweathermap.org/img/wn/${data.weather[0].icon}.png"></div>
      <div>Temp: ${data.main.temp}°C</div>
    `;
  } catch (e) {
    weatherResult.textContent = e.message;
  }
}

searchBtn.addEventListener('click', () => {
  const city = cityInput.value.trim();
  if (city) fetchWeather(city);
});
cityInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    const city = cityInput.value.trim();
    if (city) fetchWeather(city);
  }
});
