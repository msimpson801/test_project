import Star from "../Common/Star";
import Label from "../Common/Label";
import RerenderText from "../Common/RerenderText";
import {Card} from "../Common/CommonStyles";
import {useDispatch, useSelector} from "react-redux";
import Button from "../Common/Button";
import {actions} from "../Common/colourAndShapeSlice";


export default function GrandchildRedux1() {
    const colour  = useSelector((state) => state.colour.shapeColour)
    const dispatch = useDispatch()


    return (
        <Card>
            <Star colour={colour}/>
            <Label>Grandchild</Label>
            <Button onClick={() => dispatch(actions.toggleColor())} colour={"#647df9"}>Update star colour</Button>
            <RerenderText/>
        </Card>
    )
}
