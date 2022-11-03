
const ProductRow = ({ item: { name, price, stocked } }) => {
  const style = {
    color: stocked ? 'black' : 'red'
  }

  return (
    <tr>
      <td style={style}>{name}</td>
      <td>{price}</td>
    </tr>
  )
}

export default ProductRow
