import Label from "../Common/Label";
import RerenderText from "../Common/RerenderText";
import {Card} from "../Common/CommonStyles";
import GrandchildPropDrill from "./GrandchildPropDrill";
import PropsIllustrated from "../Common/PropsIllustrated";

export default function ChildPropDrill({colour}) {


    return (
        <>
            <PropsIllustrated colour={colour} />
            <Card>
                <Label>Child</Label>
                <RerenderText/>
            </Card>
            <PropsIllustrated colour={colour}/>
            <GrandchildPropDrill colour={colour} />
        </>

    )
}
