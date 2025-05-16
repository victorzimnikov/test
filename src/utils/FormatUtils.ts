import {toNotNaNNumberOrZero} from './NumberUtils'

export function formatCurrencyNumber(value: string | number = 0): string {
  const nextValue = toNotNaNNumberOrZero(value)

  const parts = nextValue.toString().split('.')

  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ' ')

  return parts.join('.')
}
