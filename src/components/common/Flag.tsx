import React, {memo} from 'react'
import {Image, StyleSheet, View} from 'react-native'
import {Colors, Flags} from '../../constants'
import type {FC} from 'react'

const styles = StyleSheet.create({
  image: {width: 30, height: 20, borderWidth: 1, borderColor: Colors.Black, borderRadius: 4},
})

type Props = {
  currencyCode: string | undefined | null
}

const FlagComponent: FC<Props> = ({currencyCode}) => {
  if (currencyCode == null) {
    return <View style={styles.image} />
  }

  return <Image source={Flags[currencyCode]} style={styles.image} />
}

export const Flag = memo(FlagComponent)
