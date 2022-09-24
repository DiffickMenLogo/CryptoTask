import styled from 'styled-components';

export function Modal(props: any){
    const closeModal = ()=>{
        props.setIsModalOpen(false);
    };
    const StyledModal = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
    position: absolute;
    z-index: 0;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    cursor: pointer;
    `;
    const ModalContainer = styled.div`
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
    const ModalHeader = styled.div`
    display: flex;
    height: 10%;
    width: 80%;
    margin: 0 auto;
    align-items: center;
    justify-content: space-between;
    `
    const StyledH1 = styled.h1`
    
    `
    const ModalExit = styled.div`
    cursor: pointer;
    `
    const ModalBody = styled.div`
    width: 80%;
    height: 80%;
    margin: 0 auto;
    `
    const ModalFooter = styled.div`
    width: 80%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    `
    const StyledTable = styled.table`
    width: 100%;
    `
    const StyledThead = styled.thead``
    const StyledTh = styled.th`
    width: 30%;
    text-align: center;
    line-height: 70px;
    `
    const ExitTh = styled.th`
    width: 10%;
    `
    const StyledTbody = styled.tbody``
    const StyledTr = styled.tr``
    const StyledTd = styled.td`
    text-align: center;
    line-height: 50px;
    `
    return(
        <StyledModal onClick={() => closeModal()}>
            <ModalContainer>
                <ModalHeader >
                    <StyledH1>Your portfolio</StyledH1>
                    <ModalExit onClick={() => closeModal()} className="exit">x</ModalExit>
                </ModalHeader>
                <ModalBody>
                    <StyledTable>
                        <StyledThead>
                            <StyledTh>Name</StyledTh>
                            <StyledTh>Value</StyledTh>
                            <StyledTh>Price</StyledTh>
                            <ExitTh></ExitTh>
                        </StyledThead>
                        <StyledTbody>
                            <StyledTr>
                                <StyledTd>Bitcoin</StyledTd>
                                <StyledTd>0.2</StyledTd>
                                <StyledTd>1000$</StyledTd>
                                <StyledTd>x</StyledTd>
                            </StyledTr>
                            <StyledTr>
                                <StyledTd>Bitcoin</StyledTd>
                                <StyledTd>0.2</StyledTd>
                                <StyledTd>1000$</StyledTd>
                                <StyledTd>x</StyledTd>
                            </StyledTr>
                            <StyledTr>
                                <StyledTd>Bitcoin</StyledTd>
                                <StyledTd>0.2</StyledTd>
                                <StyledTd>1000$</StyledTd>
                                <StyledTd>x</StyledTd>
                            </StyledTr>
                        </StyledTbody>
                    </StyledTable>
                </ModalBody>
                <ModalFooter>
                    <p>Total:</p>
                    <p>3000$</p> 
                </ModalFooter>
            </ModalContainer>
        </StyledModal>
    )
}