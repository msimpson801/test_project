import styled from '@emotion/styled'
import {useState} from "react";
import {useRenderCount} from "../Common/useRenderCount";
import RerenderText from "../Common/RerenderText";
import SpeechBubbleForForm from "./SpeechBubbleForForm";
import Snail from "../Animals/Snail.png"



const Card = styled.div` border-radius: 10px;
    background-color: ${({ backgroundColor }) => backgroundColor || '#f8f4e5'};
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

const AnimalImage = styled.img` width: 100px;
    height: 100px;
    border-radius: 50%;
    object-fit: cover;
    margin-bottom: 15px;
    background-color: #ffffff;
`;



const AwesomeTitle = styled.h2`
  color: #4f4f4f;
  margin-bottom: 20px;
  text-align: center;
    word-wrap: break-word;
    word-break: break-word;
`;



const TextArea = styled.textarea`
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ddd;
  border-radius: 10px;
  font-size: 1em;
  background-color: #fafafa;
  color: #4f4f4f;
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

const DivWithDash = styled.div` 
    background-color: #f0f8ff; /* Light background color */
    border: 2px dashed #4f4f4f; /* Dashed outline */
    padding: 20px;
    margin: 20px;
    border-radius: 10px;
    width: 300px;
`
const calculateFibonacci = (n) => {
    if (n <= 1) return n;
    return calculateFibonacci(n - 1) + calculateFibonacci(n - 2);
}

function SlowComponent() {
    const renderCount = useRenderCount()
    const result = calculateFibonacci(37);
    const slowTitle = 'Sl' + 'o'.repeat(Number(renderCount)) + 'w';

    return (
        <DivWithDash>
            <SpeechBubbleForForm text={`Snail rendering ${renderCount}`} key={renderCount}/>
            <AnimalImage
                src={Snail}
                alt="Cute Snail"/>
            <AwesomeTitle>{slowTitle}</AwesomeTitle>
            <div><p>Fibonacci Result: {result}</p></div>
        </DivWithDash>
    )
}





export default function SlowForm() {
    const [message, setMessage] = useState("");

    return (
        <Card backgroundColor={"#e6ffef"}>
            <SlowComponent />
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
    )
}





