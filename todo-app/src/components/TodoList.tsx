import { FC, memo } from "react"
import { Todo } from "../types"
import TodoCompleteCheckBox from "./TodoCompleteCheckBox"
import TodoDeleteButton from "./TodoDeleteButton"
import TodoEditButton from "./TodoEditButton"

type Props = {
  todoItem: Todo
}

const TodoList: FC<Props> = memo(({ todoItem: { id, title, completed, isPriority} }) => {
  const style = {
    color: isPriority ? 'red' : 'black',
    textDecoration: completed ? 'line-through' : 'none',
    listStyle: 'none'
  }

  return (
    <li style={style}>
      <div
        style={{
          display: 'flex',
        }}
      >
        <TodoCompleteCheckBox id={id}/>
        <p>{title}</p>
        <TodoEditButton />
        <TodoDeleteButton id={id} />
      </div>
    </li>
  )
})

export default TodoList
