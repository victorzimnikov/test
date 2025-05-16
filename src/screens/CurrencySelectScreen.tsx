import React, {memo, useCallback, useMemo, useState} from 'react'
import {AppLayout} from '../components/app'
import {StyleSheet} from 'react-native'
import {IconButton} from '../components/common'
import {ArrowIcon} from '../components/icons'
import {useParams} from '../hooks'
import {Colors} from '../constants'
import {useHomeStore, useStore} from '../store'
import {useNavigation} from '@react-navigation/native'
import {CurrenciesSearch} from '../components/currencies/CurrenciesSearch'
import {CurrenciesList} from '../components/currencies'
import {useSafeAreaInsets} from 'react-native-safe-area-context'
import {useGetCurrencies} from '../api'
import type {AppNavigationParamList} from '../constants'
import type {Currency} from '../types'
import type {FC} from 'react'

const styles = StyleSheet.create({
  content: {padding: 20, backgroundColor: Colors.GreyLight, gap: 16},
})

const CurrencySelectScreenComponent: FC = () => {
  const {bottom} = useSafeAreaInsets()

  const navigation = useNavigation()
  const params = useParams<AppNavigationParamList['CurrencySelect']>()

  const toCurrency = useHomeStore((s) => s.toCurrency)
  const fromCurrency = useHomeStore((s) => s.fromCurrency)
  const setFromCurrency = useHomeStore((s) => s.setFromCurrency)
  const setToCurrency = useHomeStore((s) => s.setToCurrency)

  const currenciesQuery = useGetCurrencies(false)

  const currenciesList = useStore((s) => s.currenciesList)

  const activeCurrency = params.directionType === 'from' ? fromCurrency : toCurrency

  const [search, setSearch] = useState('')

  const data = useMemo(
    () =>
      currenciesList.filter((item) => {
        const searchLowerCase = search.toLowerCase()

        return (
          item.code.toLowerCase().includes(searchLowerCase) ||
          item.name.toLowerCase().includes(searchLowerCase)
        )
      }),
    [currenciesList, search],
  )

  const handleItemPress = useCallback(
    (currency: Currency) => {
      if (params.directionType === 'from') {
        setFromCurrency(currency)
      } else {
        setToCurrency(currency)
      }

      navigation.goBack()
    },
    [navigation, params.directionType, setFromCurrency, setToCurrency],
  )

  return (
    <AppLayout
      title="Currency Select"
      contentStyle={[styles.content, {paddingBottom: bottom + 20}]}
      leftComponent={
        <IconButton onPress={navigation.goBack}>
          <ArrowIcon />
        </IconButton>
      }>
      <CurrenciesSearch value={search} onChange={setSearch} />

      <CurrenciesList
        isRefreshing={currenciesQuery.isRefetching}
        onRefresh={currenciesQuery.refetch}
        onItemPress={handleItemPress}
        activeCurrencyCode={activeCurrency?.code}
        data={data}
      />
    </AppLayout>
  )
}

export const CurrencySelectScreen = memo(CurrencySelectScreenComponent)
