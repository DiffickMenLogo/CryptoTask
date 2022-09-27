import { PortfolioState } from './../../models/assets'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
// localStorage.getItem('portfolio') !== undefined ? JSON.parse(localStorage.getItem('portfolio') || '[]') :
const initialState = localStorage.getItem('portfolio')
  ? JSON.parse(localStorage.getItem('portfolio') || '{}')
  : {
      portfolio: [] as PortfolioState[],
    }

export const portfolioSlice = createSlice({
  name: 'portfolio',
  initialState,
  reducers: {
    addCoin: (state, action: PayloadAction<PortfolioState>) => {
      if (state.portfolio.find((coin: PortfolioState) => coin.name === action.payload.name)) {
        state.portfolio = state.portfolio.map((coin: PortfolioState) => {
          if (coin.name === action.payload.name) {
            return {
              ...coin,
              value: (parseFloat(coin.value) + parseFloat(action.payload.value)).toString(),
            }
          }
          return coin
        })
      } else {
        state.portfolio.push(action.payload)
      }
    },
    removeCoin: (state, action: PayloadAction<PortfolioState>) => {
      if (state.portfolio.length === 1) {
        state.portfolio = []
      } else {
        state.portfolio.splice(
          state.portfolio.findIndex((coin: PortfolioState) => coin.name === action.payload.name),
          1,
        )
      }
    },
    updateCoin: (state, action: PayloadAction<PortfolioState>) => {
      state.portfolio = state.portfolio.map((coin: PortfolioState) => {
        if (coin.name === action.payload.name) {
          return {
            ...coin,
            value: action.payload.value,
          }
        }
        return coin
      })
    },
  },
})

export const portfolioReducer = portfolioSlice.reducer
export const portfolioActions = portfolioSlice.actions
