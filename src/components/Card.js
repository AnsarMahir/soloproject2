import React from "react";
import '../App.css';


export default function Card(props){
return(
    <>
    <div id="main-wrapper">
        <img id="card--img" src={`${process.env.PUBLIC_URL}/images/${props.img}`}></img>
        <div id="text-wrapper">
            <div id="location">
                <img src={`${process.env.PUBLIC_URL}/Fill219.png`}></img>
                <span id="location--text">{props.location}</span>
                <a id="google--map" href={props.link}>View on Google Maps</a>
            </div>
            <p id="title">{props.title}</p>
            <p id="date">{props.date}</p>
            <p id="description">{props.explanation}</p>
        </div>
    </div>
    <hr></hr>
    </>
)
}