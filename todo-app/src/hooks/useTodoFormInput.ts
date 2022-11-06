import { ChangeEvent, useState } from "react"

const useTodoFormInput = (initialValue: string = '') => {
  const onSubmit = (e: ChangeEvent<HTMLFormElement>) => e.preventDefault()

  const [input, setInput] = useState<string>(initialValue)
  const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => setInput(e.target.value)

  return { onSubmit, input, setInput, onChangeInput }
}

export default useTodoFormInput
