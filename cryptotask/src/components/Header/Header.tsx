import { Modal } from '../Modal/Modal'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useGetCryptoIdsQuery, useGetCryptosQuery } from '../../store/actions/getCrypto'
import { DataItem, PortfolioState } from '../../models/assets'
import { useAppSelector } from '../../hooks/redux'
import {
  StyledH1,
  StyledH3,
  StyledHeader,
  StyledPopular,
  StyledPopularCoin,
  StyledPopularCoinImg,
  StyledPopularCoinText,
  StyledPortfolio,
} from '../../styledComponents/headerComponents'
export function Header() {
  const portfolioData = useAppSelector((state) => state.portfolio)
  const [idQuery, setIdQuery] = useState(portfolioData.portfolio.map((item: PortfolioState) => item.id).join(','))
  const idsApi = useGetCryptoIdsQuery(idQuery, {
    skip: idQuery == '',
    pollingInterval: 5000,
  })
  const [newPrice, setNewPrice] = useState(0)
  const [newPercent, setNewPercent] = useState(0)
  useEffect(() => {
    setIdQuery(portfolioData.portfolio.map((item: PortfolioState) => item.id).join(','))
    if (!idsApi.isLoading && idQuery !== '') {
      setNewPrice(
        idsApi.data.data
          .reduce((acc: number, item: DataItem) => {
            return acc + Number(item.priceUsd)
          }, 1)
          .toFixed(2) -
          portfolioData.portfolio
            .reduce((acc: number, item: PortfolioState) => {
              return acc + Number(item.price)
            }, 1)
            .toFixed(2),
      )
      setNewPercent((newPrice / portfolioData.portfolio.reduce((acc: number, item: PortfolioState) => acc + Number(item.price), 1)) * 100)
    } else {
      setNewPrice(0)
    }
  }, [idsApi.isLoading, newPrice, idQuery, idsApi.isFetching, portfolioData.portfolio])
  const { isLoading, data } = useGetCryptosQuery(3, {
    pollingInterval: 5000,
  })
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <StyledHeader>
      <StyledH1>
        <Link style={{ textDecoration: 'none', color: '#03254c' }} to='/'>
          CryptoTask
        </Link>
      </StyledH1>
      <StyledPopular>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          data?.data.map((item: DataItem) => {
            return (
              <StyledPopularCoin key={item.id + 'header'}>
                <StyledPopularCoinImg src={`https://assets.coincap.io/assets/icons/${item.symbol.toLowerCase()}@2x.png`} alt='btc' />
                <StyledH3>{item.name}</StyledH3>
                <StyledPopularCoinText>{Number(item.priceUsd).toFixed(2) + '$'}</StyledPopularCoinText>
                <StyledPopularCoinText>{Number(item.changePercent24Hr).toFixed(2) + '%'}</StyledPopularCoinText>
              </StyledPopularCoin>
            )
          })
        )}
      </StyledPopular>
      <StyledPortfolio onClick={() => setIsModalOpen(!isModalOpen)}>
        <StyledPopularCoinImg
          src={
            'data:image/png;base64,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'
          }
          alt='brefcase'
        />
        <StyledPopularCoinText>
          {portfolioData
            ? portfolioData.portfolio
                .reduce((accumulator: number, object: PortfolioState) => {
                  return accumulator + Number(object.price) * Number(object.value)
                }, 0)
                .toFixed(2)
            : 0}
          ({newPrice.toFixed(2)}$) {newPrice > 0 ? newPercent.toFixed(2) : 0}%
        </StyledPopularCoinText>
      </StyledPortfolio>
      {isModalOpen && <Modal setIsModalOpen={setIsModalOpen} />}
    </StyledHeader>
  )
}
