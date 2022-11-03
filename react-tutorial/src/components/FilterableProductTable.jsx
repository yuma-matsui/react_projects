import { useCallback, useEffect, useState } from 'react'
import shopItems from '../store/shop_items'
import ProductTable from './ProductTable'
import SearchBar from './SearchBar'

const FilterableProductTable = () => {
  const [keyword, setKeyword] = useState('')
  const [isStocked, setIsStocked] = useState(false)
  const [items, setItems] = useState(shopItems)

  const onChangeSearchInput = useCallback(input => {
    setKeyword(input)
  }, [])

  const onChangeStockCheck = useCallback(checked => {
    setIsStocked(checked)
  }, [])
  
  useEffect(() => {
    setItems(shopItems.filter(item => item.name.includes(keyword)))
  }, [keyword])
  
  useEffect(() => {
    if (isStocked) setItems(items.filter(item => item.stocked))
    if (!isStocked) setItems(shopItems.filter(item => item.name.includes(keyword)))
  }, [isStocked])

  return (
    <>
      <SearchBar
        keyword={keyword}
        onChangeSearchInput={onChangeSearchInput}
        stocked={isStocked}
        onChangeStockCheck={onChangeStockCheck}
      />
      <ProductTable
        items={items}
      />
    </>
  )
}

export default FilterableProductTable
