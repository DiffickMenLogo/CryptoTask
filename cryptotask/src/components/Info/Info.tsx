import btc from '../../assets/img/btc@2x.png';
import styled from 'styled-components';
import data from './data.json';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';


export function Info(){

  // function timeConverter(UNIX_timestamp: number){
  //   var a = new Date(UNIX_timestamp * 1000);
  //   var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  //   var year = a.getFullYear();
  //   var month = months[a.getMonth()];
  //   var date = a.getDate();
  //   var hour = a.getHours();
  //   var min = a.getMinutes();
  //   var sec = a.getSeconds();
  //   var time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec ;
  //   return time;
  // }

  // let dataConvert = data.map((item: any)=>{
  //   item.priceUsd = item.priceUsd;
  //   item.time = timeConverter(item.time);
  //   return item;
  // })

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
  const StyledInfoHeaderLeft = styled.div`
  
  `
  const CryptoImage = styled.img`
  width: 50px;
  height: 50px;
  align-self: center;
  `
  const CurrentDate = styled.p`
  
  `
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

    return(
        <StyledInfo>
            <StyledInfoHeader>
                <StyledInfoHeaderLeft>
                    <HeaderLeftBox>
                      <CryptoImage src={btc} alt="" />
                      <CryptoName >Bitcoin (BTC)</CryptoName>
                    </HeaderLeftBox>
                    <CurrentDate>Current date: 12.12.2021</CurrentDate>
                </StyledInfoHeaderLeft>
                <StyledInfoHeaderRight>
                    <HeaderBox>
                      <HeaderP>Hight: 19999$</HeaderP>
                      <HeaderP>Low: 19999$</HeaderP>
                    </HeaderBox>
                    <HeaderBox>
                      <HeaderP>Average: 19999$</HeaderP>
                      <HeaderP>Change: 0.59%</HeaderP>
                    </HeaderBox>
                </StyledInfoHeaderRight>
            </StyledInfoHeader>
            <StyledGraph>
            <AreaChart
              style={{zIndex: 1}}
              width={1000}
              height={400}
              data={data}
              margin={{
                top: 10,
                right: 30,
                left: 0,
                bottom: 0,
            }}
            >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="time" />
            <YAxis />
            <Tooltip />
            <Area type="monotone" dataKey="priceUsd" stroke="#8884d8" fill="#8884d8" />
          </AreaChart>
            </StyledGraph>
        </StyledInfo>
    )
}