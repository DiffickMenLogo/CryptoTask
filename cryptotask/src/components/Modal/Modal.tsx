import React, { useCallback } from 'react'
import styled from 'styled-components'
import { useActions } from '../../hooks/actions'
import { useAppSelector } from '../../hooks/redux'
import { PortfolioState } from '../../models/assets'
import { portfolioSlice } from '../../store/reducers/portfolioSlice'

export function Modal({ setIsModalOpen }: { setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>> }) {
  const closeModal = () => {
    setIsModalOpen(false)
  }
  const portfolioData = useAppSelector((state) => state.portfolio)
  const { removeCoin } = useActions()
  const deleteCrypto = useCallback((coin: PortfolioState) => {
    console.log(coin)
    if (portfolioData.portfolio.length > 0) {
      console.log('enter')
      removeCoin(coin)
      localStorage.setItem('portfolio', JSON.stringify(portfolioData))
      console.log(portfolioData, 'portfolioData')
    }
  }, [])
  console.log(portfolioData, 'portfolio')
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
  `
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
  const StyledH1 = styled.h1``
  const ModalExit = styled.div`
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
  const DeleteTd = styled.td`
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
  return (
    <StyledModal>
      <ModalContainer>
        <ModalHeader>
          <StyledH1>Your portfolio</StyledH1>
          <ModalExit onClick={() => closeModal()} className='exit'>
            x
          </ModalExit>
        </ModalHeader>
        <ModalBody>
          <StyledTable>
            <StyledThead>
              <StyledTr>
                <StyledTh>Name</StyledTh>
                <StyledTh>Value</StyledTh>
                <StyledTh>Price</StyledTh>
                <StyledTh>Change</StyledTh>
                <ExitTh></ExitTh>
              </StyledTr>
            </StyledThead>
            <StyledTbody>
              {portfolioData ? (
                portfolioData.portfolio.map((coin: PortfolioState) => {
                  return (
                    <StyledTr key={coin.name}>
                      <StyledTd>{coin.name}</StyledTd>
                      <StyledTd>{coin.value}</StyledTd>
                      <StyledTd>{(Number(coin.price) * Number(coin.value)).toFixed(2)}</StyledTd>
                      <StyledTd>{Number(coin.change).toFixed(2)}%</StyledTd>
                      <DeleteTd onClick={() => deleteCrypto(coin)}>x</DeleteTd>
                    </StyledTr>
                  )
                })
              ) : (
                <StyledH1>No Data</StyledH1>
              )}
            </StyledTbody>
          </StyledTable>
        </ModalBody>
        <ModalFooter>
          <p>Total:</p>
          <p>
            {portfolioData
              ? portfolioData.portfolio
                  .reduce((accumulator: number, object: PortfolioState) => {
                    return accumulator + Number(object.price) * Number(object.value)
                  }, 0)
                  .toFixed(2)
              : 0}
          </p>
        </ModalFooter>
      </ModalContainer>
    </StyledModal>
  )
}
