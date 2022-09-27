import React, { useCallback, useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { useActions } from '../../hooks/actions'
import { useAppSelector } from '../../hooks/redux'
import { DataItem } from '../../models/assets'
import { useGetCryptosQuery } from '../../store/actions/getCrypto'
import { convertToInternationalCurrencySystem } from '../../utils/convertToBillion'

export function List() {
  const [currentLimit, setCurrentLimit] = useState(20)
  const { isLoading, data } = useGetCryptosQuery(currentLimit)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [currentCrypto, setCurrentCrypto] = useState<DataItem>()
  const input = useRef<HTMLInputElement>(null)
  const [cryptoValue, setCryptoValue] = useState('')
  const { addCoin } = useActions()
  const { portfolio } = useAppSelector((state) => state.portfolio)
  const navigate = useNavigate()
  useEffect(() => {
    if (portfolio.length > 0) {
      localStorage.setItem('portfolio', JSON.stringify({ portfolio }))
    }
  }, [portfolio])
  // useEffect(() => {
  //     useGetCryptosByIdQuery('bitcoin');
  // }, []);
  // useEffect(() => {
  //     if(portfolio.length > 0){
  //         portfolio.map((item: PortfolioState) => {
  //             if(item.id === currentCrypto?.id){
  //                 let updateCrypto = updateCryptoNow(item.id)
  //                 return {
  //                     ...item,
  //                     price: updateCrypto.data?.data.priceUsd,
  //                     change: updateCrypto.data?.data.changePercent24Hr,
  //                 }
  //             }
  //             return item;
  //         });
  //         updateCoin(portfolio);
  //     }
  // }, []);

  const addCrypto = useCallback(() => {
    if (input.current !== null) {
      setCryptoValue(input.current.value)
      if (currentCrypto != undefined) {
        addCoin({
          name: currentCrypto.name,
          price: currentCrypto.priceUsd,
          value: input.current.value,
          change: currentCrypto.changePercent24Hr,
          id: currentCrypto.id,
        })
      }
    }
  }, [currentCrypto, cryptoValue])

  function handleClick(id: string, e: React.MouseEvent<HTMLTableRowElement, MouseEvent>) {
    const el = e.target as HTMLElement
    if (el.tagName !== 'DIV') {
      navigate(`/info?id=${id}`)
    } else {
      setIsModalOpen(true)
    }
  }
  const CommonDiv = styled.div``
  const AddButton = styled.button`
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
  const StyledDiv = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
  `
  const StyledTable = styled.table`
    margin-top: 25px;
    width: 70%;
    background-color: #fff;
    box-shadow:rgb(0 0 0 / 40%) 0px 2px 15px -3px !important
    border: 1px solid #fff;
    border-radius: 5px;
    border-collapse: collapse;
    `
  const StyledThead = styled.thead`
    line-height: 30px;
    border-bottom: 1px solid #e0e0e0;
  `
  const StyledTr = styled.tr`
    border-bottom: 1px solid #000;
    width: 100%;
  `
  const StyledTbody = styled.tbody``
  const StyledTh = styled.th`
    text-align: center;
    font-weight: 300;
    color: #0e0e0e;
  `
  const BigTh = styled.th`
    width: 30%;
    text-align: center;
    font-weight: 300;
    color: #0e0e0e;
  `
  const StyledTd = styled.td`
    text-align: center;
    font-size: 15px;
    border-collapse: separate;
    border-spacing: 10px;
  `
  const StyledP = styled.p``
  const SmallTh = styled.th`
    width: 5%;
  `
  const SmallTd = styled.td`
    width: 5%;
    text-align: center;
  `
  const AddtoPort = styled.div`
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

  const StyledModal = styled.div`
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
  const ModalContainer = styled.div`
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
  const ModalHeader = styled.div`
    width: 80%;
    text-align: center;
    margin: 20px auto;
  `
  const ModalBody = styled.div`
    width: 80%;
    margin: 0 auto;
  `
  const ModalInput = styled.input`
    width: 20%;
    height: 30px;
    display: block;
    margin: 10px auto;
  `
  const ModalText = styled.p`
    text-align: center;
  `
  const ModalImage = styled.img`
    width: 30px;
    height: 30px;
  `
  const ModalButton = styled.button`
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
  const StyledTrTop = styled.tr``
  const ModalExit = styled.div`
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
  return (
    <CommonDiv>
      <StyledDiv>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <StyledTable>
            <StyledThead>
              <StyledTrTop>
                <StyledTh>Rank</StyledTh>
                <BigTh>Name</BigTh>
                <StyledTh>Price</StyledTh>
                <StyledTh>Market Cap</StyledTh>
                <StyledTh>VWAP(24h)</StyledTh>
                <StyledTh>Supply</StyledTh>
                <StyledTh>Volume(24h)</StyledTh>
                <StyledTh>Change(24h)</StyledTh>
                <SmallTh></SmallTh>
              </StyledTrTop>
            </StyledThead>
            <StyledTbody>
              {data.data.map((item: DataItem) => {
                return (
                  <StyledTr key={item.id} onClick={(e) => handleClick(item.id, e)}>
                    <StyledTd>{item.rank}</StyledTd>
                    <StyledTd>
                      <StyledP>{item.name}</StyledP>
                      <StyledP>{item.symbol}</StyledP>
                    </StyledTd>
                    <StyledTd>{'$' + Number(item.priceUsd).toFixed(2)}</StyledTd>
                    <StyledTd>{'$' + convertToInternationalCurrencySystem(Number(item.marketCapUsd))}</StyledTd>
                    <StyledTd>{'$' + Number(item.vwap24Hr).toFixed(2)}</StyledTd>
                    <StyledTd>{'$' + convertToInternationalCurrencySystem(Number(item.supply))}</StyledTd>
                    <StyledTd>{'$' + convertToInternationalCurrencySystem(Number(item.volumeUsd24Hr))}</StyledTd>
                    <StyledTd>{Number(item.changePercent24Hr).toFixed(2) + '%'}</StyledTd>
                    <SmallTd>
                      <AddtoPort onClick={() => setCurrentCrypto(item)}>+</AddtoPort>
                    </SmallTd>
                  </StyledTr>
                )
              })}
            </StyledTbody>
          </StyledTable>
        )}
        {isModalOpen && (
          <StyledModal>
            <ModalContainer>
              <ModalHeader>Add waller to your Portfolio</ModalHeader>
              <ModalExit onClick={() => setIsModalOpen(false)}>X</ModalExit>
              <ModalBody>
                <ModalText>
                  Enter the amount of{' '}
                  <ModalImage src={`https://assets.coincap.io/assets/icons/${currentCrypto?.symbol.toLowerCase()}@2x.png`} alt='some'></ModalImage>{' '}
                  you want to add to your portfolio
                </ModalText>
                <ModalInput ref={input} type={'number'} step={'0.01'}></ModalInput>
                <ModalButton onClick={() => addCrypto()}>Add</ModalButton>
              </ModalBody>
            </ModalContainer>
          </StyledModal>
        )}
      </StyledDiv>
      <AddButton onClick={() => setCurrentLimit(currentLimit + 20)}>Show more</AddButton>
    </CommonDiv>
  )
}
