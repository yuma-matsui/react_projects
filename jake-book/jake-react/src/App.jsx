import { useState, memo, useCallback } from 'react'
import { Child1 } from './components/Child1'
import { Child4 } from './components/Child4'

export const App = memo(() => {
    console.log('Appレンダリング')

    const [num, setNum] = useState(0)

    const countUp = () => {
      setNum(prev => prev + 1)
    }

    const countReset = useCallback(() => {
      setNum(0)
    }, [])

    return (
      <>
        <button onClick={ countUp }>ボタン</button>
        <p>{ num }</p>
        <Child1 resetFunction={ countReset } />
        <Child4 />
      </>
    )
  }
)
