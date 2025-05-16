import React, {memo, useCallback} from 'react'
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import {Flag, Radio} from '../common'
import {Colors, Typography} from '../../constants'
import type {Currency} from '../../types'
import type {FC} from 'react'

export const CURRENCIES_ITEM_HEIGHT = 52

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: CURRENCIES_ITEM_HEIGHT,
    paddingHorizontal: 16,
    borderRadius: 8,
  },
  activeRoot: {backgroundColor: Colors.GreyDark},
  content: {flexDirection: 'row', gap: 8, alignItems: 'center'},
  text: Typography.Text,
})

type Props = {
  currency: Currency
  isActive: boolean
  onPress: (currency: Currency) => void
}

const CurrenciesListItemComponent: FC<Props> = ({currency, isActive, onPress}) => {
  const handlePress = useCallback(() => {
    onPress(currency)
  }, [currency, onPress])

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={[styles.root, isActive && styles.activeRoot]}
      onPress={handlePress}>
      <View style={styles.content}>
        <Flag currencyCode={currency.code} />

        <Text numberOfLines={1} style={styles.text}>
          {currency.code} - {currency.name}
        </Text>
      </View>

      <Radio isActive={isActive} />
    </TouchableOpacity>
  )
}

export const CurrenciesListItem = memo(CurrenciesListItemComponent)
