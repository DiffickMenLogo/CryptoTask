import React, { useCallback, useState } from 'react'
import {
  DeleteTd,
  ExitTh,
  ModalBody,
  ModalContainer,
  ModalExit,
  ModalFooter,
  ModalHeader,
  StyledH1,
  StyledModal,
  StyledTable,
  StyledTbody,
  StyledTd,
  StyledTh,
  StyledThead,
  StyledTr,
} from '../../styledComponents/modalComponents'
import { useActions } from '../../hooks/actions'
import { useAppSelector } from '../../hooks/redux'
import { PortfolioState } from '../../models/assets'
import { useGetCryptoIdsQuery } from '../../store/actions/getCrypto'

export function Modal({ setIsModalOpen }: { setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>> }) {
  const closeModal = () => {
    setIsModalOpen(false)
  }
  const portfolioData = useAppSelector((state) => state.portfolio)
  const [idQuery, setIdQuery] = useState(portfolioData.portfolio.map((item: PortfolioState) => item.id))
  const { isLoading, data } = useGetCryptoIdsQuery(idQuery)
  const { removeCoin } = useActions()

  const deleteCrypto = useCallback((coin: PortfolioState) => {
    if (portfolioData.portfolio.length > 0) {
      removeCoin(coin)
      if (portfolioData.portfolio.length === 1) {
        localStorage.removeItem('portfolio')
      } else {
        localStorage.setItem('portfolio', JSON.stringify(portfolioData))
      }
    }
  }, [])

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
