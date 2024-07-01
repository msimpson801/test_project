import Star from "../Common/Star";
import Label from "../Common/Label";
import RerenderText from "../Common/RerenderText";
import {Card} from "../Common/CommonStyles";
import {useSelector} from "react-redux";

export default function Grandchild3() {
    return (
        <Card>
            <Label>Grandchild</Label>
            <RerenderText/>
        </Card>
    )
}
