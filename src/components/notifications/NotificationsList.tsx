import React, {memo} from 'react'
import {StyleSheet} from 'react-native'
import {NotificationItem} from './NotificationItem'
import {useSafeAreaInsets} from 'react-native-safe-area-context'
import Animated, {LinearTransition} from 'react-native-reanimated'
import type {Notification} from '../../types'
import type {FC} from 'react'

const styles = StyleSheet.create({
  root: {
    ...StyleSheet.absoluteFillObject,
    gap: 12,
    paddingBottom: 18,
    paddingHorizontal: 18,
  },
})

type Props = {
  notifications: Notification[]
  onRemove: (message: Notification) => void
}

const NotificationsListComponent: FC<Props> = ({notifications, onRemove}) => {
  const {top} = useSafeAreaInsets()

  return (
    <Animated.View
      pointerEvents="none"
      style={[styles.root, {paddingTop: top + 18}]}
      layout={LinearTransition}>
      {notifications.map((notification) => (
        <NotificationItem key={notification.id} notification={notification} onRemove={onRemove} />
      ))}
    </Animated.View>
  )
}

export const NotificationsList = memo(NotificationsListComponent)
