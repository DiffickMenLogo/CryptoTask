import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import btc from '../../assets/img/btc@2x.png';
import { useGetCryptosQuery } from "../../store/actions/getCrypto";

export function List(){
    const [isModalOpen, setIsModalOpen] = useState(false);
    let navigate = useNavigate();
    function handleClick (id: string, e: any){
        if(e.target.tagName !== 'DIV'){
            navigate(`/info?id=${id}`);
          }else{
            setIsModalOpen(true);
          }
    }
    const data = [
        {
            id: "bitcasdoin",
            rank: "1",
            symbol: "BTC",
            name: "Bitcoin",
            supply: "18700000.00",
            maxSupply: "21000000.00",
            marketCapUsd: "100000",
            volumeUsd24Hr: "100000",
            priceUsd: "100000",
            changePercent24Hr: "100000",
            vwap24Hr: "100000",
        },
        {
            id: "bitcasdo",
            rank: "1",
            symbol: "BTC",
            name: "Bitcoin",
            supply: "18700000.00",
            maxSupply: "21000000.00",
            marketCapUsd: "100000",
            volumeUsd24Hr: "100000",
            priceUsd: "100000",
            changePercent24Hr: "100000",
            vwap24Hr: "100000",
        },
        {
            id: "bitcasdoina",
            rank: "1",
            symbol: "BTC",
            name: "Bitcoin",
            supply: "18700000.00",
            maxSupply: "21000000.00",
            marketCapUsd: "100000",
            volumeUsd24Hr: "100000",
            priceUsd: "100000",
            changePercent24Hr: "100000",
            vwap24Hr: "100000",
        },
    ];
    const StyledDiv = styled.div`
    display: flex;
    justify-content: center;
    `;
    const StyledTable = styled.table`
    margin-top: 25px;
    width: 70%;
    background-color: #fff;
    box-shadow:rgb(0 0 0 / 40%) 0px 2px 15px -3px !important
    border: 1px solid #fff;
    border-radius: 5px;
    border-collapse: collapse;
    `;
    const StyledThead = styled.thead`
    line-height: 30px;
    border-bottom: 1px solid #e0e0e0;
    `
    const StyledTr = styled.tr`
    border-bottom: 1px solid #000;
    width: 100%;
    `
    const StyledTbody = styled.tbody`
    `
    const StyledTh = styled.th`
    text-align: center;
    font-weight: 300;
    color: #0e0e0e
    `;
    const BigTh = styled.th`
    width: 30%;
    text-align: center;
    font-weight: 300;
    color: #0e0e0e
    `;
    const StyledTd = styled.td`
    text-align: center;
    `
    const StyledP = styled.p`
    
    `
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
    :hover{
        cursor: pointer;
        background-color: green;
    }
    `

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
    width: 50%;
    height: 20%;
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
    `
    const StyledTrTop = styled.tr`
    `
    return(
        <StyledDiv>
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
                    {data.map((item: any) => {
                        return(
                                <StyledTr key={item.id} onClick={(e) => handleClick(item.id, e)}>
                                    <StyledTd>{item.rank}</StyledTd>
                                    <StyledTd>
                                        <StyledP>{item.name}</StyledP>
                                        <StyledP>{item.symbol}</StyledP>
                                    </StyledTd>
                                    <StyledTd>{item.priceUsd}</StyledTd>
                                    <StyledTd>{item.marketCapUsd}</StyledTd>
                                    <StyledTd>{item.vwap24Hr}</StyledTd>
                                    <StyledTd>{item.supply}</StyledTd>
                                    <StyledTd>{item.volumeUsd24Hr}</StyledTd>
                                    <StyledTd>{item.changePercent24Hr}</StyledTd>
                                    <SmallTd><AddtoPort>+</AddtoPort></SmallTd>
                                </StyledTr>
                        )
                    })}    
                </StyledTbody>
            </StyledTable>
            {isModalOpen && <StyledModal onClick={() => {setIsModalOpen(false)}}>
                <ModalContainer>
                    <ModalHeader>Add waller to your Portfolio</ModalHeader>
                    <ModalBody>
                        <ModalText>Enter the amount of <ModalImage src={btc} alt='some'></ModalImage> you want to add to your portfolio</ModalText>
                        <ModalInput></ModalInput>
                        <ModalButton>Add</ModalButton>
                    </ModalBody>
                </ModalContainer>
            </StyledModal>}
        </StyledDiv>
 
    )
 }