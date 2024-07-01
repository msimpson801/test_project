import {useState} from "react";
import Button from "../Common/Button";
import Label from "../Common/Label";
import PropsIllustrated from "../Common/PropsIllustrated";
import {useRenderCount} from "../Common/useRenderCount";
import RerenderText from "../Common/RerenderText";
import Star from "../Common/Star";
import Child from "./Child";
import {Card} from "../Common/CommonStyles";

export default function Parent() {
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
            <PropsIllustrated colour={colour} key={renderCount}/>
            <Child colour={colour}/>
        </div>
    )

}
