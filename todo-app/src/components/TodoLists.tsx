import { memo } from "react"
import { useTodoListsContext } from "../hooks"
import TodoList from "./TodoList"

const TodoLists = memo(() => {
  const { todoItems } = useTodoListsContext()

  return (
    <div>
      <h2>Your Items</h2>
      { todoItems.map(item => (
        <TodoList
          key={item.id}
          todoItem={item}
        />
      ))}
    </div>
  )
})

export default TodoLists
