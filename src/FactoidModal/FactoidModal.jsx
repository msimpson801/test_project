import React, {useState} from 'react';
import styled from "@emotion/styled";
import {keyframes} from '@emotion/react';
import Nessie from "../Animals/Nessie.png"
import BigFoot from "../Animals/BigFoot.png"
import Dragon from "../Animals/Dragon.png"
import Yeti from "../Animals/Yeti.png"
import SpeechBubbleComponent from "../Common/SpeechBubble";

const scaleUp = keyframes`
    0% {
        transform: scale(0.5);
        opacity: 0;
    }
    100% {
        transform: scale(1);
        opacity: 1;
    }
`;


const StyledHeading = styled.h1`
    position: relative;
    cursor: pointer;
    padding: 1rem;
`;

const popInSubtle = keyframes` 0% {
                                   transform: scale(0.8) translateY(20px);
                                   opacity: 0;
                               }
                                   60% {
                                       transform: scale(1.05) translateY(0);
                                       opacity: 1;
                                   }
                                   100% {
                                       transform: scale(1) translateY(0);
                                   } `;
const BigFootImage = styled.img` height: 150px;
    animation: ${popInSubtle} 1s ease-in-out forwards; /* Apply the subtle pop-in animation */ `

const Factoid = styled.div`
    padding: 2rem; /* Increased padding for more space */
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: ${props => (props.background ? props.background : 'hotpink')};
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Subtle shadow for depth */
    animation: ${scaleUp} 0.5s ease-in-out; /* Apply the scale animation */
    opacity: 0; /* Ensure hidden initially */
    animation-fill-mode: forwards; /* Maintain end state after animation */
    position: relative;
    min-width: 300px; /* Ensure minimum width */
`;


const ModalBackground = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5); /* Semi-transparent black background */
    z-index: 100; /* Ensure it sits behind the Factoid component */
    display: flex;
    align-items: center;
    justify-content: center;
`;

const CloseButton = styled.button`
    position: absolute;
    top: 10px;
    right: 10px;
    background: none;
    border: none;
    font-size: 1.5rem;
    cursor: pointer;
    z-index: 102; /* Ensure it sits above the Factoid component */
`;

export default function FactoidModal({title, factText,children}) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const getPicture = () => {

        if (title?.includes("2")) {
            return Nessie
        }

        if (title?.includes("3")) {
            return Dragon
        }

        return Yeti;
    }


    return (
        <div style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center"}}>
            <StyledHeading onClick={openModal}>{title}</StyledHeading>
            {isModalOpen && (
                <ModalBackground >
                    <Factoid background={"#eff8ff"}>
                        <CloseButton onClick={closeModal}>×</CloseButton>
                        <SpeechBubbleComponent text={factText}/>
                        <BigFootImage src={getPicture()}/>
                    </Factoid>
                </ModalBackground>
            )}
            {children}
        </div>
    );
}
