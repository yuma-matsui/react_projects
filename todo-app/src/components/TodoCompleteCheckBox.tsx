import { useState } from "react";
import { ChangeEvent, FC, memo } from "react";
import { useTodoItem, useTodoListsContext } from "../hooks";

type Props = {
  id: number;
}

const TodoCompleteCheckBox: FC<Props> = memo(({ id }) => {
  const { todoItems, setTodoItems } = useTodoListsContext()
  const { todoItem } = useTodoItem(todoItems, id)

  const [checked, setChecked] = useState<boolean>(false)

  const onChangeComplete = (e: ChangeEvent<HTMLInputElement>) => {
    setChecked(e.target.checked)

    const newTodoItems = todoItems.map(item => {
      if (item.id === id) return ({
        id: item.id,
        title: item.title,
        isPriority: item.isPriority,
        completed: e.target.checked
      })
      return item
    })
    localStorage.setItem('todo-items', JSON.stringify(newTodoItems))
    setTodoItems(newTodoItems)
  }

  return (
    <>
      <input
        type="checkbox"
        checked={checked}
        onChange={onChangeComplete}
      />
    </>
  )
})

export default TodoCompleteCheckBox
