import Star from "../Common/Star";
import Label from "../Common/Label";
import RerenderText from "../Common/RerenderText";
import {Card} from "../Common/CommonStyles";
import Heart from "../Common/Heart";

export default function Grandchild2({shape, colour}) {


    return (
        <Card>
            {shape === "star" ? <Star colour={colour}/> : <Heart colour={colour}/>}
            <Label>Grandchild</Label>
            <RerenderText/>
        </Card>
    )
}
