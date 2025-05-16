import React, {memo} from 'react'
import {StyleSheet, View} from 'react-native'
import {Colors} from '../../constants'
import type {FC} from 'react'

const styles = StyleSheet.create({
  root: {
    width: 16,
    height: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: Colors.Black,
    backgroundColor: Colors.White,
    alignItems: 'center',
    justifyContent: 'center',
  },
  dot: {backgroundColor: Colors.Black, width: 8, height: 8, borderRadius: 4},
})

type Props = {
  isActive: boolean
}

const RadioComponent: FC<Props> = ({isActive}) => {
  return <View style={styles.root}>{isActive ? <View style={styles.dot} /> : null}</View>
}

export const Radio = memo(RadioComponent)
