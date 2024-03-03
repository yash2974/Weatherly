import React from "react"
import "../src/App.css"
export default function Details(){
    return(
        <div className="mainCon">
            <div>
                <h1 className="title">Welcome to Weatherly!</h1>
                <p className="desc">Stay informed with our weather app, providing accurate forecasts for your location and beyond, anytime, anywhere.</p>
                <p className="desc">Our weather app offers accurate forecasts worldwide, detailed hourly and daily predictions.</p>
            </div>
            <div>
                <img src="../src/FujiwaraAnime.webp"></img>
            </div>
        </div>
    )
}