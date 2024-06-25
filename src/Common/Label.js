import {LabelContainer, Txt} from "./CommonStyles";

export default function Label({toggleStatus = "day",children}) {
    return (
        <LabelContainer>
            <Txt toggleStatus={toggleStatus}>{children}</Txt>
        </LabelContainer>
    )
}