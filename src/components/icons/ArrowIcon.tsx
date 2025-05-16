import React, {memo} from 'react'
import Svg, {Path} from 'react-native-svg'
import {Colors} from '../../constants'
import type {FC} from 'react'

type Props = {
  color?: string
  size?: number
}

const ArrowIconComponent: FC<Props> = ({size = 22, color = Colors.Black}) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 22 22" fill="none">
      <Path
        d="M4.58334 11H17.4167M4.58334 11L10.0833 16.5M4.58334 11L10.0833 5.5"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export const ArrowIcon = memo(ArrowIconComponent)
