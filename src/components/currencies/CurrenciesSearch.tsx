import React, {memo} from 'react'
import {Input} from '../common'
import {SearchIcon} from '../icons'
import type {FC} from 'react'

type Props = {
  value: string
  onChange: (text: string) => void
}

const CurrenciesSearchComponent: FC<Props> = ({value, onChange}) => {
  return (
    <Input
      value={value}
      onChangeText={onChange}
      startAdornment={<SearchIcon />}
      placeholder="USD"
    />
  )
}

export const CurrenciesSearch = memo(CurrenciesSearchComponent)
