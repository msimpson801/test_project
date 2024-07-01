import {LabelContainer, Txt} from "./CommonStyles";

export default function Label({toggleStatus = "off",children}) {
    return (
        <LabelContainer>
            <Txt toggleStatus={toggleStatus}>{children}</Txt>
        </LabelContainer>
    )
}