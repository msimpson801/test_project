import Label from "../Common/Label";
import RerenderText from "../Common/RerenderText";
import {Card} from "../Common/CommonStyles";
import StarHeart from "../ContextComplexExample/StarHeart";
import PropsIllustrated from "../Common/PropsIllustrated";
import {useState} from "react";
import {useRenderCount} from "../Common/useRenderCount";
import Button from "../Common/Button";

export default function Myth2Child() {

    const [colour, setColour] = useState("hotpink")
    const renderCount = useRenderCount()

    function updateColour() {
        setColour(prevState => prevState === "#FFC028" ? "hotpink" : "#FFC028")
    }

    return (
        <div>
            <Card>
                <StarHeart colour={colour} />
                <Label>Child</Label>
                <Button onClick={updateColour} colour={"#647df9"}>Update colour</Button>
                <RerenderText/>
            </Card>
            <PropsIllustrated hasProps={true} colour={colour} key={renderCount}/>
            <Card>
                <StarHeart colour={colour} />
                <Label>Grand child</Label>
                <RerenderText/>
            </Card>
        </div>
    )
}
