document.getElementById('getWeatherBtn').addEventListener('click', function() {
    const city = document.getElementById('cityInput').value;
    const apiKey = '463aec8f56ba8937573623363ab2424d';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('City not found');
            }
            return response.json();
        })
        .then(data => {
            document.getElementById('cityName').textContent = data.name;
            document.getElementById('weatherDescription').textContent = data.weather[0].description;
            document.getElementById('temperature').textContent = data.main.temp;
            document.getElementById('humidity').textContent = data.main.humidity;
            document.querySelector('.weather-info').style.display = 'block';
        })
        .catch(error => {
            alert(error.message);
        });
});
