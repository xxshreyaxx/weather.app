const searchButton = document.getElementById('search-button');
const searchInput = document.getElementById('search-input');
const weatherContainer = document.getElementById('weather-container');

// Function to fetch weather data from the API
function fetchWeatherData(location) {
  const apiKey = 'YOUR_API_KEY'; // Replace with your own API key
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`;

  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      displayWeatherData(data);
    })
    .catch(error => {
      console.log('Error:', error);
    });
}

// Function to display weather data
function displayWeatherData(data) {
  weatherContainer.innerHTML = '';

  const city = data.name;
  const temperature = data.main.temp;
  const humidity = data.main.humidity;
  const windSpeed = data.wind.speed;

  const weatherInfo = document.createElement('div');
  weatherInfo.innerHTML = `
    <h2>${city}</h2>
    <p>Temperature: ${temperature}°C</p>
    <p>Humidity: ${humidity}%</p>
    <p>Wind Speed: ${windSpeed} m/s</p>
  `;

  weatherContainer.appendChild(weatherInfo);
}

// Event listener for search button click
searchButton.addEventListener('click', () => {
  const location = searchInput.value;
  if (location) {
    fetchWeatherData(location);
  }
});
