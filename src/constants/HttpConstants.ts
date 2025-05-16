import {stringify} from '../utils'

export const API_URL = 'https://api.vatcomply.com'
export const FLAGS_URL = 'https://restcountries.com/v3.1'

export const Urls = {
  GetRates<Params extends Record<string, unknown> = {}>(params?: Params) {
    if (params != null) {
      const query = stringify(params)

      return `${API_URL}/rates?${query}`
    }

    return `${API_URL}/rates`
  },
  GetCurrencies: () => `${API_URL}/currencies`,
}

export const FlagsUrls = {
  GetFlag: (currencyCode: string) => `${FLAGS_URL}/currency/${currencyCode}?fields=flags`,
}
