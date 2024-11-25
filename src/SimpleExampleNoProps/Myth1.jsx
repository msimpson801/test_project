import React from 'react';
import ParentNoProps from "./ParentNoProps";
import FactoidModal from "../FactoidModal/FactoidModal";
import Parent from "../SimpleExample/Parent";


export default function Myth1() {


    return (
        <FactoidModal title={"Myth number 1"} factText={"A child component re-renders only when its props change"}>
            <div style={{display: "flex"}}>
                <ParentNoProps/>
                <Parent />
            </div>
        </FactoidModal>
    );
}
