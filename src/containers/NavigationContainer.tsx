import {createNativeStackNavigator} from '@react-navigation/native-stack'
import React, {memo} from 'react'
import {NavigationContainer as RNNavigationContainer} from '@react-navigation/native'
import {CurrencySelectScreen, HomeScreen, SplashScreen} from '../screens'
import type {AppNavigationParamList} from '../constants'
import type {FC} from 'react'

const Stack = createNativeStackNavigator<AppNavigationParamList>()

const NavigationContainerComponent: FC = () => {
  return (
    <RNNavigationContainer>
      <Stack.Navigator initialRouteName="Splash" screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="CurrencySelect" component={CurrencySelectScreen} />
      </Stack.Navigator>
    </RNNavigationContainer>
  )
}

export const NavigationContainer = memo(NavigationContainerComponent)
