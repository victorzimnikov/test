import {NavigationProp, useNavigation} from '@react-navigation/native'
import React, {memo, useEffect} from 'react'
import {StyleSheet, Text, View} from 'react-native'
import {Typography} from '../constants'
import {useHomeStore, useStore} from '../store'
import type {AppNavigationParamList} from '../constants'
import type {FC} from 'react'

const styles = StyleSheet.create({
  root: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  text: Typography.Text,
})

const SplashScreenComponent: FC = () => {
  // Downloading data from AsyncStorage
  useStore()
  useHomeStore()

  const navigation = useNavigation<NavigationProp<AppNavigationParamList>>()

  useEffect(() => {
    // Simulated application loading
    setTimeout(() => {
      navigation.navigate('Home')
    }, 3000)
  }, [navigation])

  return (
    <View style={styles.root}>
      <Text style={styles.text}>... Loading</Text>
    </View>
  )
}

export const SplashScreen = memo(SplashScreenComponent)
