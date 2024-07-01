import Label from "../Common/Label";
import RerenderText from "../Common/RerenderText";
import {Card} from "../Common/CommonStyles";
import PropsIllustrated from "../Common/PropsIllustrated";
import Grandchild1 from "./Grandchild1";

export default function Child1({colour}) {


    return (
        <div style={{marginRight: "10px", marginLeft: "10px"}}>
            <PropsIllustrated />
            <Card>
                <Label>Child</Label>
                <RerenderText/>
            </Card>
            <PropsIllustrated />
            <Grandchild1 colour={colour} />
        </div>

    )
}
