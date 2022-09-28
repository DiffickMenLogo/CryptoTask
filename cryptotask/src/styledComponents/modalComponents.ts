import styled from 'styled-components'

export const StyledModal = styled.div`
  width: 100vw;
  height: 100vh;
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
  width: 70%;
  height: 70%;
  cursor: default;
  z-index: 10;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`
export const ModalHeader = styled.div`
  display: flex;
  height: 10%;
  width: 80%;
  margin: 0 auto;
  align-items: center;
  justify-content: space-between;
`
export const StyledH1 = styled.h1``
export const ModalExit = styled.div`
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border: 1px solid #000;
  border-radius: 50px;
  :hover {
    background-color: #8c8c8c;
    border: 1px solid #000;
    border-radius: 50%;
  }
`
export const ModalBody = styled.div`
  width: 80%;
  height: 80%;
  margin: 0 auto;
`
export const ModalFooter = styled.div`
  width: 80%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`
export const StyledTable = styled.table`
  width: 100%;
`
export const StyledThead = styled.thead``
export const StyledTh = styled.th`
  width: 30%;
  text-align: center;
  line-height: 70px;
`
export const ExitTh = styled.th`
  width: 10%;
`
export const StyledTbody = styled.tbody``
export const StyledTr = styled.tr``
export const StyledTd = styled.td`
  text-align: center;
  line-height: 50px;
`
export const DeleteTd = styled.td`
  width: 15px;
  height: 15px;
  margin: 80% auto;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border: 1px solid #000;
  border-radius: 50px;
  :hover {
    background-color: #8c8c8c;
    border: 1px solid #000;
    border-radius: 50%;
  }
`
