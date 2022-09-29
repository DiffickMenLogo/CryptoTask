import React, { useCallback, useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useActions } from '../../hooks/actions'
import { useAppSelector } from '../../hooks/redux'
import { DataItem } from '../../models/assets'
import { useGetCryptosQuery } from '../../store/actions/getCrypto'
import {
  AddButton,
  AddtoPort,
  BigTh,
  CommonDiv,
  ModalBody,
  ModalButton,
  ModalContainer,
  ModalExit,
  ModalHeader,
  ModalImage,
  ModalInput,
  ModalText,
  SmallTd,
  SmallTh,
  StyledDiv,
  StyledModal,
  StyledP,
  StyledTable,
  StyledTbody,
  StyledTd,
  StyledTh,
  StyledThead,
  StyledTr,
  StyledTrTop,
} from '../../styledComponents/listComponents'
import { convertToInternationalCurrencySystem } from '../../utils/convertToBillion'

export function List() {
  const [currentLimit, setCurrentLimit] = useState(20)
  const { isLoading, data } = useGetCryptosQuery(currentLimit, {
    pollingInterval: 5000,
  })
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [currentCrypto, setCurrentCrypto] = useState<DataItem>()
  const input = useRef<HTMLInputElement>(null)
  const submit = useRef<HTMLInputElement>(null)
  const [cryptoValue, setCryptoValue] = useState('')
  const { addCoin } = useActions()
  const { portfolio } = useAppSelector((state) => state.portfolio)
  const navigate = useNavigate()
  useEffect(() => {
    if (portfolio.length > 0) {
      localStorage.setItem('portfolio', JSON.stringify({ portfolio }))
    }
  }, [portfolio])

  const addCrypto = useCallback(
    (e?: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
      if (e) {
        e.preventDefault()
      }
      if (input.current !== null && input.current.value !== '') {
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
      if (input.current?.value !== '') {
        console.log(input.current?.value)
        setIsModalOpen(false)
      }
    },
    [currentCrypto, cryptoValue],
  )
  const submitOnEnter = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Enter') {
      addCrypto()
    }
  }

  const closeModal = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const el = e.target as HTMLDivElement
    if (el.id === 'modalBackground' || el.id === 'exit') {
      setIsModalOpen(false)
    }
  }

  function handleClick(id: string, e: React.MouseEvent<HTMLTableRowElement, MouseEvent>) {
    const el = e.target as HTMLElement
    if (el.tagName !== 'BUTTON') {
      navigate(`/info?id=${id}`)
    } else {
      window.scrollTo(0, 0)
      setIsModalOpen(true)
    }
  }

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
          <StyledModal id='modalBackground' onClick={(e) => closeModal(e)} onKeyDown={(e) => submitOnEnter(e)}>
            <ModalContainer target='#here' name='addCrypto'>
              <ModalHeader>Add waller to your Portfolio</ModalHeader>
              <ModalExit id='exit' onClick={(e) => closeModal(e)}>
                X
              </ModalExit>
              <ModalBody>
                <ModalText>
                  Enter the amount of{' '}
                  <ModalImage src={`https://assets.coincap.io/assets/icons/${currentCrypto?.symbol.toLowerCase()}@2x.png`} alt='some'></ModalImage>{' '}
                  you want to add to your portfolio
                </ModalText>
                <ModalInput ref={input} type={'number'} step={'0.01'}></ModalInput>
                <ModalButton ref={submit} type={'submit'} value={'Submit'} onClick={(e) => addCrypto(e)} />
              </ModalBody>
            </ModalContainer>
          </StyledModal>
        )}
      </StyledDiv>
      <AddButton onClick={() => setCurrentLimit(currentLimit + 20)}>Show more</AddButton>
    </CommonDiv>
  )
}
