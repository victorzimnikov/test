import React, {memo} from 'react'
import {StyleSheet, View} from 'react-native'
import {AppHeader, AppHeaderProps} from './AppHeader'
import {Colors} from '../../constants'
import {DisconnectedMessage} from '../common'
import type {StyleProp, ViewStyle} from 'react-native'
import type {FC, PropsWithChildren} from 'react'

const styles = StyleSheet.create({
  root: {flex: 1, backgroundColor: Colors.White},
  content: {flex: 1},
})

type Props = AppHeaderProps & {
  contentStyle?: StyleProp<ViewStyle>
}

const AppLayoutComponent: FC<PropsWithChildren<Props>> = ({
  children,
  contentStyle,
  ...headerProps
}) => {
  return (
    <View style={styles.root}>
      <AppHeader {...headerProps} />

      <DisconnectedMessage />

      <View style={[styles.content, contentStyle]}>{children}</View>
    </View>
  )
}

export const AppLayout = memo(AppLayoutComponent)
