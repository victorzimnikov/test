export type Rate = {
  base: string
  code: string
  rate: number
}

export type RatesCollection = Record<string, Rate>

export type RatesResponse = {
  date: string
  base: string
  rates: Record<string, number>
}
