import styled from '@emotion/styled'
import {keyframes} from '@emotion/react';


export const Card = styled.div`
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  width: 100%;
  min-width: ${props => (props.minWidth ? props.minWidth : '180px')};
  max-width: min(100%, 250px);
  min-height: 120px;
  border-radius: 16px;
  padding: 20px;
  border-bottom: 4px solid;
    border-bottom-color: ${props => (props.toggleStatus === "night" ? "#170c1a" : '#C7CAD1FF')};;
  background-color: ${props => (props.toggleStatus === "night" ? "#301934" : 'rgb(231, 233, 239)')};
  overflow: hidden;
    transition: all .5s;
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
  font-size: 18px;
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
  height: ${props => (props.height ? props.height : '70px')};
`

export const PropsText = styled.div`
    font-size: 12px;
    color: ${props => props.colour};
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
  padding: 6px;
  position: absolute;
  animation-name: ${animateDown};
  animation-duration: .5s;
  animation-fill-mode: forwards;
`

export const StyledButton = styled.button`
  min-width: 150px;
  height: 38px;
  color: #fff;
  background-color: ${props => props.colour};
  font-size: 12px;
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

