import Label from "../Common/Label";
import RerenderText from "../Common/RerenderText";
import {Card} from "../Common/CommonStyles";
import {useContext} from "react";
import {ColourContext} from "./ParentContextComplex";
import Star from "../Common/Star";

export default function ChildContextComplex1() {
    const colour = useContext(ColourContext)

    return (
        <Card>
            <Star colour={colour}/>
            <Label>Grandchild</Label>
            <RerenderText/>
        </Card>
    )
}
