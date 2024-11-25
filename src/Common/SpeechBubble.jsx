import styled from "@emotion/styled";
import React, {useEffect, useState} from "react";
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


const Bubble = styled.div`
    top: 0;
    border-radius: 15px;
    padding: 8px;

    margin-bottom: 10px;
    background-color: #fff2f4;
    max-width: 300px; /* Set maximum width for the bubble */ 
    word-wrap: break-word; /* Ensure text wraps within the bubble */
    animation: ${fadeInScale} .85s ease-in-out forwards;;


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



export default function SpeechBubbleComponent({ text }) {

    return (
        <Bubble>
            {text}
        </Bubble>
    );
}

