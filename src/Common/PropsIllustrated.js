import {BlackBox, PropsText, VerticalLine} from "./CommonStyles";

function PropBox({colour}) {
    return (
        <BlackBox>
            <PropsText colour={"white"}>props.</PropsText>
            <PropsText colour={colour}>colour</PropsText>
        </BlackBox>
    )
}

export default function PropsIllustrated({colour = "hotpink", hasProps = true, verticalLineHeight = null}) {
    return (
        <div style={{display: "flex", flexDirection: "column" ,justifyContent: "center", alignItems: "center", marginBottom: "10px", marginTop: "10px"}}>
            <VerticalLine height={verticalLineHeight}>
                {hasProps ? <PropBox colour={colour} /> : null}
          </VerticalLine>
        </div>
    )
}