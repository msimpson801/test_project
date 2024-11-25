import {useSelector} from "react-redux";
import styled from '@emotion/styled'
import React from "react";


const StoreDiv = styled.div`
    display: flex;
    color: white;
    margin-bottom: 5px;
    background-color: ${(props) => (props.nightmode === 'night' ? '#301934' : '#fff')};
    border-radius: 5px;
    padding: 8px;
    font-size: 12px;
`



const StoreValue = styled.div`
  margin-left: 5px;
  margin-right: 5px;
  color: ${props => (props.colour ? props.colour : 'aqua')};
`

const TextDiv = styled.div`
    color: ${(props) => (props.nightmode === 'night' ? '#ffffff' : '#000000')};
`

export default function ReduxStoreIllustration() {
     const nightmodeStatus = useSelector((state) => state.nightmode.status);
     const shapeColour = useSelector((state) => state.shape.colour)
     const shape = useSelector((state) => state.shape.shape)
    return (
        <>
            <div>Store:</div>
            <StoreDiv nightmode={nightmodeStatus}>
                <TextDiv nightmode={nightmodeStatus} style={{marginRight: "3px"}}>{`{ colour:`}</TextDiv>
                <StoreValue colour={shapeColour}>{shapeColour}</StoreValue>
                <TextDiv nightmode={nightmodeStatus} style={{marginRight: "3px"}}>{`, shape:`}</TextDiv>
                <TextDiv nightmode={nightmodeStatus} style={{marginRight: "3px"}}>{shape}</TextDiv>
                <TextDiv nightmode={nightmodeStatus}>{` } `}</TextDiv>
                <TextDiv nightmode={nightmodeStatus} style={{marginRight: "3px"}}>{`{ status:`}</TextDiv>
                <TextDiv nightmode={nightmodeStatus}>{nightmodeStatus}</TextDiv>
                <TextDiv nightmode={nightmodeStatus}>{` } `}</TextDiv>
            </StoreDiv>
        </>
    )
}
