import Star from "../Common/Star";
import Label from "../Common/Label";
import RerenderText from "../Common/RerenderText";
import {Card} from "../Common/CommonStyles";
import Heart from "../Common/Heart";
import StarHeart from "../ContextComplexExample/StarHeart";

export default function Grandchild2({shape, colour}) {


    return (
        <Card>
            <StarHeart colour={colour} shape={shape} updatesShape={true} className="grandchild2" />
            <Label>Grandchild</Label>
            <RerenderText/>
        </Card>
    )
}
