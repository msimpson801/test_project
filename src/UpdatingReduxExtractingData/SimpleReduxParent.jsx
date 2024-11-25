import Label from "../Common/Label";
import {Card} from "../Common/CommonStyles";
import styled from '@emotion/styled'
import SimpleReduxChild1 from "./SimpleReduxChild1";
import SimpleReduxChild2 from "./SimpleReduxChild2";
import SimpleReduxChild3 from "./SimpleReduxChild3";


const Container = styled.div`
  display: flex;
`

const ParentContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

export default function SimpleReduxParent() {

    return (
        <ParentContainer>
            <Card minWidth={"500px"}>
                <Label>Parent</Label>
            </Card>
            <Container>
                <SimpleReduxChild1/>
                <SimpleReduxChild2/>
                <SimpleReduxChild3 />
            </Container>
        </ParentContainer>
    )
}
