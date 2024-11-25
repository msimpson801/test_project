import Star from "../Common/Star";
import Label from "../Common/Label";
import RerenderText from "../Common/RerenderText";
import {Card} from "../Common/CommonStyles";
import {useSelector} from "react-redux";
import StarHeart from "../ContextComplexExample/StarHeart";

export default function GrandchildRedux() {
    const colour  = useSelector((state) => state.shape.colour)

    return (
        <Card>
            <StarHeart colour={colour}/>
            <Label>Grandchild</Label>
            <div style={{fontSize: "12px"}}>*Pulls colour from redux store</div>
            <RerenderText/>
        </Card>
    )
}
