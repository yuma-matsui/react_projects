import { Todo } from "../types"
import useTodoListsContext from "./useTodoListsContext"

const useSaveTodoItems = () => {
  const { setTodoItems } = useTodoListsContext()

  const saveTodoItems =  (todoItems: Array<Todo>) => {
    localStorage.setItem('todo-items', JSON.stringify(todoItems))
    setTodoItems(todoItems)
  }

  return { saveTodoItems }
}

export default useSaveTodoItems
