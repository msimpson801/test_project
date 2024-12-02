import AnimalCard from "../SuperDuperNewComponent/AnimalCard";
import React, {useState} from "react";
import Sloth from "../Animals/Sloth.png";

import styled from "@emotion/styled";
import Button from "../Common/Button";

const slothInfo = {
    url: Sloth,
    title: "Sleepy Sloth",
    description: "Taking life one slow step at a time.",
}

const chameleonInfo = {
        title: "Chameleon",
        description: "Changing colors with style.",
}

    const StyledLayout = styled.div` min-height: 100vh;
        min-width: 100vw;
        height: 100%;
        background-color: ${({backgroundColor}) => backgroundColor};
        transition: background-color 0.25s ease-in-out;
        padding-top: 20px;
        padding-bottom: 20px;
        margin-top: -20px;
        margin-bottom: -20px;
        display: flex;
        flex-direction: column;
        align-items: center; `;

    const pastelColors = ['#CCE5FF', '#ffcceb', '#CCFFCC', '#CCCCFF'];
    const getNextPastelColor = (currentColorIndex) => {
        return (currentColorIndex + 1) % pastelColors.length;
    };


    function ColourChangingLayout({children}) {
        const [colorIndex, setColorIndex] = useState(0);
        const [backgroundColor, setBackgroundColor] = useState(pastelColors[colorIndex]);
        const handleChangeColor = () => {
            const nextIndex = getNextPastelColor(colorIndex);
            setColorIndex(nextIndex);
            setBackgroundColor(pastelColors[nextIndex]);
        };


        return (<>

            <StyledLayout
                backgroundColor={backgroundColor}>
                <Button onClick={handleChangeColor} colour="#647df9">Change colour</Button>
                {React.Children.map(children, child => child.type === AnimalCard && child.props.animalInfo === chameleonInfo ? React.cloneElement(child, {backgroundColor}) : child)}
            </StyledLayout>
        </>);
    }


    export default function ColourChangeButton() {

        return (
            <ColourChangingLayout>
                <AnimalCard animalInfo={slothInfo}/>
                <AnimalCard animalInfo={chameleonInfo}/>
            </ColourChangingLayout>
        )
    }