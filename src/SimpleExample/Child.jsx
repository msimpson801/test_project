import {useState} from "react";
import Label from "../Common/Label";
import Button from "../Common/Button";
import RerenderText from "../Common/RerenderText";
import {Card} from "../Common/CommonStyles";
import StarHeart from "../ContextComplexExample/StarHeart";

export default function Child({colour}) {
    const [shape, setShape] = useState("star")

    function updateShape() {
        setShape(prevState => prevState === "star" ? "heart" : "star")
    }

    return (
        <Card>
            <StarHeart colour={colour} shape={shape} updatesShape={true} className="child" />
            <Label>Child</Label>
            <Button onClick={updateShape} colour={"#647df9"}>Update shape</Button>
            <RerenderText/>
        </Card>
    )
}
