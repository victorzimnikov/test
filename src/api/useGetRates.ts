import {useQuery, UseQueryResult} from 'react-query'
import {DEFAULT_BASE_CURRENCY_CODE, Urls} from '../constants'
import {useNotificationContext} from '../containers'
import {useStore} from '../store'
import {queryKeys} from './queryKeys'
import {HttpClient} from '../utils'
import {RatesResponse} from '../types'
import {useConnection} from '../hooks'

const httpClient = new HttpClient()

export const useGetRates = (
  baseCurrencyCode = DEFAULT_BASE_CURRENCY_CODE,
  refetchOnMount = true,
): UseQueryResult<RatesResponse> => {
  const setRates = useStore((s) => s.setRates)
  const notifications = useNotificationContext()
  const connectionType = useConnection()

  return useQuery({
    queryKey: queryKeys.rates(baseCurrencyCode),
    queryFn: () => httpClient.get<RatesResponse>(Urls.GetRates({base: baseCurrencyCode})),
    refetchOnMount,
    onSuccess: (response) => setRates(response),
    onError: (error) => {
      if (error instanceof Error && connectionType === 'connected') {
        notifications.showNotification(error.message)
      }
    },
  })
}
