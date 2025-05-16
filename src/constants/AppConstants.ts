import {Dimensions, Platform} from 'react-native'

export const IS_DEV = __DEV__

export const IS_IOS = Platform.OS === 'ios'

export const DEVICE_WIDTH = Dimensions.get('screen').width
