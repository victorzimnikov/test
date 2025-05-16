import {useEffect} from 'react'
import {useHomeStore, useStore} from '../store'
import {DEFAULT_BASE_CURRENCY_CODE} from '../constants'

export const useInitialCurrencies = () => {
  const toCurrency = useHomeStore((s) => s.toCurrency)
  const fromCurrency = useHomeStore((s) => s.fromCurrency)
  const setToCurrency = useHomeStore((s) => s.setToCurrency)
  const setFromCurrency = useHomeStore((s) => s.setFromCurrency)

  const currencies = useStore((s) => s.currencies)

  useEffect(() => {
    if (fromCurrency == null && toCurrency == null) {
      const baseCurrency = currencies[DEFAULT_BASE_CURRENCY_CODE]

      if (baseCurrency != null) {
        setToCurrency(baseCurrency)
        setFromCurrency(baseCurrency)
      }
    }
  }, [currencies, fromCurrency, setFromCurrency, setToCurrency, toCurrency])
}
