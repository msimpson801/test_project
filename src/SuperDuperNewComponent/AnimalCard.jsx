import React from 'react';
import styled from '@emotion/styled'
import {useRenderCount} from "../Common/useRenderCount";
import BlueChameleon from "../Chamaleon/BlueChameleon.png"
import GreenChameleon from "../Chamaleon/GreenChameleon.png"
import PinkChameleon from "../Chamaleon/PinkChameleon.png"
import PurpleChameleon from "../Chamaleon/PurpleChameleon.png"


const Card = styled.div` border-radius: 10px;
    background-color: ${({backgroundColor}) => backgroundColor || '#f8f4e5'};
    padding: 20px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    max-width: 300px;
    min-width: 300px;
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


function SpeechBubbleComponent({text}) {

    return (
        <Bubble>
            {text}
        </Bubble>
    );
}

const chameleonImageMap = {
    '#CCE5FF': BlueChameleon,
    '#CCFFCC': GreenChameleon,
    '#ffcceb': PinkChameleon,
    '#CCCCFF': PurpleChameleon,
};

export default function AnimalCard({animalInfo, backgroundColor}) {
    const renderCount = useRenderCount();
    const {title, description} = animalInfo;
    let imageUrl = animalInfo.url;
    if (title === 'Chameleon' && backgroundColor) {
        imageUrl = chameleonImageMap[backgroundColor] || animalInfo.url;
    }

    return (
        <Card backgroundColor={backgroundColor}>
            <SpeechBubbleComponent text={`Renders: ${renderCount}`} key={renderCount}/>
            <AnimalImage src={imageUrl} alt="Cute Sloth"/>
            <Title>
                {title}
            </Title>
            <Description>
                {description}
            </Description>
        </Card>
    )
}


;