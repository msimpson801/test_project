import Label from "../Common/Label";
import RerenderText from "../Common/RerenderText";
import {Card} from "../Common/CommonStyles";
import PropsIllustrated from "../Common/PropsIllustrated";
import GrandchildRedux from "./GrandchildRedux";
import Button from "../Common/Button";
import {toggleShape} from "../Common/colourAndShapeSlice";
import {useDispatch} from "react-redux";

export default function ChildRedux3() {
    const dispatch = useDispatch()

    return (
        <div style={{marginRight: "10px", marginLeft: "10px"}}>
            <PropsIllustrated hasProps={false}  verticalLineHeight={"60px"}/>
            <Card>
                <Label>Child</Label>
                <Button onClick={() => dispatch(toggleShape())} colour="#647df9">Update shape</Button>
                <RerenderText/>
            </Card>
            <PropsIllustrated hasProps={false}  verticalLineHeight={"60px"}/>
            <GrandchildRedux />
        </div>

    )
}
