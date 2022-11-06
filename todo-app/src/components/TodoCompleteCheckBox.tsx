import { useState } from "react";
import { ChangeEvent, FC, memo } from "react";
import { useSaveTodoItems, useTodoListsContext } from "../hooks";
import { Todo } from "../types";

type Props = {
  item: Todo
}

const TodoCompleteCheckBox: FC<Props> = memo(({ item }) => {
  const { id, title, isPriority, completed, editable } = item
  const { todoItems } = useTodoListsContext()

  const [checked, setChecked] = useState<boolean>(completed)

  const { saveTodoItems } = useSaveTodoItems()

  const onChangeComplete = (e: ChangeEvent<HTMLInputElement>) => {
    const newTodoItems = todoItems.map(todoItem => {
      if (todoItem === item) return ({
        id,
        title,
        isPriority,
        completed: e.target.checked,
        editable
      })
      return todoItem
    })

    saveTodoItems(newTodoItems)
    setChecked(e.target.checked)
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
