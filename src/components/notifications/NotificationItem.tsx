import React, {memo, useEffect} from 'react'
import {StyleSheet, Text} from 'react-native'
import Animated, {SlideInUp} from 'react-native-reanimated'
import {Colors, Typography} from '../../constants'
import type {Notification} from '../../types'
import type {FC} from 'react'

const styles = StyleSheet.create({
  root: {padding: 12, borderRadius: 8, backgroundColor: Colors.Grey},
  text: Typography.Text,
})

type Props = {
  notification: Notification
  onRemove: (notification: Notification) => void
}

const NotificationItemComponent: FC<Props> = ({notification, onRemove}) => {
  useEffect(() => {
    const timeout = setTimeout(() => onRemove(notification), 3000)

    return () => clearTimeout(timeout)
  }, [notification, onRemove])

  return (
    <Animated.View style={styles.root} entering={SlideInUp}>
      <Text style={styles.text}>{notification.message}</Text>
    </Animated.View>
  )
}

export const NotificationItem = memo(NotificationItemComponent)
