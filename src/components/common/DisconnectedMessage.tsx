import React, {memo} from 'react'
import {StyleSheet, Text, View} from 'react-native'
import {Colors, Typography} from '../../constants'
import {useConnection} from '../../hooks'
import type {FC} from 'react'

const styles = StyleSheet.create({
  root: {
    height: 52,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.GreyDark,
  },
  text: Typography.Text,
})

const DisconnectedMessageComponent: FC = () => {
  const connectionType = useConnection()

  if (connectionType !== 'disconnected') {
    return null
  }

  return (
    <View style={styles.root}>
      <Text style={styles.text}>Disconnected</Text>
    </View>
  )
}

export const DisconnectedMessage = memo(DisconnectedMessageComponent)
