import Label from "../Common/Label";
import RerenderText from "../Common/RerenderText";
import {Card} from "../Common/CommonStyles";
import PropsIllustrated from "../Common/PropsIllustrated";
import Grandchild3 from "./Grandchild3";
import Grandchild1 from "./Grandchild1";
import Grandchild2 from "./Grandchild2";
import Star from "../Common/Star";
import {useSelector} from "react-redux";
import Heart from "../Common/Heart";
import Button from "../Common/Button";
import {useState} from "react";

export default function Child2({colour}) {
    const [shape, setShape] = useState("star")

    function updateShape() {
        setShape(prevState => prevState === "star" ? "heart" : "star")
    }


    return (
        <div style={{marginRight: "10px", marginLeft: "10px"}}>
            <PropsIllustrated hasProps={true} />
            <Card>
                {shape === "star" ? <Star colour={colour}/> : <Heart colour={colour}/>}
                <Label>Child</Label>
                <Button colour={"#647df9"} onClick={updateShape}>Update shape</Button>
                <RerenderText/>
            </Card>
            <PropsIllustrated hasProps={true} verticalLineHeight={"60px"}/>
            <Grandchild2 shape={shape} colour={colour} />
        </div>

    )
}
