import React, {useState, useEffect} from 'react';
import styled from '@emotion/styled'
import {useRenderCount} from "../Common/useRenderCount";
import SleepyKoala from "../Animals/SleepyKoala.png"
import Sloth from "../Animals/Sloth.png"
import Tortoise from "../Animals/Tortoise.png"
import Manatee from "../Animals/Manatee.png"
import Panda from "../Animals/Panda.png"
import Snail from "../Animals/Snail.png"
import Worm from "../Animals/Worm.png"


const Card = styled.div` border-radius: 10px;
    background-color: ${({ backgroundColor }) => backgroundColor || '#f8f4e5'};
    padding: 20px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    max-width: 300px;
    text-align: center;
    margin: 2rem;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const AnimalImage = styled.img` width: 100px;
    height: 100px;
    border-radius: 50%;
    object-fit: cover;
    margin-bottom: 15px;
    background-color: #ffffff;
`;


const Title = styled.h2` font-size: 1.5em;
    margin-bottom: 10px;
    color: #4f4f4f; `;
const Description = styled.p` font-size: 1em;
    color: #4f4f4f; `



const SlowBoisHeading = styled.h1`
    font-size: 4rem;
    font-weight: bold;
    text-align: center;
    margin-bottom: 2rem;
    top: 0;
    background-color: inherit; /* Match the background color of the parent container */
`;


const Bubble = styled.div`
    top: 0;
    border-radius: 15px;
    padding: 8px;
    position: relative;
    margin-top: -40px;
    margin-bottom: 10px;
    background-color: #fff2f4;
    min-width: 50%;


    &::after {
        content: '';
        position: absolute;
        width: 0;
        height: 0;
        border-style: solid;
        border-width: 0 10px 10px 10px;
        border-color: transparent transparent #fff2f4 transparent;
        bottom: -8px;
        right: 50px;
        transform: rotate(180deg);
    }
`;



function SpeechBubbleComponent({ text }) {

    return (
        <Bubble>
            {text}
        </Bubble>
    );
}



function AnimalCard({animalInfo}) {
    const renderCount = useRenderCount()
    const {url, title, description, backgroundColor} = animalInfo

    return (
        <Card backgroundColor={backgroundColor}>
            <SpeechBubbleComponent text={`Renders: ${renderCount}`} key={renderCount}/>
            <AnimalImage src={url} alt="Cute Sloth"/>
            <Title>
                {title}
            </Title>
            <Description>
                {description}
            </Description>
        </Card>
    )
}



const Container = styled.div`
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


const ColorChangingComponent = () => {

    const [scrollPosition, setScrollPosition] = useState(0);
    const handleScroll = () => {
        setScrollPosition(window.scrollY);
    };
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



    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [])


    return (
        <Container scrollPos={scrollPosition}>
            <SlowBoisHeading>Slow Components</SlowBoisHeading>
            <AnimalCard animalInfo={slothInfo}/>
            <AnimalCard animalInfo={tortoiseInfo}/>
            <AnimalCard animalInfo={manateeInfo}/>
            <AnimalCard animalInfo={koalaInfo}/>
            <AnimalCard animalInfo={wormInfo}/>
            <AnimalCard animalInfo={pandaInfo}/>
            <AnimalCard animalInfo={snailInfo}/>
        </Container>
    );
};

// Main App
const BackgroundColourChangeOnScroll = () => {

    return (
        <ColorChangingComponent/>
    );
};


export default BackgroundColourChangeOnScroll;