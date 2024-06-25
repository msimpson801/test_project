import {StyledButton} from "./CommonStyles";


export default function Button({onClick, colour, children}) {
    return (
        <StyledButton onClick={() => onClick()} colour={colour}>
            {children}
        </StyledButton>
    )
}