import Label from "../Common/Label";
import RerenderText from "../Common/RerenderText";
import {Card} from "../Common/CommonStyles";
import PropsIllustrated from "../Common/PropsIllustrated";
import GrandchildRedux1 from "./GrandchildRedux1";

export default function ChildRedux1() {


    return (
        <div style={{marginRight: "10px", marginLeft: "10px"}}>
            <PropsIllustrated hasProps={false} />
            <Card>
                <Label>Child</Label>
                <RerenderText/>
            </Card>
            <PropsIllustrated  hasProps={false}/>
            <GrandchildRedux1 />
        </div>

    )
}
