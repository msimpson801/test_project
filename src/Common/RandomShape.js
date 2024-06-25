import styled from '@emotion/styled'

const MyBtn = styled.button`
  width: 170px;
  height: 50px;
  color: #fff;
  background-color: #a26bfa;
  font-size: 20px;
  font-weight: 500;
  border: none;
  outline: none;
  border-radius: 25px;
  cursor: pointer;
  transition: all 0.5s ease;
  
  :hover{
    border-radius: 5px;
    background-color: #833af8;
  }
`

export default function Button() {
    return (
        <MyBtn>
            Update state
        </MyBtn>
    )
}