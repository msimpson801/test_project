import Star from "../Common/Star";
import Label from "../Common/Label";
import RerenderText from "../Common/RerenderText";
import {Card} from "../Common/CommonStyles";
import {useSelector} from "react-redux";

export default function GrandchildRedux() {
    const colour  = useSelector((state) => state.colour.shapeColour)

    return (
        <Card>
            <Star colour={colour}/>
            <Label>Grandchild</Label>
            <RerenderText/>
        </Card>
    )
}
