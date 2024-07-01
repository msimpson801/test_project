import Label from "../Common/Label";
import RerenderText from "../Common/RerenderText";
import {Card} from "../Common/CommonStyles";
import PropsIllustrated from "../Common/PropsIllustrated";
import GrandchildRedux from "./GrandchildRedux";

export default function ChildRedux3() {

    return (
        <div style={{marginRight: "10px", marginLeft: "10px"}}>
            <PropsIllustrated hasProps={false} />
            <Card>
                <Label>Child</Label>
                <RerenderText/>
            </Card>
            <PropsIllustrated  hasProps={false}/>
            <GrandchildRedux />
        </div>

    )
}
