// Configuración de la API
const API_KEY = 'cbc2fe1db9719e7fe6d4f25d2ca18cb1'; // Clave gratuita de OpenWeatherMap
const API_URL = 'https://api.openweathermap.org/data/2.5/weather';

// Elementos del DOM
const cityInput = document.getElementById('city-input');
const searchButton = document.getElementById('search-button');
const weatherContainer = document.getElementById('weather-container');
const errorContainer = document.getElementById('error-container');

// Event Listeners
searchButton.addEventListener('click', searchWeather);
cityInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        searchWeather();
    }
});

// Función principal para buscar el clima
function searchWeather() {
    const city = cityInput.value.trim();
    
    if (city === '') {
        showError('Por favor, ingresa el nombre de una ciudad');
        return;
    }
    
    fetchWeatherData(city);
}

// Función para obtener datos del clima desde la API
async function fetchWeatherData(city) {
    try {
        showLoading();
        
        const response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric&lang=es`);
        
        if (!response.ok) {
            if (response.status === 404) {
                throw new Error('Ciudad no encontrada. Por favor, verifica el nombre e intenta de nuevo.');
            } else {
                throw new Error('Ha ocurrido un error al buscar el clima. Inténtalo de nuevo más tarde.');
            }
        }
        
        const data = await response.json();
        displayWeatherData(data);
        hideError();
    } catch (error) {
        showError(error.message);
        hideWeatherContainer();
    } finally {
        hideLoading();
    }
}

// Función para mostrar los datos del clima
function displayWeatherData(data) {
    // Formatear datos
    const cityName = data.name;
    const country = data.sys.country;
    const temperature = Math.round(data.main.temp);
    const feelsLike = Math.round(data.main.feels_like);
    const humidity = data.main.humidity;
    const windSpeed = Math.round(data.wind.speed * 3.6); // Convertir de m/s a km/h
    const description = data.weather[0].description;
    const icon = data.weather[0].icon;
    
    // Crear HTML con los datos del clima usando clases de Tailwind
    const weatherHTML = `
        <img class="w-24 h-24 mx-auto mb-4" src="https://openweathermap.org/img/wn/${icon}@2x.png" alt="${description}">
        <h2 class="text-2xl font-bold text-gray-800 mb-1">${cityName}, ${country}</h2>
        <p class="text-gray-600 capitalize mb-4">${description}</p>
        <div class="text-5xl font-bold text-red-500 mb-6">${temperature}°C</div>
        
        <div class="grid grid-cols-3 gap-4 mt-6">
            <div class="text-center">
                <i class="fas fa-thermometer-half text-blue-500 text-xl mb-2"></i>
                <p class="text-gray-500 text-sm">Sensación térmica</p>
                <p class="text-gray-800 font-semibold">${feelsLike}°C</p>
            </div>
            <div class="text-center">
                <i class="fas fa-tint text-blue-500 text-xl mb-2"></i>
                <p class="text-gray-500 text-sm">Humedad</p>
                <p class="text-gray-800 font-semibold">${humidity}%</p>
            </div>
            <div class="text-center">
                <i class="fas fa-wind text-blue-500 text-xl mb-2"></i>
                <p class="text-gray-500 text-sm">Viento</p>
                <p class="text-gray-800 font-semibold">${windSpeed} km/h</p>
            </div>
        </div>
    `;
    
    // Actualizar el contenedor del clima y mostrarlo
    weatherContainer.innerHTML = weatherHTML;
    weatherContainer.classList.remove('hidden');
}

// Funciones auxiliares para gestionar estados y errores
function showError(message) {
    errorContainer.textContent = message;
    errorContainer.classList.remove('hidden');
}

function hideError() {
    errorContainer.classList.add('hidden');
}

function hideWeatherContainer() {
    weatherContainer.classList.add('hidden');
}

function showLoading() {
    searchButton.innerHTML = '<i class="fas fa-spinner fa-spin mr-1"></i>';
    searchButton.disabled = true;
}

function hideLoading() {
    searchButton.innerHTML = '<i class="fas fa-search mr-1"></i> Buscar';
    searchButton.disabled = false;
}

// Iniciar con la geolocalización si está disponible (opcional)
document.addEventListener('DOMContentLoaded', () => {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            position => {
                const lat = position.coords.latitude;
                const lon = position.coords.longitude;
                fetchWeatherByCoordinates(lat, lon);
            },
            error => {
                console.log('Error en la geolocalización:', error);
            }
        );
    }
});

// Función para obtener clima por coordenadas
async function fetchWeatherByCoordinates(lat, lon) {
    try {
        showLoading();
        
        const response = await fetch(`${API_URL}?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric&lang=es`);
        
        if (!response.ok) {
            throw new Error('Ha ocurrido un error al obtener el clima de tu ubicación.');
        }
        
        const data = await response.json();
        displayWeatherData(data);
    } catch (error) {
        console.error('Error:', error);
    } finally {
        hideLoading();
    }
}