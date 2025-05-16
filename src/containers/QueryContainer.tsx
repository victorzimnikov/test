import React, {memo} from 'react'
import {QueryClient, QueryClientProvider} from 'react-query'
import type {FC, PropsWithChildren} from 'react'

const queryClient = new QueryClient()

const QueryContainerComponent: FC<PropsWithChildren> = ({children}) => {
  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
}

export const QueryContainer = memo(QueryContainerComponent)
