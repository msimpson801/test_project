import {useEffect} from "react";

import anime from 'animejs';


const starPath =
    "M112,155C0,500 0,500 -112,155C-476,155 -476,155 -182,-59C-294,-405 -294,-405 0,-191C294,-405 294,-405 182,-59C476,155 476,155 112,155";

const heartPath = "M354,155C0,509 0,509 -354,155C-452,57 -452,-101 -354,-199C-256,-297 -98,-297 0,-199C98,-297 256,-297 354,-199C452,-101 452,57 354,155"



export default function StarHeartColourOnly({colour, shape}) {

    return (
        <>
            <div style={{width: "55px", height: "55px", backgroundColor: "transparent"}}>
                <svg viewBox="-500 -500 1000 1000">
                    <path id="shape"
                          className="star"
                          d={shape === "star" ? starPath: heartPath}
                          fill={colour}></path>
                </svg>
            </div>
        </>
    );

}

