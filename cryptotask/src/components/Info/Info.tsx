import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts'
import { Link, useSearchParams } from 'react-router-dom'
import { useGetCryptoHistoryQuery, useGetCryptosByIdQuery } from '../../store/actions/getCrypto'
import { CryptoDate } from '../../models/assets'
import {
  CryptoImage,
  CryptoName,
  CurrentDate,
  HeaderBox,
  HeaderLeftBox,
  HeaderP,
  StyledBack,
  StyledDivTwo,
  StyledGraph,
  StyledInfo,
  StyledInfoHeader,
  StyledInfoHeaderLeft,
  StyledInfoHeaderRight,
} from '../../styledComponents/infoComponents'

export function Info() {
  const [searchParams, setSearchParams] = useSearchParams()
  const { isLoading, data } = useGetCryptosByIdQuery(searchParams.get('id')?.toString() as string)
  const graph = useGetCryptoHistoryQuery({ coinId: searchParams.get('id')?.toString() as string, timeperiod: 'h1' })

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
