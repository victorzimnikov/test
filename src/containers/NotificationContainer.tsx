import React, {createContext, useCallback, useContext, useMemo, useState} from 'react'
import {noop} from '../utils'
import {NotificationsList} from '../components/notifications'
import type {Notification} from '../types'
import type {FC, PropsWithChildren} from 'react'

type NotificationContextState = {
  showNotification: (message: string) => void
}

const NotificationContext = createContext<NotificationContextState>({
  showNotification: noop,
})

export const NotificationContainer: FC<PropsWithChildren> = ({children}) => {
  const [notifications, setNotifications] = useState<Notification[]>([])

  const handleShowNotification = useCallback(
    (message: string) => setNotifications((prev) => [...prev, {message, id: Date.now()}]),
    [],
  )

  const value = useMemo(
    () => ({
      showNotification: handleShowNotification,
    }),
    [handleShowNotification],
  )

  const handleRemoveMessage = useCallback(
    (notification: Notification) =>
      setNotifications((prev) => prev.filter((item) => item.id !== notification.id)),
    [],
  )

  return (
    <NotificationContext.Provider value={value}>
      {children}

      <NotificationsList notifications={notifications} onRemove={handleRemoveMessage} />
    </NotificationContext.Provider>
  )
}

export const useNotificationContext = () =>
  useContext<NotificationContextState>(NotificationContext)
