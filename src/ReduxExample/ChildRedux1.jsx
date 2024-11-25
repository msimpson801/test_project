import Label from "../Common/Label";
import RerenderText from "../Common/RerenderText";
import {Card} from "../Common/CommonStyles";
import PropsIllustrated from "../Common/PropsIllustrated";
import GrandchildRedux1 from "./GrandchildRedux1";
import Button from "../Common/Button";
import {toggleColour} from "../Common/colourAndShapeSlice";
import {useDispatch} from "react-redux";


export default function ChildRedux1() {
    const dispatch = useDispatch()

    return (
        <div style={{marginRight: "10px", marginLeft: "10px"}}>
            <PropsIllustrated hasProps={false}  verticalLineHeight={"60px"}/>
            <Card>
                <Label>Child</Label>
                <Button onClick={() => dispatch(toggleColour())} colour="#647df9">Update star colour</Button>
                <RerenderText/>
            </Card>
            <PropsIllustrated hasProps={false}  verticalLineHeight={"60px"}/>
            <GrandchildRedux1 />
        </div>

    )
}
