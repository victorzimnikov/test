import React, {memo, useMemo} from 'react'
import {StyleSheet, Text, View} from 'react-native'
import {Typography} from '../../constants'
import {formatCurrencyNumber} from '../../utils'
import type {FC} from 'react'

const styles = StyleSheet.create({
  root: {gap: 4},
  value: Typography.Text,
  result: Typography.Title,
})

type Props = {
  value: string
  result: string
  toCurrencySymbol: string | undefined
  fromCurrencySymbol: string | undefined
}

const ConverterResultComponent: FC<Props> = ({
  fromCurrencySymbol,
  result,
  toCurrencySymbol,
  value,
}) => {
  const formattedValue = useMemo(() => {
    if (value.includes(',')) {
      return formatCurrencyNumber(value.replace(/,/g, '.'))
    }

    return formatCurrencyNumber(value)
  }, [value])

  return (
    <View style={styles.root}>
      <Text style={styles.value}>
        {formattedValue}
        {fromCurrencySymbol} =
      </Text>
      <Text style={styles.result}>
        {result} {toCurrencySymbol}
      </Text>
    </View>
  )
}

export const ConverterResult = memo(ConverterResultComponent)
