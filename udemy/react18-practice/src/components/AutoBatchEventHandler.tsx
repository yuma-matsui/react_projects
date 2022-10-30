import { FC, useState } from "react"

export const AutoBatchEventHandler: FC = () => {
  console.log('AutoBatchEvent')
  const [state1, setState1] = useState<number>(0)
  const [state2, setState2] = useState<number>(0)

  const onClickCount = () => {
    console.log(state1)
    setState1(prev => prev + 1)
    console.log(state1)
    setState2(prev => prev + 2)
  }

  return (
    <div>
      <p>AutoBatchEventHandler</p>
      <button onClick={ onClickCount }>State更新</button>
      <p>State1: { state1 }</p>
      <p>State2: { state2 }</p>
    </div>
  )
}
