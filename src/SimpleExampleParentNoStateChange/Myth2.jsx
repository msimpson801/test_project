import Label from "../Common/Label";
import PropsIllustrated from "../Common/PropsIllustrated";
import {useRenderCount} from "../Common/useRenderCount";
import RerenderText from "../Common/RerenderText";
import Child from "./Myth2Child";
import {Card, ParentContainer} from "../Common/CommonStyles";
import FactoidModal from "../FactoidModal/FactoidModal";
import ParentNoProps from "../SimpleExampleNoProps/ParentNoProps";
import React from "react";
import Myth2Parent from "./Myth2Parent";

export default function Myth2() {


    return (
        <FactoidModal title={"Myth number 2"} factText={"Every state change in React forces an application-wide render"}>
            <ParentContainer>
                <Myth2Parent />
            </ParentContainer>
        </FactoidModal>
    )

}
