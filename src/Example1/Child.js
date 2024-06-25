import {useState} from "react";
import Label from "../Common/Label";
import Button from "../Common/Button";
import RerenderText from "../Common/RerenderText";
import {Card} from "../Common/CommonStyles";
import DarkModeButton from "../MorphPlayground";

export default function Child({colour}) {
    const [toggleStatus, setToggleStatus] = useState("day")

    function updateShape() {
        setToggleStatus(prevState => prevState === "day" ? "night" : "day")
    }

    return (
        <Card>
            {/*{shape === "star" ? <Star colour={colour}/> : <Heart colour={colour}/>}*/}
            <DarkModeButton toggleStatus={toggleStatus} />
            <Label>Child</Label>
            <Button onClick={updateShape} colour={"#647df9"}>Update shape</Button>
            <RerenderText/>
        </Card>
    )
}
