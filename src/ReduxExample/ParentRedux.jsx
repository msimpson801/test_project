import Button from "../Common/Button";
import Label from "../Common/Label";
import RerenderText from "../Common/RerenderText";
import {Card} from "../Common/CommonStyles";
import ChildRedux3 from "./ChildRedux3";
import {useDispatch, useSelector} from "react-redux";
import styled from '@emotion/styled'
import ChildRedux1 from "./ChildRedux1";
import ChildRedux2 from "./ChildRedux2";
import DarkModeButton from "../MorphPlayground";
import {toggleNightMode} from "../Common/nightModeSlice";


const Container = styled.div`
  display: flex;
`

const ParentContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

export default function ParentRedux() {
    const toggleStatus  = useSelector((state) => state.nightmode.status)
    const dispatch = useDispatch()
    console.log("Pushing a console log")

    return (
        <ParentContainer>
            <Card minWidth={"500px"} toggleStatus={toggleStatus}>
                <DarkModeButton toggleStatus={toggleStatus} />
                <Label toggleStatus={toggleStatus}>Parent</Label>
                <Button colour={"#647df9"} onClick={() => dispatch(toggleNightMode())}>
                    Toggle Dark Mode in Parent
                </Button>
                <RerenderText toggleStatus={toggleStatus}/>
            </Card>
            <Container>
                <ChildRedux1/>
                <ChildRedux2/>
                <ChildRedux3/>
            </Container>
        </ParentContainer>
    )
}
