import React, {memo} from 'react'
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import {Colors, Typography} from '../../constants'
import {Flag} from './Flag'
import {ChevronIcon} from '../icons'
import type {Currency} from '../../types'
import type {FC} from 'react'
import type {TouchableOpacityProps} from 'react-native'

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.GreyDark,
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  content: {gap: 8, flexDirection: 'row', alignItems: 'center'},
  root: {gap: 8},
  code: Typography.Text,
  label: Typography.Text,
})

type Props = Omit<TouchableOpacityProps, 'children'> & {
  currency: Currency | null
  label?: string
}

const CurrencySelectorComponent: FC<Props> = ({currency, activeOpacity = 0.7, label, ...props}) => {
  return (
    <View style={[styles.root, props.style]}>
      {label != null ? <Text style={styles.label}>{label}</Text> : null}
      <TouchableOpacity {...props} activeOpacity={activeOpacity} style={styles.button}>
        <View style={styles.content}>
          <Flag currencyCode={currency?.code} />

          <Text>{currency?.code}</Text>
        </View>

        <ChevronIcon />
      </TouchableOpacity>
    </View>
  )
}

export const CurrencySelector = memo(CurrencySelectorComponent)
