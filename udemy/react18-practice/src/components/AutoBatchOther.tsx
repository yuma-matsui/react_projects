import { FC, useState } from 'react'
import axios from 'axios'

type Todo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean
}

export const AutoBatchOther: FC = () => {
  console.log('AutoBatchOther')

  const [todos, setTodos] = useState<Array<Todo>>([])
  const [isFinish, setIsFinish] = useState<boolean>(false)

  const fetchTodo = async () => {
    try {
      const result = await axios.get<Array<Todo>>('https://jsonplaceholder.typicode.com/todos')
      const todos = result.data
      setTodos(todos)
      setIsFinish(true)
    } catch (e) {
      if (e instanceof Error) console.error(e.message)
    }
  }

  return (
    <div>
      <p>AutoBatchOther</p>
      <button onClick={fetchTodo}>Fetch Todo</button>
      <ul>
        <p>isLoading: { isFinish ? 'true' : 'false' }</p>
        { todos.map(todo => (
            <li key={ todo.id }>{todo.title}</li>
          ))
        }
      </ul>
    </div>
  )
}
