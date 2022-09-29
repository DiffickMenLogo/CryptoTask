import styled from 'styled-components'

export const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;

  background-color: #fff;
  color: #03254c;
  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    padding-bottom: 20px;
  }
`
export const StyledH1 = styled.h1`
  font-size: 35px;
  font-weight: 700;
`
export const StyledPopular = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: 1440px) {
    display: block;
  }
`
export const StyledPopularCoin = styled.div`
  display: flex;
  align-items: center;
`
export const StyledPopularCoinImg = styled.img`
  width: 30px;
  height: 30px;
  margin-right: 10px;
`
export const StyledPopularCoinText = styled.p`
  font-size: 15px;
  margin: 0 15px;
`
export const StyledH3 = styled.h3``
export const StyledPortfolio = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  @media (max-width: 768px) {
    margin-top: 20px auto;
  }
`
