import { FC, memo } from "react"
import { Todo } from "../types"
import TodoCompleteCheckBox from "./TodoCompleteCheckBox"
import TodoDeleteButton from "./TodoDeleteButton"
import TodoEditButton from "./TodoEditButton"
import TodoUpdateForm from "./TodoUpdateForm"

type Props = {
  item: Todo
}

const TodoList: FC<Props> = memo(({ item }) => {
  const { title, isPriority, completed } = item
  const style = {
    color: isPriority ? 'red' : 'black',
    listStyle: 'none'
  }

  const pStyle = {
    textDecoration: completed ? 'line-through' : 'none'
  }

  return (
    <li style={style}>
      <div
        style={{
          display: 'flex',
        }}
      >
        <TodoCompleteCheckBox item={item} />
        { item.editable
          ? (<>
              <TodoUpdateForm
                item={item}
              />
            </>)
          : (<>
              <p style={pStyle}>{title}</p>
              <TodoEditButton item={item} />
            </>)
        }
        <TodoDeleteButton item={item} />
      </div>
    </li>
  )
})

export default TodoList
