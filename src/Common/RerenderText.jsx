import {useRenderCount} from "./useRenderCount";
import {AnimatedText} from "./CommonStyles";
export default function RerenderText({toggleStatus = "day", text = "Rendering"}) {
    const renderCount = useRenderCount()

    return <AnimatedText toggleStatus={toggleStatus} key={renderCount}>{text}</AnimatedText>
}

