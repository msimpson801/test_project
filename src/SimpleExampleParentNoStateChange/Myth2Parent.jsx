import Label from "../Common/Label";
import PropsIllustrated from "../Common/PropsIllustrated";
import {useRenderCount} from "../Common/useRenderCount";
import RerenderText from "../Common/RerenderText";
import Child from "./Myth2Child";
import {Card} from "../Common/CommonStyles";

export default function Myth2Parent() {
    const renderCount = useRenderCount()


    return (
        <div>
            <Card>
                <Label>Parent</Label>
                <RerenderText/>
            </Card>
            <PropsIllustrated hasProps={false} key={renderCount}/>
            <Child />
        </div>
    )

}
