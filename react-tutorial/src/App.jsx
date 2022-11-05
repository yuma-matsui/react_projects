import { memo } from "react"
import { Card, Timer } from "./components"
import { useAdminFlag } from "./hooks/useAdminFlag"

const App = memo(() => {
  const { isAdmin, setIsAdmin } = useAdminFlag()

  const onClickSwitch = () => setIsAdmin(prev => !prev)
  const user = isAdmin ? '管理者です' : '管理者以外です'
  return (
    <>
      <span>{ user }</span>
      <button onClick={onClickSwitch}>切り替え</button>
      <Card />
      <hr />
      <Timer />
    </>
  )
})

export default App
