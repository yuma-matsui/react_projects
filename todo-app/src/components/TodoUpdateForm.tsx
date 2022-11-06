import { FC } from "react"
import { useSaveTodoItems, useTodoFormInput, useTodoListsContext } from "../hooks"
import { Todo } from "../types"

type Props = {
  item: Todo
}

const TodoUpdateForm: FC<Props> = ({ item }) => {
  const { title } = item

  const { todoItems } = useTodoListsContext()

  const { saveTodoItems } = useSaveTodoItems()

  const { onSubmit, input, onChangeInput } = useTodoFormInput(title)

  const onClickUpdate = () => {
    const newTodoItems = todoItems.map(todoItem => {
      if (todoItem === item) return ({
        ...todoItem, 
        title: input,
        editable: false
      })
      return todoItem
    })

    saveTodoItems(newTodoItems)
  }

  return (
    <form
      onSubmit={onSubmit}
    >
      <input
        type="text"
        value={input}
        onChange={onChangeInput}
      />
      <input
        type="submit"
        value='更新'
        onClick={onClickUpdate}
      />
    </form>
  )
}

export default TodoUpdateForm
