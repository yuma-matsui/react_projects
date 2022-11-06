import { memo } from "react"
import { useTodoListsContext } from "../hooks"
import TodoList from "./TodoList"

const TodoLists = memo(() => {
  const { todoItems } = useTodoListsContext()
  const title = todoItems.length > 0 ? 'Your Items' : 'Add your tasks'

  return (
    <div>
      <h2>{title}</h2>
      { todoItems.map(item => (
        <TodoList
          key={item.id}
          item={item}
        />
      ))}
    </div>
  )
})

export default TodoLists
