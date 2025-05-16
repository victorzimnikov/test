import type {Currency, ConvertDirectionType} from '../types'

export type AppNavigationParamList = {
  Home: undefined
  CurrencySelect: {
    directionType: ConvertDirectionType
    activeCurrency?: Currency | null
  }
  Splash: undefined
}
