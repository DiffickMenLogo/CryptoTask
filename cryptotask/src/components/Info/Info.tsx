import styled from 'styled-components'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts'
import { Link, useSearchParams } from 'react-router-dom'
import { useGetCryptoHistoryQuery, useGetCryptosByIdQuery } from '../../store/actions/getCrypto'
import { CryptoDate } from '../../models/assets'

export function Info() {
  const [searchParams, setSearchParams] = useSearchParams()
  const { isLoading, data } = useGetCryptosByIdQuery(searchParams.get('id')?.toString() as string)
  const graph = useGetCryptoHistoryQuery({ coinId: searchParams.get('id')?.toString() as string, timeperiod: 'h1' })
  const StyledDivTwo = styled.div``
  const StyledInfo = styled.div`
    width: 80%;
    margin: 0 auto;
  `
  const StyledInfoHeader = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
  `
  const HeaderLeftBox = styled.div`
    display: flex;
  `
  const StyledInfoHeaderLeft = styled.div``
  const CryptoImage = styled.img`
    width: 50px;
    height: 50px;
    align-self: center;
  `
  const CurrentDate = styled.p``
  const CryptoName = styled.h1``
  const StyledInfoHeaderRight = styled.div`
    display: flex;
  `
  const HeaderBox = styled.div`
    margin: 0 10px;
  `
  const HeaderP = styled.p`
    font-size: 25px;
    font-weight: 700;
    color: #666666;
  `
  const StyledGraph = styled.div`
    width: 500px;
    margin-top: 50px;
  `
  const StyledBack = styled.div`
    width: 300px;
    height: 50px;
    margin: 15px;
    background-color: #fff;
    font-size: 25px;
    font-weight: 700;
    display: flex;
    justify-content: center;
    align-items: center;
    letter-spacing: 0.1em;
    border-radius: 10px;
    cursor: pointer;
    :hover {
      background-color: #f2f2f2;
    }
  `

  return (
    <StyledInfo>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <StyledDivTwo>
          <Link to='/' style={{ textDecoration: 'none', color: 'black' }}>
            <StyledBack>&larr;Back</StyledBack>
          </Link>
          <StyledInfoHeader>
            <StyledInfoHeaderLeft>
              <HeaderLeftBox>
                <CryptoImage src={`https://assets.coincap.io/assets/icons/${data.data.symbol.toLowerCase()}@2x.png`} alt='' />
                <CryptoName>{data.data.name}</CryptoName>
              </HeaderLeftBox>
              <CurrentDate>{new Date().toDateString()}</CurrentDate>
            </StyledInfoHeaderLeft>
            <StyledInfoHeaderRight>
              <HeaderBox>
                <HeaderP>
                  Hight:{' '}
                  {graph.isLoading
                    ? 'wait...'
                    : graph.data.data
                        .reduce((acc: number, shot: CryptoDate) => (acc = acc > Number(shot.priceUsd) ? acc : Number(shot.priceUsd)), 0)
                        .toFixed(2)}
                  $
                </HeaderP>
                <HeaderP>
                  Low:{' '}
                  {graph.isLoading
                    ? 'wait...'
                    : graph.data.data
                        .reduce((acc: number, shot: CryptoDate) => (acc = acc < Number(shot.priceUsd) ? acc : Number(shot.priceUsd)))
                        .toFixed(2)}
                  $
                </HeaderP>
              </HeaderBox>
              <HeaderBox>
                <HeaderP>
                  Average:{' '}
                  {graph.isLoading
                    ? 'wait...'
                    : (
                        (graph.data.data.reduce(
                          (acc: number, shot: CryptoDate) => (acc = acc > Number(shot.priceUsd) ? acc : Number(shot.priceUsd)),
                          0,
                        ) +
                          graph.data.data.reduce(
                            (acc: number, shot: CryptoDate) => (acc = acc < Number(shot.priceUsd) ? acc : Number(shot.priceUsd)),
                          )) /
                        2
                      ).toFixed(2)}
                  $
                </HeaderP>
                <HeaderP>Change: {Number(data.data.changePercent24Hr).toFixed(2)}%</HeaderP>
              </HeaderBox>
            </StyledInfoHeaderRight>
          </StyledInfoHeader>
          <StyledGraph>
            <AreaChart
              style={{ zIndex: 1 }}
              width={1000}
              height={400}
              data={graph.data?.data}
              margin={{
                top: 10,
                right: 30,
                left: 0,
                bottom: 0,
              }}
            >
              <CartesianGrid strokeDasharray='3 3' />
              <XAxis dataKey='date' />
              <YAxis />
              <Tooltip />
              <Area type='monotone' dataKey='priceUsd' stroke='#8884d8' fill='#8884d8' />
            </AreaChart>
          </StyledGraph>
        </StyledDivTwo>
      )}
    </StyledInfo>
  )
}
