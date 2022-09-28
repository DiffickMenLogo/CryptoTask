import styled from 'styled-components'

export const CommonDiv = styled.div``
export const AddButton = styled.button`
  width: 30%;
  height: 50px;
  background-color: #2a2a2a;
  color: #fff;
  border: none;
  border-radius: 5px;
  font-size: 20px;
  font-weight: 600;
  cursor: pointer;
  display: block;
  margin: 15px auto;
  &:hover {
    background-color: #fff;
    color: #2a2a2a;
  }
`
export const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`
export const StyledTable = styled.table`
    margin-top: 25px;
    width: 70%;
    background-color: #fff;
    box-shadow:rgb(0 0 0 / 40%) 0px 2px 15px -3px !important
    border: 1px solid #fff;
    border-radius: 5px;
    border-collapse: collapse;
    `
export const StyledThead = styled.thead`
  line-height: 30px;
  border-bottom: 1px solid #e0e0e0;
`
export const StyledTr = styled.tr`
  border-bottom: 1px solid #000;
  width: 100%;
`
export const StyledTbody = styled.tbody``
export const StyledTh = styled.th`
  text-align: center;
  font-weight: 300;
  color: #0e0e0e;
`
export const BigTh = styled.th`
  width: 30%;
  text-align: center;
  font-weight: 300;
  color: #0e0e0e;
`
export const StyledTd = styled.td`
  text-align: center;
  font-size: 15px;
  border-collapse: separate;
  border-spacing: 10px;
`
export const StyledP = styled.p``
export const SmallTh = styled.th`
  width: 5%;
`
export const SmallTd = styled.td`
  width: 5%;
  text-align: center;
`
export const AddtoPort = styled.div`
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  border: 1px solid #000;
  border-radius: 50px;
  font-size: 30px;
  :hover {
    cursor: pointer;
    background-color: green;
  }
`

export const StyledModal = styled.div`
  width: 100%;
  min-height: 300%;
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
  z-index: 0;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  cursor: pointer;
`
export const ModalContainer = styled.div`
  background-color: #fff;
  width: 50%;
  height: fit-content;
  cursor: default;
  z-index: 10;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`
export const ModalHeader = styled.div`
  width: 80%;
  text-align: center;
  margin: 20px auto;
`
export const ModalBody = styled.div`
  width: 80%;
  margin: 0 auto;
`
export const ModalInput = styled.input`
  width: 20%;
  height: 30px;
  display: block;
  margin: 10px auto;
`
export const ModalText = styled.p`
  text-align: center;
`
export const ModalImage = styled.img`
  width: 30px;
  height: 30px;
`
export const ModalButton = styled.button`
  width: 100px;
  height: 30px;
  background-color: #000;
  color: #fff;
  border: none;
  border-radius: 5px;
  margin: 0 auto;
  display: block;
  margin-bottom: 20px;
`
export const StyledTrTop = styled.tr``
export const ModalExit = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #000;
  border-radius: 50px;
  font-size: 20px;
  :hover {
    cursor: pointer;
    background-color: red;
  }
`
