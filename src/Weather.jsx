import React, { useRef, useState, useEffect } from "react";
import "../src/App.css";

export default function WeatherComponent() {
  const videoRef = useRef(null);
  const apiKey = "41dd429e1c9498e03ca54b6022d62d49";

  const [weatherData, setWeatherData] = useState({
    degree: "00",
    weather: "Weather",
    humidity:"Humidity"
  });

  useEffect(() => {
    fetchWeatherData("Delhi"); // Default city name
  }, []);

  function fetchWeatherData(cityName) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        const degree = Math.round(data.main.temp - 273.15); // Convert Kelvin to Celsius
        const weather = data.weather[0].main;
        const humidity = data.main.humidity +"%"; // Placeholder for AQI, you can fetch actual AQI data if needed
        setWeatherData({ degree, weather,humidity });
      })
      .catch(error => {
        console.error("Error fetching weather data:", error);
        alert("Enter a valid location.")
      });
  }

  function backgroundHandler() {
    if (videoRef.current.paused) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
  }

  return (
    <div className="leftCon">
      <div className="weatherBox">
        <video id="back-video" ref={videoRef} src="./src/back.mp4" loop></video>
        <div className="caption">
          <button id="playVideo" onClick={backgroundHandler}><h1 className="searchTitle">Search Location</h1></button>
          <input id="searchBox" placeholder="Delhi" onKeyPress={(e) => {
            if (e.key === 'Enter') {
              fetchWeatherData(e.target.value);
            }
          }} />
          <i className="fa-solid fa-moon fa-2xl"></i>
          <div className="info">
            <div className="degreeCond"><h2>{weatherData.degree}°<span id="degree">c</span></h2></div>
            <div className="weatherCondition">
              <div ><h2 id="weatherInfo">{weatherData.weather}</h2></div>
              <div><h2 id="aqi">{weatherData.humidity}</h2></div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
