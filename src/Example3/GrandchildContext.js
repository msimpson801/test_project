import Star from "../Common/Star";
import Label from "../Common/Label";
import RerenderText from "../Common/RerenderText";
import {Card} from "../Common/CommonStyles";

export default function GrandchildContext({colour}) {

    return (
        <Card>
            <Star colour={colour}/>
            <Label>Grandchild</Label>
            <RerenderText/>
        </Card>
    )
}
