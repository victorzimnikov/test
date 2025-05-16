import React, {memo} from 'react'
import {StyleSheet} from 'react-native'
import {GestureHandlerRootView} from 'react-native-gesture-handler'
import {NavigationContainer} from './NavigationContainer'
import {NotificationContainer} from './NotificationContainer'
import {SafeAreaProvider} from 'react-native-safe-area-context'
import {QueryContainer} from './QueryContainer'
import type {FC} from 'react'

const styles = StyleSheet.create({
  root: {flex: 1},
})
const AppContainerComponent: FC = () => {
  return (
    <GestureHandlerRootView style={styles.root}>
      <SafeAreaProvider>
        <QueryContainer>
          <NotificationContainer>
            <NavigationContainer />
          </NotificationContainer>
        </QueryContainer>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  )
}

export const AppContainer = memo(AppContainerComponent)
