import React, {createContext, useState} from "react";
import Label from "../Common/Label";
import RerenderText from "../Common/RerenderText";
import Star from "../Common/Star";
import {Card} from "../Common/CommonStyles";
import ChildContext from "./ChildContext";
import styled from "@emotion/styled";
import Button from "../Common/Button";

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
export const ColourContext = createContext(null)

export default function ParentContext() {
    const [colour, setColour] = useState("#FF69B4")

    function updateColour() {
        setColour(prevState => prevState === "#FFC028" ? "#FF69B4" : "#FFC028")
    }

    return (
        <ColourContext.Provider value={colour}>
            <ContextIllustration contextValue={colour}>
                <div>Context:</div>
                <ContextDiv>
                    <div>{`{ colour:`}</div>
                    <ContextValue colour={colour}>{colour}</ContextValue>
                    <div>{` } `}</div>
                </ContextDiv>

                <Card>
                    <Star colour={colour}/>
                    <Label>Parent</Label>
                    <Button onClick={updateColour} colour={"#647df9"}>Update colour</Button>
                    <RerenderText/>
                </Card>
                <ChildContext/>
            </ContextIllustration>
        </ColourContext.Provider>
    )
}
