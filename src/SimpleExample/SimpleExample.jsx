import {Card, ParentContainer} from "../Common/CommonStyles";
import Parent from "./Parent";
import {useState} from "react";
import StarHeart from "../ContextComplexExample/StarHeart";
import Label from "../Common/Label";
import Button from "../Common/Button";
import RerenderText from "../Common/RerenderText";

export default function SimpleExample() {
    const [shape, setShape] = useState("star")

    function updateShape() {
        setShape(prevState => prevState === "star" ? "heart" : "star")
    }

    return (
        <Card>
            <StarHeart colour={"hotpink"} shape={shape} updatesShape={true} className="child" />
            <Label>Child</Label>
            <Button onClick={updateShape} colour={"#647df9"}>Update shape</Button>
            <RerenderText/>
        </Card>
    )
}
