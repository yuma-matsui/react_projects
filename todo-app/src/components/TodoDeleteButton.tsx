import { FC } from "react";
import { memo } from "react"
import { useSaveTodoItems, useTodoListsContext } from "../hooks";
import { Todo } from "../types";

type Props = {
  item: Todo
}

const TodoDeleteButton: FC<Props> = memo(({ item }) => {
  const { todoItems } = useTodoListsContext()

  const { saveTodoItems } = useSaveTodoItems()

  const onClickDelete = () => {
    const newTodoItems = [...todoItems].filter(todoItem => todoItem !== item)
    saveTodoItems(newTodoItems)
  }

  return (
    <button
      onClick={onClickDelete}
    >
      削除
    </button>
  )
})

export default TodoDeleteButton
