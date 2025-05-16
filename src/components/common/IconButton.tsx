import React, {memo} from 'react'
import {TouchableOpacity} from 'react-native'
import type {TouchableOpacityProps} from 'react-native'
import type {FC} from 'react'

const IconButtonComponent: FC<TouchableOpacityProps> = ({
  children,
  activeOpacity = 0.7,
  ...props
}) => {
  return (
    <TouchableOpacity {...props} activeOpacity={activeOpacity}>
      {children}
    </TouchableOpacity>
  )
}

export const IconButton = memo(IconButtonComponent)
