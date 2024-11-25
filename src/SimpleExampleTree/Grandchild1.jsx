import Label from "../Common/Label";
import RerenderText from "../Common/RerenderText";
import {Card} from "../Common/CommonStyles";
import Button from "../Common/Button";
import {useState} from "react";
import StarHeart from "../ContextComplexExample/StarHeart";


export default function Grandchild1({colour}) {
    const [shape, setShape] = useState("star")

    function updateShape() {
        setShape(prevState => prevState === "star" ? "heart" : "star")
    }

    return (
        <Card>
            <StarHeart colour={colour} shape={shape} updatesShape={true} className="grandchild1" />
            <Label>Grandchild</Label>
            <Button colour={"#647df9"} onClick={updateShape}>Update shape</Button>
            <RerenderText/>
        </Card>
    )
}
