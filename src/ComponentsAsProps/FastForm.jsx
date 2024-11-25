import styled from '@emotion/styled';
import React, { useState } from 'react';
import { useRenderCount } from '../Common/useRenderCount';
import RerenderText from '../Common/RerenderText';
import FastCheetah from '../Animals/FastCheetah.png';
import SpeechBubbleComponent from '../Common/SpeechBubble';
import FactoidModal from '../FactoidModal/FactoidModal';
import SpeechBubbleForForm from "./SpeechBubbleForForm";

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
    border: 2px solid #4F4F4F
`;

const AnimalImage = styled.img`
    width: 100px;
    height: 100px;
    border-radius: 50%;
    object-fit: cover;
    margin-bottom: 15px;
    background-color: #FFFFFF;
`;

const AwesomeTitle = styled.h2`
    color: #4F4F4F;
    margin-bottom: 20px;
    text-align: center;
    word-wrap: break-word;
    word-break: break-word;
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

function FastComponent() {
    const renderCount = useRenderCount();
    const slowTitle = 'F' + 'a'.repeat(Number(renderCount)) + 'st';

    return (
        <DivWithDash>
            <SpeechBubbleForForm text={`Cheetah rendering ${renderCount}`} key={renderCount}/>
            <AnimalImage
                src={FastCheetah}
                alt="Fast Cheetah"
            />
            <AwesomeTitle>{slowTitle}</AwesomeTitle>
        </DivWithDash>
    );
}

export default function FastForm() {
    const [message, setMessage] = useState('');

    return (
        <FactoidModal title="Myth number 3" factText="Re-renders Are Always Bad for Performance">
            <Card backgroundColor={"#e6ffef"}>
            <FastComponent />
                <TextArea
                    name="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Your Message"
                    rows="5"
                />
                <Button type="submit">Send Message</Button>
                <RerenderText text="Rendering parent" />
            </Card>
        </FactoidModal>
    );
}
