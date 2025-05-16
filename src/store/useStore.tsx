import AsyncStorage from '@react-native-async-storage/async-storage'
import {create} from 'zustand'
import {createJSONStorage, persist} from 'zustand/middleware'
import {mapRates} from '../utils'
import {mapCurrencies} from '../utils/MapUtils'
import {immer} from 'zustand/middleware/immer'
import type {CurrenciesResponse, Currency, RatesCollection, RatesResponse} from '../types'

type State = {
  rates: Record<string, RatesCollection>
  currencies: Record<string, Currency>
  currenciesList: Currency[]
}

type Methods = {
  setRates: (data: RatesResponse) => void
  setCurrencies: (data: CurrenciesResponse) => void
}

type Store = State & Methods

export const useStore = create<Store>()(
  persist(
    immer((set) => ({
      rates: {},
      currencies: {},
      currenciesList: [],

      setRates: (data) =>
        set((state) => {
          if (data.rates != null) {
            state.rates[data.base] = mapRates(data.rates, data.base)
          }

          return state
        }),
      setCurrencies: (data) =>
        set((state) => {
          if (data != null) {
            const currencies = mapCurrencies(data)

            state.currencies = currencies

            state.currenciesList = Object.values(currencies)
          }

          return state
        }),
    })),
    {
      name: 'store',
      storage: createJSONStorage(() => AsyncStorage),
    },
  ),
)
