import { useState } from "react"
import { ChangeEvent } from "react"
import { useSaveTodoItems, useTodoFormInput, useTodoListsContext } from "../hooks"

const TodoCreateForm = () => {
  const { todoItems } = useTodoListsContext()

  const { saveTodoItems } = useSaveTodoItems()

  const {
    onSubmit,
    input,
    setInput,
    onChangeInput
  } = useTodoFormInput()
  
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
      completed: false,
      editable: false
    }

    const newTodoItems = [...todoItems, todo]
    saveTodoItems(newTodoItems)

    setInput('')
    setChecked(false)
  }

  return (
    <form
      onSubmit={onSubmit}
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
