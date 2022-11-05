import { useEffect, useState } from "react"
import { Todo } from "../types"

const useTodoItem = (todoItems: Array<Todo>,id: number) => {
  const [todoItem, setTodoItem] = useState<Todo | null>(null)

  useEffect(() => {
    setTodoItem(todoItems.find(item => item.id === id) as Todo)
  }, [])

  return { todoItem }
}

export default useTodoItem
