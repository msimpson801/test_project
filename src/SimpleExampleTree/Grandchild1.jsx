import Star from "../Common/Star";
import Label from "../Common/Label";
import RerenderText from "../Common/RerenderText";
import {Card} from "../Common/CommonStyles";
import Button from "../Common/Button";
import {useState} from "react";
import Heart from "../Common/Heart";


export default function Grandchild1({colour}) {
    const [shape, setShape] = useState("star")

    function updateShape() {
        setShape(prevState => prevState === "star" ? "heart" : "star")
    }

    return (
        <Card>
            {shape === "star" ? <Star colour={colour}/> : <Heart colour={colour}/>}
            <Label>Grandchild</Label>
            <Button colour={"#647df9"} onClick={updateShape}>Update shape</Button>
            <RerenderText/>
        </Card>
    )
}
