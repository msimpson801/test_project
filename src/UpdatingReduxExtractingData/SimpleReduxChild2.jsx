import Label from "../Common/Label";
import RerenderText from "../Common/RerenderText";
import {Card} from "../Common/CommonStyles";
import PropsIllustrated from "../Common/PropsIllustrated";
import Star from "../Common/Star";
import {useSelector} from "react-redux";

export default function SimpleReduxChild2() {
    const colour  = useSelector((state) => state.shape.colour)


    return (
        <div style={{marginRight: "10px", marginLeft: "10px"}}>
            <PropsIllustrated hasProps={false} />
            <Card>
                <Star colour={colour}/>
                <Label>Child</Label>
                <div style={{fontSize: "12px"}}>*Pulls colour from redux store</div>
                <RerenderText/>
            </Card>
        </div>

    )
}
