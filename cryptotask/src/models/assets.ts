export interface DataItem {
  id: string
  rank: string
  symbol: string
  name: string
  supply: string
  maxSupply: string
  marketCapUsd: string
  volumeUsd24Hr: string
  priceUsd: string
  changePercent24Hr: string
  vwap24Hr: string
}

export interface RootObject {
  data: DataItem
  timestamp: number
}

export interface CryptoDate {
  priceUsd: string
  time: string
  date: string
}

export interface RootObjectDate {
  data: CryptoDate[]
  timestamp: number
}

export interface PortfolioState {
  name: string
  value: string
  price: string
  change: string
  id: string
}
