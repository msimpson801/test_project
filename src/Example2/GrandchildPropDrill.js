import {useState} from "react";
import Star from "../Common/Star";
import Heart from "../Common/Heart";
import Label from "../Common/Label";
import Button from "../Common/Button";
import RerenderText from "../Common/RerenderText";
import {Card} from "../Common/CommonStyles";

export default function GrandchildPropDrill({colour}) {

    return (
        <Card>
            <Star colour={colour}/>
            <Label>Grandchild</Label>
            <RerenderText/>
        </Card>
    )
}
