import React,{ useRef } from "react"
import "../src/App.css"

export default function(){

    const videoRef = useRef(null);
    const apiKey="41dd429e1c9498e03ca54b6022d62d49";

    const [weatherData,SetWeatherData] = React.useState({
        degree:"00",
        weather:"Weather",
        AQI:"AQI"

    })
    // https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={apiKey}
    function backgroundHandler(){
        if(videoRef.current.paused){
        videoRef.current.play();}
        else{
            videoRef.current.pause()
        }
    }
    return(
        <div className="leftCon">
            <div className="weatherBox">
                <video id="back-video" ref={videoRef} src="../src/back.mp4" loop></video> 
                <div className="caption">
                <button id="playVideo"onClick={backgroundHandler}><h1 className="searchTitle">Search Location</h1></button>
                <input placeholder=" Enter Location"></input>
                <i className="fa-solid fa-moon fa-2xl"></i>
                <div className="info">
                    <div className="degreeCond"><h2>{weatherData.degree}°<span id="degree">c</span></h2></div>
                    <div className="weatherCondition">
                        <div ><h2 id="weatherInfo">{weatherData.weather}</h2></div>
                        <div><h2 id="aqi">{weatherData.AQI}</h2></div>
                    </div>
                </div>
                
                </div>

            </div>
        </div>
    )
}