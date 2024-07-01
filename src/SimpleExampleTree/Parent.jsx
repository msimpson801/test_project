import Button from "../Common/Button";
import Label from "../Common/Label";
import RerenderText from "../Common/RerenderText";
import {Card} from "../Common/CommonStyles";
import Child3 from "./Child3";
import styled from '@emotion/styled'
import Child1 from "./Child1";
import Child2 from "./Child2";
import Star from "../Common/Star";
import {useState} from "react";
import {useRenderCount} from "../Common/useRenderCount";


const Container = styled.div`
  display: flex;
`

const ParentContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

export default function Parent() {
    const [colour, setColour] = useState("hotpink")

    function updateColour() {
        setColour(prevState => prevState === "#FFC028" ? "hotpink" : "#FFC028")
    }


    return (
        <ParentContainer>
            <Card minWidth="500px">
                <Star colour={colour}/>
                <Label>Parent</Label>
                <Button onClick={updateColour} colour={"#647df9"}>Update colour</Button>
                <RerenderText/>
            </Card>
            <Container>
                <Child1 colour={colour}/>
                <Child2 colour={colour}/>
                <Child3 colour={colour}/>
            </Container>
        </ParentContainer>
    )
}
