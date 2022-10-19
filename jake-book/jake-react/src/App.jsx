import { useContext, memo } from 'react'
import { AdminFlagContext } from './components/providers/AdminFlagProvider'
import { Card } from './components/Card'

export const App = memo(() => {
  const { isAdmin, setIsAdmin } = useContext(AdminFlagContext)

  const onClickSwitch = () => {
    setIsAdmin(prev => !prev)
  }

  return (
    <div>
      { isAdmin ? <span>管理者です</span> : <span>管理者以外です</span> }
      <button onClick={ onClickSwitch }>切り替え</button>
      <Card />
    </div>
  )
})
