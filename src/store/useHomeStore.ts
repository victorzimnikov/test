import {create} from 'zustand'
import {createJSONStorage, persist} from 'zustand/middleware'
import AsyncStorage from '@react-native-async-storage/async-storage'
import {immer} from 'zustand/middleware/immer'
import type {Currency} from '../types'

type State = {
  fromCurrency: Currency | null
  toCurrency: Currency | null
}

type Methods = {
  switchConvertDirection: () => void
  setFromCurrency: (currency: Currency) => void
  setToCurrency: (currency: Currency) => void
}

type Store = State & Methods

export const useHomeStore = create<Store>()(
  persist(
    immer((set) => ({
      fromCurrency: null,
      toCurrency: null,

      switchConvertDirection: () =>
        set((state) => {
          const nextFromCurrency = state.toCurrency
          const nextToCurrency = state.fromCurrency

          state.fromCurrency = nextFromCurrency
          state.toCurrency = nextToCurrency

          return state
        }),

      setFromCurrency: (currency) =>
        set((state) => {
          state.fromCurrency = currency

          return state
        }),

      setToCurrency: (currency) =>
        set((state) => {
          state.toCurrency = currency

          return state
        }),
    })),
    {
      name: 'home-store',
      storage: createJSONStorage(() => AsyncStorage),
    },
  ),
)
