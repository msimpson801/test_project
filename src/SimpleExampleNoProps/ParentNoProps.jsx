import {useState} from "react";
import Button from "../Common/Button";
import Label from "../Common/Label";
import PropsIllustrated from "../Common/PropsIllustrated";
import {useRenderCount} from "../Common/useRenderCount";
import RerenderText from "../Common/RerenderText";
import Star from "../Common/Star";
import Child from "./ChildNoProps";
import {Card} from "../Common/CommonStyles";

export default function ParentNoProps() {
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
            <PropsIllustrated hasProps={false} key={renderCount}/>
            <Child />
        </div>
    )

}
