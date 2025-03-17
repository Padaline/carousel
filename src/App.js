import React from "react";
import Slider from "./Slider";
import img1 from "./img/Image1.png";
import img2 from "./img/Image2.png";
import vid1 from "./img/Video1.mp4";
import svg from "./img/logo.svg";
import { buildQueries } from "@testing-library/dom";

const slidesData = [
    {
        content: (
            <img src={img1} alt="OMG U JUST WON A CAR"/>
        )
    },
    {
        content: (
            <img src={img2} alt="LEBRON IS MY HERO"/>
        )
    },
    {
        content: (
            <video src={vid1} autoPlay={true} muted={true} loop={true} controls={false} alt="SHAQ SAT ON ME" />
        )
    },
    {
        content: (
            <img src={svg} alt="REACT IS KILLING ME INSIDE"/>
        )
    },

    {
        content: (
            <div>
            <h1 style={{color: 'white'}}> 
                TEST
            </h1>
            <button style={{color: 'blue'}} onClick={() => {console.log("BUTTON HAS BEEN PUSHED")}}>
                CLICK ME
            </button>
            </div>
        )
    }
];

function App () {
    return (
        <div>
            <Slider contentList={slidesData} height="50vh" AutoPlayArray = {[true, 2000]} loopStatus={true}/>
        </div>
    );
}

export default App;

//