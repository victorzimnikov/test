type ValueType = string | number | boolean | null | undefined

export const toNotNaNNumberOr = <T>(value: ValueType, replacer: T): number | T => {
  const numericValue = Number(value)

  return isNaN(numericValue) ? replacer : numericValue
}

export const toNotNaNNumberOrZero = (value: ValueType): number => toNotNaNNumberOr(value, 0)

export const fixedNumber = (
  num: string | number | null | undefined,
  fixed: number,
  withoutRounding = false,
): string => {
  if (num == null || (typeof num === 'number' && isNaN(num))) {
    return Number(0).toFixed(fixed)
  }

  if (withoutRounding) {
    const re = new RegExp('^-?\\d+(?:.\\d{0,' + (fixed || -1) + '})?')
    return Number(num)?.toString().match(re)?.[0] ?? ''
  } else {
    return Number(num).toFixed(fixed)
  }
}
