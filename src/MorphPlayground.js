import {useEffect, useState} from "react";
import anime from 'animejs';

const moonPath =
    "M18 27.5C18 42.6878 27.5 55 27.5 55C12.3122 55 0 42.6878 0 27.5C0 12.3122 12.3122 0 27.5 0C27.5 0 18 12.3122 18 27.5Z";
const circlePath =
    "M55 27.5C55 42.6878 42.6878 55 27.5 55C12.3122 55 0 42.6878 0 27.5C0 12.3122 12.3122 0 27.5 0C42.6878 0 55 12.3122 55 27.5Z";

export default function  DarkModeButton  ({toggleStatus})  {


    const morphTo = (timeline, toggler) => {
        timeline
            .add({
                targets: ".circle",
                d: [{ value: toggler === "day" ? circlePath : moonPath }],
            })
            .add(
                {
                    targets: "#darkMode",
                    rotate: toggler === "day" ? 40 : 320,
                },
                "-=700"
            )
    };


    useEffect(() => {
        const timeline = anime.timeline({
            duration: 750,
            easing: "easeOutExpo",
        });

        morphTo(timeline, toggleStatus);
    } , [toggleStatus])

    return (
        <>
            <div style={{width: "45px", height: "45px", backgroundColor: "transparent"}}>
                <svg id="darkMode" width="45" height="45" viewBox="0 0 55 55" fill="none"
                     xmlns="http://www.w3.org/2000/svg">
                    <path className="circle"
                          d={circlePath}
                          fill="#FFC700"/>
                </svg>
            </div>

        </>
    );
};