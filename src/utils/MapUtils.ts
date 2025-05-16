import type {CurrenciesCollection, CurrenciesResponse, RatesCollection} from '../types'

export const mapRates = (rates: Record<string, number>, base: string): RatesCollection => {
  const list = Object.entries(rates)

  return list.reduce<RatesCollection>((acc, [code, rate]) => {
    acc[code] = {
      code,
      rate,
      base,
    }

    return acc
  }, {})
}

export const mapCurrencies = (currencies: CurrenciesResponse): CurrenciesCollection => {
  const list = Object.entries(currencies)

  return list.reduce<CurrenciesCollection>((acc, [code, item]) => {
    acc[code] = {
      code,
      ...item,
    }

    return acc
  }, {})
}
