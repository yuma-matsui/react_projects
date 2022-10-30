import { useQuery } from "@tanstack/react-query"
import axios from "axios"
import { Todo } from "../types/todo"

const fetchTodos = async () => {
  const result = await axios.get<Array<Todo>>('https://jsonplaceholder.typicode.com/todos')
  return result.data
}

export const TodoList = () => {
  const { data } = useQuery<Array<Todo>>(['todos'], fetchTodos)

  return (
    <div
      style={{
        height: '300px',
        border: '2px solid gray',
        background: 'mistyrose',
        overflowY: 'scroll'
      }}
    >
      <h2>Todo</h2>
      { data?.map(todo => <p key={todo.id}>{todo.title}</p>)}
    </div>
  )
}
