/**
 * @format
 */

import {AppRegistry} from 'react-native'
import {name as appName} from './app.json'
import {AppContainer} from './src/containers'

AppRegistry.registerComponent(appName, () => AppContainer)
