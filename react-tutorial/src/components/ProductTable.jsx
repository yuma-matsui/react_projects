import ProductCategoryRow from "./ProductCategoryRow"
import ProductRow from "./ProductRow"

const ProductTable = ({ items }) => {
  const sportingGoods = items.filter(item => item.category === 'Sporting Goods')
  const electronics = items.filter(item => item.category === 'Electronics')

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      { sportingGoods.length > 0 && (
        <tbody>
          <ProductCategoryRow
            category='Sporting Goods'
          />
          { sportingGoods.map(item => (
              <ProductRow
                key={item.name}
                item={item}
              />
            ))
          }
        </tbody>
      )}
      { electronics.length > 0 && (
        <tbody>
          <ProductCategoryRow
            category={'Electronics'}
            />
            { electronics.map(item => (
                <ProductRow
                  key={item.name}
                  item={item}
                />
              ))
            }
        </tbody>
      )}
    </table>
  )
}

export default ProductTable
