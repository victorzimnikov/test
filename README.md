# Getting Started

> **Note**: Make sure you have completed the [Set Up Your Environment](https://reactnative.dev/docs/set-up-your-environment) guide before proceeding.

## Step 1: Install dependencies

First, you will need to install dependencies.

```sh
yarn
```

## Step 2: Start Metro

Second, you will need to run **Metro**, the JavaScript build tool for React Native.

To start the Metro dev server, run the following command from the root of your React Native project:

```sh
yarn start
```

## Step 3: Build and run your app

With Metro running, open a new terminal window/pane from the root of your React Native project, and use one of the following commands to build and run your Android or iOS app:

### Android

```sh
yarn android
```

### iOS

For iOS, remember to install CocoaPods dependencies (this only needs to be run on first clone or after updating native deps).

The first time you create a new project, run the Ruby bundler to install CocoaPods itself:

```sh
bundle install
```

Then, and every time you update your native dependencies, run:

```sh
bundle exec pod install
```

For more information, please visit [CocoaPods Getting Started guide](https://guides.cocoapods.org/using/getting-started.html).

```sh
yarn ios
```

If everything is set up correctly, you should see your new app running in the Android Emulator, iOS Simulator, or your connected device.

This is one way to run your app — you can also build it directly from Android Studio or Xcode.

# Application Architecture

I didn't use any templates because the application is small. A simple flat architecture with a division into types is used.

```sh
src # source code
  \-- api # api requests hooks
  \-- assets # fonts and images
  \-- components
  \-- constants
  \-- containers # Navigation, Notification, Query containers
  \-- hooks
  \-- screens
  \-- store # data storage
  \-- types
  \-- utils # auxiliary utilities
tools - developing tools
  \-- mapFlags # creating file with flags imports. Need run when changes files in src/assets/flags
```
# Scripts

Custom scripts

```sh
yarn flags:update # creating file with flags imports
yarn lint # checking code errors
yarn format # formatting code
yarn dts # checking typings
yarn ci # combined format & lint & dts. for fast run and CI/CD
```

# Using libraries

```sh
@react-native-async-storage/async-storage # permanent data storage
@react-native-community/netinfo # detect network connection
@react-navigation # app navigation
@shopify/flash-list # replacing the FlashList. It has the best performance
react-native-svg # render svg icons
react-query # making requests to the server
zustand # state manager
prettier # code formatter
```