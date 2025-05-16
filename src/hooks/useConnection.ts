import {useNetInfo} from '@react-native-community/netinfo'
import {useEffect, useState} from 'react'

type ConnectionState = 'undetected' | 'connected' | 'disconnected'

export const useConnection = (): ConnectionState => {
  const netInfo = useNetInfo()

  const [state, setState] = useState<ConnectionState>('undetected')

  useEffect(() => {
    if (netInfo.type !== 'unknown') {
      const hasConnection = netInfo.isConnected && netInfo.isInternetReachable

      setState(hasConnection ? 'connected' : 'disconnected')
    }
  }, [netInfo.isConnected, netInfo.isInternetReachable, netInfo.type])

  return state
}
