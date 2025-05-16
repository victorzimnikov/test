import React, {memo} from 'react'
import {StyleSheet, Text, View} from 'react-native'
import {useSafeAreaInsets} from 'react-native-safe-area-context'
import {Colors, Typography} from '../../constants'
import type {FC, ReactNode} from 'react'

const HEADER_HEIGHT = 56

const styles = StyleSheet.create({
  root: {
    backgroundColor: Colors.White,
    flexDirection: 'row',
    gap: 12,
  },
  titleContainer: {flex: 1, justifyContent: 'center'},
  title: Typography.Header,
  actions: {alignItems: 'center', justifyContent: 'center'},
  leftAction: {marginLeft: 20},
  rightAction: {marginRight: 20},
})

export type AppHeaderProps = {
  title?: string
  leftComponent?: ReactNode
  rightComponent?: ReactNode
}

const AppHeaderComponent: FC<AppHeaderProps> = ({leftComponent, rightComponent, title}) => {
  const {top} = useSafeAreaInsets()

  const hasContent = title != null || leftComponent != null || rightComponent != null
  const headerHeight = hasContent ? HEADER_HEIGHT + top : top

  return (
    <View style={[styles.root, {height: headerHeight, paddingTop: top}]}>
      <View style={[styles.actions, styles.leftAction]}>{leftComponent}</View>
      <View style={styles.titleContainer}>
        {title != null ? <Text style={styles.title}>{title}</Text> : null}
      </View>
      <View style={[styles.actions, styles.rightAction]}>{rightComponent}</View>
    </View>
  )
}

export const AppHeader = memo(AppHeaderComponent)
