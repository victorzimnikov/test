export const queryKeys = {
  currencies: ['currencies'],
  rates: (baseCurrencyCode: string) => ['rates', baseCurrencyCode],
}
