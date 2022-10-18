import { Fragment } from 'react'
import { ColorMessage } from './components/ColorMessage'
import { CssModules } from './components/CssModules'
import { StyledJsx } from './components/StyledJsx'
import { StyledComponents } from './components/StyledComponents'
import { Emotion } from './components/Emotion'
import { TailwindCss } from './components/TailwindCss'

export const App = () => {
  return (
    <Fragment>
      <h1 style={ {color: 'red', marginTop: '30px' } }>Hello World</h1>
      <ColorMessage color='blue' fontSize="20px">お元気ですか？</ColorMessage>
      <ColorMessage color='pink' fontSize="18px">元気です</ColorMessage>
      <button>ボタン</button>
      <CssModules />
      <StyledJsx />
      <StyledComponents />
      <Emotion />
      <TailwindCss />
    </Fragment>
  )
}
