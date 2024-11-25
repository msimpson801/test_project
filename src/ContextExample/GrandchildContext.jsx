import Label from "../Common/Label";
import RerenderText from "../Common/RerenderText";
import {Card} from "../Common/CommonStyles";
import StarHeart from "../ContextComplexExample/StarHeart";
import React from "react";

export default function GrandchildContext({colour}) {

    return (
        <Card>
            <StarHeart colour={colour}/>
            <Label>Grandchild</Label>
            <RerenderText/>
        </Card>
    )
}
