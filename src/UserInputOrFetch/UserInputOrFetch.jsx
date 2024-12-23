import {keyframes} from '@emotion/react';
import styled from '@emotion/styled';
import {useEffect, useState} from "react";
import StarHeart from "../ContextComplexExample/StarHeart";
import RerenderText from "../Common/RerenderText";
import {useRenderCount} from "../Common/useRenderCount";
import StarRating from "./FavStar";

const FieldWrapper = styled.div` display: block;
    margin: 30px 10px;
    position: relative;
    outline: none;
    width: 100%;

    &.focused label {
        transition: all 0.2s linear;
        top: -20px;
    }
`;
const Label = styled.label` position: relative;
    white-space: nowrap;
    overflow: hidden;
    font-size: 1em;
    position: absolute;
    top: 0px;
    display: inline-block;
    background: #FFF;
    margin: 8px 5px;
    line-height: 1.4em;
    padding: 0 10px;
    transition: all 0.2s linear;
    text-transform: capitalize;
`;

const TextFieldInput = styled.input` padding: 10px;
    width: 100%;
    border: 1px solid #b5b5b5;
`;

const InputField = ({value, onChange}) => {
    const [isFocused, setIsFocused] = useState(false);
    const handleFocus = () => {
        setIsFocused(true);
    };
    const handleBlur = (event) => {
        if (event.target.value === '') {
            setIsFocused(false);
        }
    };
    return (<FieldWrapper className={isFocused ? 'focused' : ''}> <Label
        htmlFor="name">Name</Label>
        <TextFieldInput type="text"
                        name="name"
                        id="name"
                        value={value}
                        onChange={onChange}
                        onFocus={handleFocus}
                        onBlur={handleBlur}
        />
    </FieldWrapper>);
};


const Card = styled.div`
    border-radius: 10px;
    background-color: ${({backgroundColor}) => backgroundColor || '#ffffff'};
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
    min-height: 300px;
    border: 2px solid #4F4F4F
`;

const Button = styled.button`
    width: 100%;
    padding: 10px;
    background-color: #a8dadc; /* Pastel button color */
    color: #ffffff;
    border: none;
    border-radius: 10px;
    font-size: 1em;
    cursor: pointer;

    &:hover {
        background-color: #457b9d;
    }
`;

const loaderAnimation = keyframes` 0% {
                                       transform: translateY(0px);
                                   }
                                       50% {
                                           transform: translateY(-10px);
                                       }
                                       100% {
                                           transform: translateY(0px);
                                       } `;


const Loader = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0px 5px;
`;


const StyledSpan = styled.span`
    width: 10px;
    height: 10px;
    animation: ${loaderAnimation} 0.9s infinite cubic-bezier(0.41, 0.02, 0, 1.15);
`

const Circle = styled(StyledSpan)`
    border-radius: 50%;
    background-color: #EDC240;
`

const Square = styled(StyledSpan)`
    background-color: #DE4F2E;
    animation-delay: 0.5s !important;
`

const Triangle = styled(StyledSpan)`
    width: 0px;
    height: 0px;
    border-left: 5px solid transparent !important;
    border-right: 5px solid transparent !important;
    border-bottom: 10px solid #284D4D;
    animation-delay: 0.2s !important;
`


const StyledLoadingText = styled.div`
    display: flex;
`;


const bounceIn = keyframes`
  0% {
    opacity: 0;
    transform: scale(0);
  }
  50% {
    transform: scale(1.3);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
`;

const AnimatedHeading = styled.h1`
  animation: ${bounceIn} 1.5s ease-in-out;
`;

const Heading = () => {
    return (
        <AnimatedHeading>Excellent!</AnimatedHeading>
    );
};


const LoaderComponent = () => {
    return (
        <Loader>
            <Circle/>
            <Square/>
            <Triangle/>
        </Loader>

    );
}

function LoadingText() {
    return (
        <>
            <StyledLoadingText>
                <h3 style={{marginRight: "5px"}}>Fetching data</h3>
                <LoaderComponent/>
            </StyledLoadingText>
        </>
    )

}


function MultipleStars() {
    const [starOneVisible, setStarOneVisible] = useState(false);
    const [starTwoVisible, setStarTwoVisible] = useState(false);
    const [starThreeVisible, setStarThreeVisible] = useState(false);
    const [starFourVisible, setStarFourVisible] = useState(false);
    const [starFiveVisible, setStarFiveVisible] = useState(false);
    useEffect(() => {
        setTimeout(() => setStarOneVisible(true), 0 * 800);
        setTimeout(() => setStarTwoVisible(true), 0.5 * 800);
        setTimeout(() => setStarThreeVisible(true), 1 * 800);
        setTimeout(() => setStarFourVisible(true), 1.5 * 800);
        setTimeout(() => setStarFiveVisible(true), 2 * 800);
    }, [])


    return (<>
        <div style={{display: 'flex'}}>
            {starOneVisible && <StarHeart delay={0} colour="gold" className="starForForm"/>}
            {starTwoVisible && <StarHeart delay={0} colour="gold" className="starForForm"/>}
            {starThreeVisible && <StarHeart delay={0} colour="gold" className="starForForm"/>}
            {starFourVisible && <StarHeart delay={0} colour="gold" className="starForForm"/>}
            {starFiveVisible && <StarHeart delay={0} colour="gold" className="starForForm"/>}
        </div>
            <Heading />

        </>
    );
}

export default function UserInputOrFetch() {
    const [inputValue, setInputValue] = useState("")
    const [loading, setLoading] = useState(false)
    const [shape, setShape] = useState(null)
    const renderCount = useRenderCount();

    const handleClick = () => {
        setLoading(true);
        setShape(null);
        setTimeout(() => {
            setShape("star");
            setLoading(false);
        }, 1000); // Reduced timeout to 1 second
    };

    return (
        <Card>

            {!loading && !shape ? <h3>Get performance rating for:</h3> : null}
            {shape && <MultipleStars/>}
            {/*{shape ? <StarMessage>You are a star!</StarMessage> : null}*/}
            {!loading && !shape ?
                <InputField value={inputValue} onChange={(e) => setInputValue(e.target.value)}/> : null}
            {loading ? <LoadingText/> : null}
            {!loading && !shape ? <Button onClick={handleClick}>Fetch performance data</Button> : null}
            <RerenderText text={renderCount === "1" ? "First render" : `Rendered ${renderCount} times`}/>
        </Card>

    )
};