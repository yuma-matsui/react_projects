import { useState } from "react"
import { ChangeEvent } from "react"
import { useTodoListsContext } from "../hooks"

const TodoCreateForm = () => {
  const { todoItems, setTodoItems } = useTodoListsContext()

  const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => e.preventDefault()

  const [input, setInput] = useState<string>('')
  const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => setInput(e.target.value)
  
  const [checked, setChecked] = useState(false)
  const onChangeCheck = (e: ChangeEvent<HTMLInputElement>) => setChecked(e.target.checked)

  const createNewTodo = () => {
    if (input === '') {
      alert('Todo名を入力してください')
      return
    }

    const todo = {
      id: todoItems.length + 1,
      title: input,
      isPriority: checked,
      completed: false
    }

    const newTodoItems = [...todoItems, todo]
    localStorage.setItem('todo-items', JSON.stringify(newTodoItems))
    setTodoItems(newTodoItems)

    setInput('')
    setChecked(false)
  }

  return (
    <form
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        onChange={onChangeInput}
        value={input}
      />
      <input
        type='submit'
        value='追加'
        onClick={createNewTodo}
      />
      <br />
      <label htmlFor="priority">
        <input
          type="checkbox"
          id="priority"
          checked={checked}
          onChange={onChangeCheck}
        />
        Priority
      </label>
    </form>
  )
}

export default TodoCreateForm
