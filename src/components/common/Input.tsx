import React, {forwardRef, memo} from 'react'
import {StyleSheet, Text, TextInput, View} from 'react-native'
import {Colors, Typography} from '../../constants'
import type {TextInputProps} from 'react-native'
import type {ReactNode} from 'react'

const styles = StyleSheet.create({
  content: {
    flexDirection: 'row',
    gap: 8,
    borderRadius: 8,
    borderWidth: 1,
    overflow: 'hidden',
    borderColor: Colors.Black,
    backgroundColor: Colors.White,
  },
  root: {gap: 8},
  startAdornment: {paddingLeft: 16, alignItems: 'center', justifyContent: 'center'},
  endAdornment: {paddingRight: 16, alignItems: 'center', justifyContent: 'center'},
  input: {
    height: 43,
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 0,
    paddingBottom: 0,
    ...Typography.Text,
  },
  inputWithEndAdornment: {paddingRight: 0},
  inputWithStartAdornment: {paddingLeft: 0},
})

type Props = TextInputProps & {
  startAdornment?: ReactNode
  endAdornment?: ReactNode
  label?: string
}

const InputComponent = forwardRef<TextInput, Props>(
  ({startAdornment, endAdornment, style, label, ...inputProps}, ref) => (
    <View style={[styles.root, style]}>
      {label != null ? <Text>{label}</Text> : null}

      <View style={styles.content}>
        {startAdornment != null ? (
          <View style={styles.startAdornment}>{startAdornment}</View>
        ) : null}

        <TextInput
          {...inputProps}
          ref={ref}
          underlineColorAndroid={Colors.Transparent}
          style={[
            styles.input,
            startAdornment != null && styles.inputWithStartAdornment,
            endAdornment != null && styles.inputWithEndAdornment,
          ]}
        />

        {endAdornment != null ? <View style={styles.endAdornment}>{endAdornment}</View> : null}
      </View>
    </View>
  ),
)

export const Input = memo(InputComponent)
