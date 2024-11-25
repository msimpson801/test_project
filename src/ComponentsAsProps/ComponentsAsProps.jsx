import styled from '@emotion/styled'
import {useEffect, useState} from "react";
import {useRenderCount} from "../Common/useRenderCount";
import {AnimatedText} from "../Common/CommonStyles";
import {keyframes} from '@emotion/react';


const Card = styled.div` border-radius: 10px;
    background-color: ${({ backgroundColor }) => backgroundColor || '#f8f4e5'};
    padding: 20px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    max-width: 300px;
    text-align: center;
    margin: 1rem;
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

const CardContainer = styled.div`
    display: flex;
    flex-direction: ${({ isColumn }) => (isColumn ? 'column' : 'row')};
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
    margin-top: 170px;
`;

const ToggleButton = styled.button`
    padding: 10px 20px;
    border-radius: 5px;
    border: none;
    background-color: #4CAF50;
    color: white;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out;

    &:hover {
        background-color: #3e8e41;
    }
`;
const SlowBoisHeading = styled.h1`
    font-size: 4rem;
    font-weight: bold;
    text-align: center;
    margin-bottom: 2rem;
    position: sticky;
    top: 0;
    background-color: inherit; /* Match the background color of the parent container */
`;

const Header = styled.header`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem 0;
    position: fixed;
    flex-direction: column;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1;
    background-color: transparent; /* Transparent background */
`;

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
    max-width: 50%;
    animation: ${props => props.fadeOut ? fadeOutScale : fadeInScale} 0.5s ease-in-out forwards;
    margin-top: -40px;
    margin-bottom: 10px;
    background-color: #fff2f4;


    &::after {
        content: '';
        position: absolute;
        width: 0;
        height: 0;
        border-style: solid;
        border-width: 0 10px 10px 10px;
        border-color: transparent transparent #fff2f4 transparent;
        bottom: -10px;
        right: 50px;
        transform: rotate(180deg);
    }
`;



function SpeechBubbleComponent({ text }) {
    const [fadeOut, setFadeOut] = useState(false);


    useEffect(() => {
        const timer = setTimeout(() => {
            setFadeOut(true);
        }, 3000)
        return () => clearTimeout(timer)
    }, [])

    return (
            <Bubble fadeOut={fadeOut}>
                {text}
            </Bubble>
    );
}



function AnimalCard({animalInfo}) {
    const renderCount = useRenderCount()
    const {url, title, description, backgroundColor} = animalInfo

    return (
            <Card backgroundColor={backgroundColor}>
                <SpeechBubbleComponent text="Rendering" key={renderCount}/>
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

export default function ComponentsAsProps() {
    const [isColumnLayout, setIsColumnLayout] = useState(false);

    const slothInfo = {
        url: "https://www.vectorkhazana.com/assets/images/products/Cute_Sloths_SVG_Layered_Cutting_file_Kawaii_baby_sloth_9.png",
        title: "Sloth",
        description: "Slow and steady wins the race!",
        backgroundColor: "#ffe7b9"
    }

    const tortoiseInfo = {
        url: "https://img.freepik.com/premium-vector/sleeping-turtle-cartoon-animal-reptile-tortoise_53500-931.jpg",
        title: "Tortoise",
        description: "Slow and steady wins the race!",
        backgroundColor: "#e6ffef"
    }

    const manateeInfo = {
        url: "https://t3.ftcdn.net/jpg/07/87/64/08/360_F_787640815_Eq5eRjcXjn25iqqCBx4SA5cQ4DYicw2n.jpg",
        title: "Manatee",
        description: "Slow and steady wins the race!",
        backgroundColor: "#e3f0fa"
    }

    return (
        <div>
            <Header>
                <SlowBoisHeading>Slow Components</SlowBoisHeading>
                <ToggleButton onClick={() => setIsColumnLayout(!isColumnLayout)}>
                    Toggle Layout causing re-render
                </ToggleButton>
            </Header>

            <CardContainer isColumn={isColumnLayout}>
                <AnimalCard animalInfo={slothInfo}/>
                <AnimalCard animalInfo={tortoiseInfo}/>
                <AnimalCard animalInfo={manateeInfo}/>
            </CardContainer>
        </div>
    )
}