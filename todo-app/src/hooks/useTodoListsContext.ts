import { useContext } from "react"
import { todoListsContext } from "../providers/TodoListsProvider"

const useTodoListsContext = () => useContext(todoListsContext)

export default useTodoListsContext
