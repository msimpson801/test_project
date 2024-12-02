import React from 'react';
import styled from '@emotion/styled'
import SleepyKoala from "../Animals/SleepyKoala.png"
import Sloth from "../Animals/Sloth.png"
import Tortoise from "../Animals/Tortoise.png"
import Manatee from "../Animals/Manatee.png"
import Panda from "../Animals/Panda.png"
import Snail from "../Animals/Snail.png"
import Worm from "../Animals/Worm.png"
import useScrollPosition from "./useScrollPosition";
import AnimalCard from "./AnimalCard";


const SlowBoisHeading = styled.h1`
    font-size: 4rem;
    font-weight: bold;
    text-align: center;
    margin-bottom: 2rem;
    top: 0;
    background-color: inherit; /* Match the background color of the parent container */
`;




const StyledLayout = styled.div`
    min-height: 100vh;
    min-width: 100vw;
    height: 100%;
    background-color: ${({scrollPos}) => {
        if (scrollPos < 200) return '#CCE5FF'; // Pastel Pink 
        else if (scrollPos < 500) return '#FFFFCC'; // Pastel Yellow 
        else if (scrollPos < 800) return '#ffcceb'; // Pastel Blue 
        else if (scrollPos < 1100) return '#CCFFCC'; // Pastel Pink 
        else if (scrollPos < 1300) return '#CCCCFF'; // Pastel Green 
        else return '#ffe3cc'; // Pastel Purple
    }};
    transition: background-color 0.25s ease-in-out;
    padding-top: 20px;
    padding-bottom: 20px;
    margin-top: -20px;
    margin-bottom: -20px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const slothInfo = {
    url: Sloth,
    title: "Sleepy Sloth",
    description: "Taking life one slow step at a time.",
    backgroundColor: "#ffe0c4" // Pastel Pink
}

const tortoiseInfo = {
    url: Tortoise,
    title: "Tranquil Tortoise",
    description: "Patience is a virtue, speed is not a necessity.",
    backgroundColor: "#bfeddd" // Pastel Green
}

const manateeInfo = {
    url: Manatee,
    title: "Mellow Manatee",
    description: "Gliding through life at a leisurely pace.",
    backgroundColor: "#e2d2ff" // Pastel Orange
}

const koalaInfo = {
    url: SleepyKoala,
    title: "Catatonic Koala",
    description: "Living in the slow lane, high up in the trees.",
    backgroundColor: "#B2D3C2" // Pastel Turquoise
}

const wormInfo = {
    url: Worm,
    title: "Weary Worm",
    description: "Slowly tunneling through the earth, one inch at a time.",
    backgroundColor: "#ffd2fd" // Pastel Purple
}

const pandaInfo = {
    url: Panda,
    title: "Placid Panda",
    description: "Enjoying a slow, bamboo-filled day.",
    backgroundColor: "#E3E0F7" // Pastel Lavender
}

const snailInfo = {
    url: Snail,
    title: "Sleepy snail",
    description: "Dozing in my shell, leaving a dreamy trail",
    backgroundColor: "#fae7b2" // Pastel Lavender
}

function ColourChangingLayout ({scrollPos, children}) {
    const {scrollPosition} = useScrollPosition();

    return (
        <StyledLayout scrollPos={scrollPosition}>
            {children}
        </StyledLayout>
    )
}


function BackgroundColourChangeOnScroll ()  {

    return (
        <ColourChangingLayout>
            <SlowBoisHeading>Slow Components</SlowBoisHeading>
            <AnimalCard animalInfo={slothInfo}/>
            <AnimalCard animalInfo={tortoiseInfo}/>
            <AnimalCard animalInfo={manateeInfo}/>
            <AnimalCard animalInfo={koalaInfo}/>
            <AnimalCard animalInfo={wormInfo}/>
            <AnimalCard animalInfo={pandaInfo}/>
            <AnimalCard animalInfo={snailInfo}/>
        </ColourChangingLayout>
    );
};


export default BackgroundColourChangeOnScroll;