import styled from '@emotion/styled'
import {useEffect, useState} from "react";
import {keyframes} from '@emotion/react';


const fadeInScale = keyframes`
  from {
    opacity: 0;
    transform: scale(0.8);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`;

const fadeOutScale = keyframes`
    from {
        opacity: 1;
        transform: scale(1);
    }
    to {
        opacity: 0;
        transform: scale(0.8);
    }
`

const Bubble = styled.div`
    top: 0;
    border-radius: 15px;
    padding: 8px;
    position: relative;
    // animation: ${props => props.fadeOut ? fadeOutScale : fadeInScale} 0.5s ease-in-out forwards;
    margin-top: -40px;
    margin-bottom: 10px;
    background-color: #bbb9ff;


    &::after {
        content: '';
        position: absolute;
        width: 0;
        height: 0;
        border-style: solid;
        border-width: 0 10px 10px 10px;
        border-color: transparent transparent #bbb9ff transparent;
        bottom: -8px;
        right: 50px;
        transform: rotate(180deg);
    }
`;


export default function SpeechBubbleForForm({ text }) {
    const [fadeOut, setFadeOut] = useState(false);


    // useEffect(() => {
    //     const timer = setTimeout(() => {
    //         setFadeOut(true);
    //     }, 3000)
    //     return () => clearTimeout(timer)
    // }, [])

    return (
            <Bubble fadeOut={fadeOut}>
                {text}
            </Bubble>
    );
}







