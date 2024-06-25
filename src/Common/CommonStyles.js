import styled from '@emotion/styled'
import {keyframes} from '@emotion/react';


export const Card = styled.div`
  --pseudo-shadow-height: 4px;
  --radius: 16px;
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  width: 100%;
  min-width: ${props => (props.minWidth ? props.minWidth : '200px')};
  max-width: min(100%, 250px);
  min-height: 170px;
  border-radius: var(--radius);
  padding: 26px;
  border-bottom: var(--pseudo-shadow-height) solid hsl(220deg 10% 80%);
  background-color: ${props => (props.toggleStatus === "night" ? "black" : 'rgb(231, 233, 239)')};
  font-family: var(--font-family-mono);
  overflow: hidden;
`


export const ParentContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
`

const bounce = keyframes`
  to {
    opacity: 0;
    scale: 1.1;
    bottom: 20px;
  }
`

export const AnimatedText = styled.div`
  animation-name: ${bounce};
  animation-duration: 1s;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
  position: absolute;
  bottom: 5px;
  font-size: 14px;
  color: ${props => (props.toggleStatus === "night" ? "#E4F6F8" : 'inherit')};
`

export const LabelContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 5px;
  margin-bottom: 5px;
`

export const PurpleLine = styled.div`
  background: #647df9;
  width: 50px;
  height: 2px;
  margin-right: 10px;
  margin-left: 10px;
`

export const Txt = styled.div`
  font-size: 20px;
  color: ${props => (props.toggleStatus === "night" ? "#d3f5f8" : 'inherit')};
`

export const VerticalLine = styled.div`
  width: 3px;
  border-radius: 2px;
  background-color: #181616;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  height: ${props => (props.height ? props.height : '100px')};
`

export const PropsText = styled.div`
color: ${props => props.colour}
`


const animateDown = keyframes`
  from {
    scale: 1;
  }
  to {
    scale: 1.02;
  }
`

export const BlackBox = styled.div`
  display: flex;
  background-color: #191b1f;
  border-radius: 5px;
  padding: 8px;
  position: absolute;
  animation-name: ${animateDown};
  animation-duration: .5s;
  animation-fill-mode: forwards;
`

export const StyledButton = styled.button`
  min-width: 160px;
  height: 40px;
  color: #fff;
  background-color: ${props => props.colour};
  font-size: 14px;
  font-weight: 500;
  border: none;
  outline: none;
  border-radius: 25px;
  cursor: pointer;
  transition: all 0.5s ease;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 5px;
  :hover {
    border-radius: 5px;
    background-color: #3f5af1;
  }
`

