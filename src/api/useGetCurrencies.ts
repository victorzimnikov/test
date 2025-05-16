import {useStore} from '../store'
import {Urls} from '../constants'
import {CurrenciesResponse} from '../types'
import {useNotificationContext} from '../containers'
import {HttpClient} from '../utils'
import {useQuery, UseQueryResult} from 'react-query'
import {queryKeys} from './queryKeys'
import {useConnection} from '../hooks'

const httpClient = new HttpClient()

export const useGetCurrencies = (refetchOnMount = true): UseQueryResult<CurrenciesResponse> => {
  const setCurrencies = useStore((s) => s.setCurrencies)
  const notifications = useNotificationContext()
  const connectionType = useConnection()

  return useQuery({
    queryKey: queryKeys.currencies,
    queryFn: () => httpClient.get<CurrenciesResponse>(Urls.GetCurrencies()),
    onSuccess: (data) => setCurrencies(data),
    refetchOnMount,
    onError: (error) => {
      if (error instanceof Error && connectionType === 'connected') {
        notifications.showNotification(error.message)
      }
    },
  })
}
