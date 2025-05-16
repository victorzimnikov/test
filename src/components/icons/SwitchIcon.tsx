import React, {memo} from 'react'
import Svg, {Path} from 'react-native-svg'
import {Colors} from '../../constants'
import type {FC} from 'react'

type Props = {
  color?: string
  size?: number
}

const SwitchIconComponent: FC<Props> = ({size = 18, color = Colors.Black}) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 19 18" fill="none">
      <Path
        d="M16.25 12.75H2.75M16.25 12.75L14 15M16.25 12.75L14 10.5M5 7.5L2.75 5.25M2.75 5.25L5 3M2.75 5.25H16.25"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export const SwitchIcon = memo(SwitchIconComponent)
