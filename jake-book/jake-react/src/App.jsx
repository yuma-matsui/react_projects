import { Fragment, useState } from 'react'
import { ColorMessage } from './components/ColorMessage'

export const App = () => {
  const [num, setNum] = useState([2,3])

  const onClickButton = () => {
    setNum(prev => {
      return prev.map(num => num * num)
    })
  }

  return (
    <Fragment>
      <h1 style={ {color: 'red', marginTop: '30px' } }>Hello World</h1>
      <ColorMessage color='blue' fontSize="20px">お元気ですか？</ColorMessage>
      <ColorMessage color='pink' fontSize="18px">元気です</ColorMessage>
      <button onClick={ onClickButton }>ボタン</button>
      <p>{ num }</p>
    </Fragment>
  )
}
