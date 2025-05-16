import React, {memo, useCallback, useRef} from 'react'
import {StyleSheet, TextInput, View} from 'react-native'
import {CurrencySelector, IconButton, Input} from '../common'
import {SwitchIcon} from '../icons'
import type {FC} from 'react'
import type {TextInputProps} from 'react-native'
import type {ConvertDirectionType, Currency} from '../../types'

const styles = StyleSheet.create({
  root: {gap: 16},
  selectorsContainer: {flexDirection: 'row', alignItems: 'flex-end', gap: 16},
  selector: {flex: 1},
  switchButton: {padding: 12, marginBottom: 1},
})

type Props = {
  fromCurrency: Currency | null
  toCurrency: Currency | null
  value: string
  onSwitchPress: () => void
  onChangeValue: (value: string) => void
  onSelectorPress: (directionType: ConvertDirectionType, currency: Currency | null) => void
}

const ConverterFormComponent: FC<Props> = ({
  onSelectorPress,
  fromCurrency,
  onSwitchPress,
  toCurrency,
  value,
  onChangeValue,
}) => {
  const inputRef = useRef<TextInput>(null)

  const handleFromCurrencyPress = useCallback(() => {
    onSelectorPress('from', fromCurrency)
  }, [fromCurrency, onSelectorPress])

  const handleToCurrencyPress = useCallback(() => {
    onSelectorPress('to', toCurrency)
  }, [toCurrency, onSelectorPress])

  const handleChangeValue = useCallback<NonNullable<TextInputProps['onChangeText']>>(
    (text) => {
      if (text === '') {
        inputRef.current?.setNativeProps({text: '0'})

        onChangeValue('0')
      } else if (text.length >= 2 && text.startsWith('0') && text[1] !== '.' && text[1] !== ',') {
        const nextText = text.substring(1)

        inputRef.current?.setNativeProps({text: nextText})

        onChangeValue(nextText)
      } else {
        onChangeValue(text)
      }
    },
    [onChangeValue],
  )

  return (
    <View style={styles.root}>
      <View style={styles.selectorsContainer}>
        <CurrencySelector
          onPress={handleFromCurrencyPress}
          currency={fromCurrency}
          label="From:"
          style={styles.selector}
        />

        <IconButton onPress={onSwitchPress} style={styles.switchButton}>
          <SwitchIcon />
        </IconButton>

        <CurrencySelector
          onPress={handleToCurrencyPress}
          currency={toCurrency}
          label="To:"
          style={styles.selector}
        />
      </View>

      <Input
        ref={inputRef}
        label="Amount:"
        keyboardType="numeric"
        onChangeText={handleChangeValue}
        value={value}
      />
    </View>
  )
}

export const ConverterForm = memo(ConverterFormComponent)
