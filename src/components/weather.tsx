import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import axios from 'axios';
import 'leaflet/dist/leaflet.css';
import '../App.css'; // Add this for styling

const AshgabatWeatherMap = () => {
  // Coordinates for Ashgabat
  const ashgabatCoords = [37.9601, 58.3261];
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState<string>('');

  // OpenWeatherMap API Key
  const API_KEY = '3c2f7b0833f17efd238e8b7faa151c5f'; // Replace with your API key

  useEffect(() => {
    // Fetch weather data for Ashgabat
    const fetchWeather = async () => {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?lat=${ashgabatCoords[0]}&lon=${ashgabatCoords[1]}&appid=${API_KEY}&units=metric`
        );
        setWeather(response.data);
      } catch (err) {
        setError('Failed to fetch weather data.');
      }
    };

    fetchWeather();
  }, []);

  return (
    <div className="container">
      {/* Weather Section */}
      <div className="weather-section">
        <h2>Weather in Ashgabat</h2>
        {error && <p className="error">{error}</p>}
        {!error && !weather && <p>Loading weather data...</p>}
        {weather && (
          <div className="weather-details">
            <p>
              <strong>Temperature:</strong> {weather.main.temp}°C
            </p>
            <p>
              <strong>Condition:</strong> {weather.weather[0].description}
            </p>
            <p>
              <strong>Humidity:</strong> {weather.main.humidity}%
            </p>
            <p>
              <strong>Wind Speed:</strong> {weather.wind.speed} m/s
            </p>
          </div>
        )}
      </div>

      {/* Map Section */}
      <div className="map-section">
        <h2>Map of Ashgabat</h2>
        <MapContainer
          center={ashgabatCoords}
          zoom={10}
          style={{ height: '400px', width: '100%' }}
        >
          {/* Base Map Layer */}
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />

          {/* Weather Layer - Clouds */}
          <TileLayer
            url={`https://tile.openweathermap.org/map/clouds_new/{z}/{x}/{y}.png?appid=${API_KEY}`}
            attribution='Map data &copy; <a href="https://openweathermap.org/">OpenWeatherMap</a>'
          />

          {/* Marker for Ashgabat */}
          <Marker position={ashgabatCoords}>
            <Popup>
              <strong>Ashgabat</strong>
              <br />
              Capital of Turkmenistan
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
};

export default AshgabatWeatherMap;
