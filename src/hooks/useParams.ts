import {useRoute} from '@react-navigation/native'

export const useParams = <T>(): T => {
  const {params = {} as any} = useRoute()

  return params
}
