import Label from "../Common/Label";
import RerenderText from "../Common/RerenderText";
import {Card} from "../Common/CommonStyles";
import PropsIllustrated from "../Common/PropsIllustrated";
import Button from "../Common/Button";
import {toggleColour} from "../Common/colourAndShapeSlice";
import {useDispatch} from "react-redux";


export default function SimpleReduxChild1() {
    const dispatch = useDispatch()

    return (
        <div style={{marginRight: "10px", marginLeft: "10px"}}>
            <PropsIllustrated hasProps={false} />
            <Card>
                <Label>Child</Label>
                <Button onClick={() => dispatch(toggleColour())} colour="#647df9">Update star colour</Button>
                <RerenderText/>
            </Card>
        </div>

    )
}
