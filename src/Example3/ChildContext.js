import Label from "../Common/Label";
import RerenderText from "../Common/RerenderText";
import {Card} from "../Common/CommonStyles";
import PropsIllustrated from "../Common/PropsIllustrated";
import GrandchildContext from "./GrandchildContext";
import {useContext} from "react";
import {ColourContext} from "./ParentContext";

export default function ChildContext() {
    const colour = useContext(ColourContext)

    return (
        <>
            <PropsIllustrated colour={colour} hasProps={false} verticalLineHeight={"60px"} />
            <Card>
                <Label>Child</Label>
                <RerenderText/>
            </Card>
            <PropsIllustrated colour={colour} hasProps={false} verticalLineHeight={"60px"}/>
            <GrandchildContext colour={colour} />
        </>

    )
}
