import React, {createContext, useContext, useState} from "react";
import Label from "../Common/Label";
import RerenderText from "../Common/RerenderText";
import {Card} from "../Common/CommonStyles";
import styled from "@emotion/styled";
import Button from "../Common/Button";
import PropsIllustrated from "../Common/PropsIllustrated";
import StarHeart from "./StarHeart";

const ContextIllustration = styled.div`
    padding: 20px;
    border-radius: 5px;
    border-width: 2px;
    border-style: dashed;
    display: flex;
    flex-direction: column;
    align-items: center;
`
const ContextDiv = styled.div`
    display: flex;
    color: white;
    margin-bottom: 5px;
    background-color: #191b1f;
    border-radius: 5px;
    padding: 8px;
    font-size: 12px;
`

const ContextValue = styled.div`
    margin-left: 5px;
    margin-right: 5px;
    color: ${props => (props.colour ? props.colour : 'aqua')};
`

const Container = styled.div`
    display: flex;
`

const ParentContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
`

const ColourAndShapeContext = createContext(null)

function Grandchild1() {
    const {colour, setShape} = useContext(ColourAndShapeContext) || {}
    function updateShape() {
        setShape(prevState => prevState === "star" ? "heart" : "star")
    }

    return (
        <Card>
            <StarHeart colour={colour}/>
            <Label>Grandchild</Label>
            <Button onClick={updateShape} colour={"#f964db"}>Update shape</Button>
            <RerenderText/>
        </Card>
    )
}

function Grandchild2() {
    const {colour} = useContext(ColourAndShapeContext) || {}

    return (
        <Card>
            <StarHeart colour={colour}/>
            <Label>Grandchild</Label>
            <RerenderText/>
        </Card>
    )
}

function Grandchild3() {
    return (
        <Card>
            <Label>Grandchild</Label>
            <RerenderText/>
        </Card>
    )
}


function Child1() {
    const {colour} = useContext(ColourAndShapeContext) || {}


    return (
        <div style={{marginRight: "10px", marginLeft: "10px"}}>
            <PropsIllustrated hasProps={false}/>
            <Card>
                <Label>Child</Label>
                <RerenderText/>
            </Card>
            <PropsIllustrated hasProps={false}/>
            <Grandchild1 colour={colour}/>
        </div>

    )
}

function Child2() {

    return (
        <div style={{marginRight: "10px", marginLeft: "10px"}}>
            <PropsIllustrated hasProps={false}/>
            <Card>
                <Label>Child</Label>
                <RerenderText/>
            </Card>
            <PropsIllustrated hasProps={false} verticalLineHeight={"60px"}/>
            <Grandchild2/>
        </div>

    )
}

function Child3() {
    const {colour} = useContext(ColourAndShapeContext) || {}


    return (
        <div style={{marginRight: "10px", marginLeft: "10px"}}>
            <PropsIllustrated hasProps={false}/>
            <Card>
                <StarHeart colour={colour}/>
                <Label>Child</Label>
                <RerenderText/>
            </Card>
            <PropsIllustrated hasProps={false} verticalLineHeight={"60px"}/>
            <Grandchild3/>
        </div>

    )
}

function ContextValueIllustrations() {
    const {colour, shape} = useContext(ColourAndShapeContext) || {}


    return (
        <>
            <div>Context:</div>
            <ContextDiv>
                <div>{`{ Colour:`}</div>
                <ContextValue colour={colour}>{colour}</ContextValue>
                <div>{`, Shape:`}</div>
                <ContextValue colour={colour}>{shape}</ContextValue>
                <div>{` } `}</div>
            </ContextDiv>
        </>
    )
}

function ParentCard() {
    const {colour, setColour} = useContext(ColourAndShapeContext) || {}

    function updateColour() {
        setColour(prevState => prevState === "#FFC028" ? "#FF69B4" : "#FFC028")
    }

    return (
        <>
            <Card minWidth="500px">
                <StarHeart colour={colour}/>
                <Label>Parent</Label>
                <Button onClick={updateColour} colour={"#647df9"}>Update colour</Button>
                <RerenderText/>
            </Card>
        </>
    )
}


export default function ParentContextComplex() {
    const [colour, setColour] = useState("#FF69B4")
    const [shape, setShape] = useState("star")




    return (
        <ColourAndShapeContext.Provider value={{colour, setColour, shape, setShape}}>
                <ContextIllustration contextValue={{colour, shape}}>
                   <ContextValueIllustrations />
                    <ParentContainer>
                     <ParentCard />
                        <Container>
                            <Child1 />
                            <Child2/>
                            <Child3 />
                        </Container>
                    </ParentContainer>
                </ContextIllustration>
            </ColourAndShapeContext.Provider>
        )
    }
