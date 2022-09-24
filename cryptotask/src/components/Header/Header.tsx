import btc from '../../assets/img/btc@2x.png';
import styled from "styled-components";
import { Modal } from '../Modal/Modal';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import portfolio from '../../assets/svg/briefcase-fill.svg';
export function Header(){
    const [isModalOpen, setIsModalOpen] = useState(false);
    const StyledHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    height: 60px;

    background-color: #fff;
    color: #03254c;
    `
    const StyledH1 = styled.h1`
    font-size: 35px;
    font-weight: 700;
    `
    const StyledPopular = styled.div`
    display: flex;
    align-items: center;
    `
    const StyledPopularCoin = styled.div`
    display: flex;
    align-items: center;
    `
    const StyledPopularCoinImg = styled.img`
    width: 30px;
    height: 30px;
    margin-right: 10px;
    `
    const StyledPopularCoinText = styled.p`
    font-size: 15px;
    margin: 0 15px;
    `
    const StyledH3 = styled.h3``
    const StyledPortfolio = styled.div`
    display: flex;
    align-items: center;
    cursor: pointer;
    `
    return (
        <StyledHeader>
            <StyledH1><Link style={{textDecoration:'none',color: '#03254c'}} to='/'>CryptoTask</Link></StyledH1>
            <StyledPopular>
                <StyledPopularCoin>
                    <StyledPopularCoinImg src={btc} alt="img" />
                    <StyledH3>Bitcoin</StyledH3>
                    <StyledPopularCoinText>19999$</StyledPopularCoinText>
                    <StyledPopularCoinText>-2%</StyledPopularCoinText>
                </StyledPopularCoin>
                <StyledPopularCoin>
                    <StyledPopularCoinImg src={btc} alt="img"/>
                    <StyledH3>Bitcoin</StyledH3>
                    <StyledPopularCoinText>19999$</StyledPopularCoinText>
                    <StyledPopularCoinText>-2%</StyledPopularCoinText>
                </StyledPopularCoin>   
                <StyledPopularCoin>
                    <StyledPopularCoinImg src={btc} alt="img"/>
                    <StyledH3>Bitcoin</StyledH3>
                    <StyledPopularCoinText>19999$</StyledPopularCoinText>
                    <StyledPopularCoinText>-2%</StyledPopularCoinText>
                </StyledPopularCoin>   
            </StyledPopular>
            <StyledPortfolio onClick={() => setIsModalOpen(!isModalOpen)}>
                <StyledPopularCoinImg src={portfolio} alt="img"/>
                <StyledPopularCoinText>200USD + 10,20(5%)</StyledPopularCoinText>
            </StyledPortfolio>
            {isModalOpen && <Modal setIsModalOpen={setIsModalOpen} isModalOpen={isModalOpen}/>}
        </StyledHeader>
    )
}