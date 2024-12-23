import Label from "../Common/Label";
import RerenderText from "../Common/RerenderText";
import {Card} from "../Common/CommonStyles";
import PropsIllustrated from "../Common/PropsIllustrated";
import Grandchild3 from "./Grandchild3";
import Star from "../Common/Star";
import Heart from "../Common/Heart";
import Button from "../Common/Button";
import {useState} from "react";
import StarHeart from "../ContextComplexExample/StarHeart";

export default function Child3({colour}) {
    const [shape, setShape] = useState("star")

    function updateShape() {
        setShape(prevState => prevState === "star" ? "heart" : "star")
    }


    return (
        <div style={{marginRight: "10px", marginLeft: "10px"}}>
            <PropsIllustrated hasProps={true} />
            <Card>
                <StarHeart colour={colour} shape={shape} updatesShape={true} className="child3" />
                <Label>Child</Label>
                <Button colour={"#647df9"} onClick={updateShape}>Update shape</Button>
                <RerenderText/>
            </Card>
            <PropsIllustrated  hasProps={false}  verticalLineHeight={"60px"}/>
            <Grandchild3 />
        </div>

    )
}
