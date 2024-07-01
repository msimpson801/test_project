import {useState} from "react";
import Label from "../Common/Label";
import Button from "../Common/Button";
import RerenderText from "../Common/RerenderText";
import {Card} from "../Common/CommonStyles";
import Heart from "../Common/Heart";
import Star from "../Common/Star";

export default function ChildNoProps() {

    return (
        <Card>
            <Label>Child</Label>
            <RerenderText/>
        </Card>
    )
}
