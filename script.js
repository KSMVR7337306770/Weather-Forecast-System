async function getWeather() {
    const city = document.getElementById('cityInput').value;
    const apiKey = "YOUR_API_KEY";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error("City not found");
        
        const data = await response.json();
        
        document.getElementById('cityName').innerText = `Weather in ${data.name}`;
        document.getElementById('description').innerText = `Description: ${data.weather[0].description}`;
        document.getElementById('temperature').innerText = `Temperature: ${data.main.temp}°C`;
        document.getElementById('humidity').innerText = `Humidity: ${data.main.humidity}%`;
        document.getElementById('windSpeed').innerText = `Wind Speed: ${data.wind.speed} m/s`;
    } catch (error) {
        alert("Error fetching weather data: " + error.message);
    }
}
