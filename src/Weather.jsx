import React,{ useRef } from "react"
import "../src/App.css"

export default function(){

    const videoRef = useRef(null);

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
                    <div className="degreeCond"><h2>00°<span id="degree">c</span></h2></div>
                    <div className="weatherCondition">
                        <div ><h2 id="weatherInfo">Weather</h2></div>
                        <div><h2 id="aqi">AQI</h2></div>
                    </div>
                </div>
                
                </div>

            </div>
        </div>
    )
}