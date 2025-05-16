export type Currency = {
  code: string
  name: string
  symbol: string
}

export type CurrenciesCollection = Record<string, Currency>

export type CurrencyDto = {
  name: string
  symbol: string
}

export type CurrenciesResponse = Record<string, CurrencyDto>
