import React, {memo, useCallback, useMemo, useState} from 'react'
import {useHomeStore, useStore} from '../../store'
import {StyleSheet, View} from 'react-native'
import {formatCurrencyNumber, toNotNaNNumberOrZero} from '../../utils'
import {useNavigation} from '@react-navigation/native'
import {ConverterResult} from './ConverterResult'
import {ConverterForm} from './ConverterForm'
import type {AppNavigationParamList} from '../../constants'
import type {NavigationProp} from '@react-navigation/native'
import type {ConvertDirectionType, Currency} from '../../types'
import type {FC} from 'react'

const styles = StyleSheet.create({
  root: {paddingHorizontal: 20, gap: 16},
})

const ConverterComponent: FC = () => {
  const toCurrency = useHomeStore((s) => s.toCurrency)
  const fromCurrency = useHomeStore((s) => s.fromCurrency)
  const switchConvertDirection = useHomeStore((s) => s.switchConvertDirection)

  const navigation = useNavigation<NavigationProp<AppNavigationParamList>>()

  const rate = useStore((s) => s.rates?.[fromCurrency?.code ?? '']?.[toCurrency?.code ?? ''])

  const [value, setValue] = useState('1')

  const result = useMemo(() => {
    const newValue = toNotNaNNumberOrZero(value) * toNotNaNNumberOrZero(rate?.rate)

    return formatCurrencyNumber(newValue.toFixed(2))
  }, [rate?.rate, value])

  const handleCurrencyPress = useCallback(
    (directionType: ConvertDirectionType, activeCurrency: Currency | null) => {
      navigation.navigate('CurrencySelect', {directionType, activeCurrency})
    },
    [navigation],
  )

  return (
    <View style={styles.root}>
      <ConverterForm
        onSwitchPress={switchConvertDirection}
        fromCurrency={fromCurrency}
        toCurrency={toCurrency}
        onChangeValue={setValue}
        onSelectorPress={handleCurrencyPress}
        value={value}
      />

      <ConverterResult
        value={value}
        fromCurrencySymbol={fromCurrency?.symbol}
        result={result}
        toCurrencySymbol={toCurrency?.symbol}
      />
    </View>
  )
}

export const Converter = memo(ConverterComponent)
