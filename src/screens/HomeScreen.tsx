import React, {memo, useCallback} from 'react'
import {AppLayout} from '../components/app'
import {Converter} from '../components/converter'
import {useGetCurrencies, useGetRates} from '../api'
import {StyleSheet} from 'react-native'
import {useInitialCurrencies} from '../hooks'
import {useHomeStore} from '../store'
import {useFocusEffect} from '@react-navigation/native'
import type {FC} from 'react'

const styles = StyleSheet.create({
  content: {justifyContent: 'center'},
})

const HomeScreenComponent: FC = () => {
  const fromCurrency = useHomeStore((s) => s.fromCurrency)

  const {refetch: refetchRates} = useGetRates(fromCurrency?.code, false)
  const {refetch: refetchCurrencies} = useGetCurrencies(false)

  useInitialCurrencies()

  useFocusEffect(
    useCallback(() => {
      refetchRates()
      refetchCurrencies()
    }, [refetchCurrencies, refetchRates]),
  )

  return (
    <AppLayout contentStyle={styles.content}>
      <Converter />
    </AppLayout>
  )
}

export const HomeScreen = memo(HomeScreenComponent)
