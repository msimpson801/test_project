import styled from '@emotion/styled';
import React, {useEffect, useState} from 'react';
import { useRenderCount } from '../Common/useRenderCount';
import RerenderText from '../Common/RerenderText';
import FastCheetah from '../Animals/FastCheetah.png';
import SpeechBubbleComponent from '../Common/SpeechBubble';
import FactoidModal from '../FactoidModal/FactoidModal';
import SpeechBubbleForForm from "./SpeechBubbleForForm";
import {keyframes} from "@emotion/react";


// Define the keyframes for the animation
const fadeInScale = keyframes`
  from {
    opacity: 0;
    transform: scale(0);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`;

// Styled component with conditional animation
const AwesomeTitle = styled.h2`
  color: #4F4F4F;
  margin-bottom: 20px;
  text-align: center;
  opacity: ${({ animate }) => (animate ? '1' : '0')};
    scale:  ${({ animate }) => (animate ? '1' : '0')};
  word-wrap: break-word;
  word-break: break-word;
  animation: all 10s ease-in-out forwards;
`;


// Pop-in animation keyframes
const popIn = keyframes`
  0% {
    opacity: 0;
    transform: scale(0.5);
  }
  70% {
    opacity: 0.8;
    transform: scale(1.1);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
`;

// Styled component with pop-in animation
const AnimatedText = styled.h2`
    display: inline-block;
    opacity: 0;
    animation: ${popIn} 0.6s ease-out forwards;
    animation-delay: ${props => props.delay || '0ms'};
    color: ${props => props.color || '#4F4F4F'};
    margin-bottom: 20px;
    text-align: center;
`;

// Example usage component
const AnimatedTextComponent = ({
                                   children,
                                   color,
                                   fontSize,
                                   fontWeight,
                                   delay
                               }) => {
    return (
        <AnimatedText
            color={color}
            fontSize={fontSize}
            fontWeight={fontWeight}
            delay={delay}
        >
            {children}
        </AnimatedText>
    );
};

// Other styled components
const Card = styled.div`
  border-radius: 10px;
  background-color: ${({ backgroundColor }) => backgroundColor || '#F6EAC2'};
  padding: 40px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 300px;
  text-align: center;
  margin: 1rem;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-width: 400px;
  border: 2px solid #4F4F4F;
`;

const AnimalImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 15px;
  background-color: #FFFFFF;
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #DDD;
  border-radius: 10px;
  font-size: 1em;
  background-color: #FAFAFA;
  color: #4F4F4F;
`;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #A8DADC; /* Pastel button color */
  color: #FFFFFF;
  border: none;
  border-radius: 10px;
  font-size: 1em;
  cursor: pointer;

  &:hover {
    background-color: #457B9D;
  }
`;

const DivWithDash = styled.div`
  background-color: #f0f8ff;  /* Light background color */
  border: 2px dashed #4F4F4F; /* Dashed outline */
  padding: 20px;
  margin: 20px;
  border-radius: 10px;
  width: 300px;
`;

function FastComponent({ messageSent }) {
    const renderCount = useRenderCount();


    return (
        <DivWithDash>
            <SpeechBubbleForForm text={`Cheetah rendering ${renderCount}`} key={renderCount} />
            <AnimalImage src={FastCheetah} alt="Fast Cheetah" />
            {messageSent ? <AnimatedTextComponent >Thanks for sending a message</AnimatedTextComponent>: null}
        </DivWithDash>
    );
}



export default function FastForm() {
    const [message, setMessage] = useState('');
    const [messageSent, setMessageSent] = useState(false);

    return (
        <FactoidModal title="Myth number 3" factText="Re-renders Are Always Bad for Performance">
            <Card backgroundColor={"#e6ffef"}>
            <FastComponent messageSent={messageSent} />
                <TextArea
                    name="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Your Message"
                    rows="5"
                />
                <Button onClick={() => setMessageSent(true)}>Send Message</Button>
                <RerenderText text="Rendering parent" />
            </Card>
        </FactoidModal>
    );
}
