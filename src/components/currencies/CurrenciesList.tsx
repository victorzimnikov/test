import React, {memo, useCallback} from 'react'
import {StyleSheet, View} from 'react-native'
import {Colors} from '../../constants'
import {CURRENCIES_ITEM_HEIGHT, CurrenciesListItem} from './CurrenciesListItem'
import {FlashList} from '@shopify/flash-list'
import type {FlashListProps} from '@shopify/flash-list'
import type {Currency} from '../../types'
import type {FC} from 'react'

const styles = StyleSheet.create({
  root: {backgroundColor: Colors.Grey, borderRadius: 8, overflow: 'hidden', flex: 1},
  separator: {height: 8},
})

const keyExtractor: NonNullable<FlashListProps<Currency>['keyExtractor']> = (item) => item.code

type Props = {
  data: Currency[]
  activeCurrencyCode: string | undefined | null
  onItemPress: (currency: Currency) => void
  isRefreshing: boolean
  onRefresh: () => void
}

const CurrenciesListComponent: FC<Props> = ({
  data,
  activeCurrencyCode,
  onItemPress,
  isRefreshing,
  onRefresh,
}) => {
  const renderItem = useCallback<NonNullable<FlashListProps<Currency>['renderItem']>>(
    ({item}) => (
      <CurrenciesListItem
        onPress={onItemPress}
        currency={item}
        isActive={activeCurrencyCode === item.code}
      />
    ),
    [activeCurrencyCode, onItemPress],
  )

  const renderItemSeparatorComponent = useCallback(() => <View style={styles.separator} />, [])

  return (
    <View style={styles.root}>
      <FlashList
        keyExtractor={keyExtractor}
        data={data}
        estimatedItemSize={CURRENCIES_ITEM_HEIGHT}
        renderItem={renderItem}
        ItemSeparatorComponent={renderItemSeparatorComponent}
        refreshing={isRefreshing}
        onRefresh={onRefresh}
      />
    </View>
  )
}

export const CurrenciesList = memo(CurrenciesListComponent)
