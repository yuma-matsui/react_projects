import { FC, memo } from "react"
import { useSaveTodoItems, useTodoListsContext } from "../hooks";
import { Todo } from "../types"

type Props = {
  item: Todo;
}

const TodoEditButton: FC<Props> = memo(({ item }) => {
  const { id, title, isPriority, completed } = item
  const { todoItems } = useTodoListsContext()

  const { saveTodoItems } = useSaveTodoItems()

  const onClickEdit = () => {
    const newTodoItems = todoItems.map(todoItem => {
      if (todoItem === item) return ({
        id,
        title,
        isPriority,
        completed,
        editable: true
      })
      return todoItem
    })

    saveTodoItems(newTodoItems)
  }

  return (
    <button
      onClick={onClickEdit}
    >
      編集
    </button>
  )
})

export default TodoEditButton
