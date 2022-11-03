const SearchBar = ({
  keyword,
  onChangeSearchInput,
  stocked,
  onChangeStockCheck
}) => {
  const handleChangeInput = (e) => onChangeSearchInput(e.target.value)
  const handleChangeCheckbox = (e) => onChangeStockCheck(e.target.checked)

  return (
    <>
      <input
        style={{
          display: 'block',
          marginBottom: '8px'
        }}
        type="text"
        placeholder="Search..."
        value={keyword}
        onChange={handleChangeInput}
      />
      <input
        id="stock"
        type="checkbox"
        checked={stocked}
        onChange={handleChangeCheckbox}
      />
      <label htmlFor="stock">Only show products in stock</label>
    </>
  )
}

export default SearchBar
