import React from "react"
import Weather from "../src/Weather.jsx"
import Details from "../src/Details.jsx"
import "../src/App.css"

export default function App(){

  return(
    <div className="page">
      <div className="left">
      <Weather /></div>
      <div className="right">
      <Details /></div>
    </div>
  )
}

