import {useState} from "react";
import Button from "../Common/Button";
import Label from "../Common/Label";
import PropsIllustrated from "../Common/PropsIllustrated";
import {useRenderCount} from "../Common/useRenderCount";
import RerenderText from "../Common/RerenderText";
import Star from "../Common/Star";
import {Card} from "../Common/CommonStyles";
import ChildPropDrill from "./ChildPropDrill";

export default function ParentPropDrill() {
    const [colour, setColour] = useState("hotpink")
    const renderCount = useRenderCount()

    function updateColour() {
        setColour(prevState => prevState === "#FFC028" ? "hotpink" : "#FFC028")
    }

    return (
        <div>
            <Card>
                <Star colour={colour}/>
                <Label>Parent</Label>
                <Button onClick={updateColour} colour={"#647df9"}>Update colour</Button>
                <RerenderText/>
            </Card>
            <ChildPropDrill colour={colour}/>
        </div>
    )

}
