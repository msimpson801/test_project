import {useRenderCount} from "./useRenderCount";
import {AnimatedText} from "./CommonStyles";
export default function RerenderText({toggleStatus = "day"}) {
    const renderCount = useRenderCount()

    return <AnimatedText toggleStatus={toggleStatus} key={renderCount}>Rendering</AnimatedText>
}

