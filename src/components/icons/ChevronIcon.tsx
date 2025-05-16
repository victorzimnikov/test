import React, {memo} from 'react'
import Svg, {Path} from 'react-native-svg'
import {Colors} from '../../constants'
import type {FC} from 'react'

type Props = {
  color?: string
  size?: number
}

const ChevronIconComponent: FC<Props> = ({size = 18, color = Colors.Black}) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 19 18" fill="none">
      <Path
        d="M5 6.75L9.5 11.25L14 6.75"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export const ChevronIcon = memo(ChevronIconComponent)
