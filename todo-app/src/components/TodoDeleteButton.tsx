import { FC, useState } from "react";
import { useEffect } from "react";
import { memo } from "react"
import { useTodoItem, useTodoListsContext } from "../hooks";
import { Todo } from "../types";

type Props = {
  id: number;
}

const TodoDeleteButton: FC<Props> = memo(({ id }) => {
  const { todoItems, setTodoItems } = useTodoListsContext()
  const { todoItem } = useTodoItem(todoItems, id)

  const onClickDelete = () => {
    const newTodoItems = [...todoItems].filter(item => item !== todoItem)
    localStorage.setItem('todo-items', JSON.stringify(newTodoItems))
    setTodoItems(newTodoItems)
  }

  return (
    <button
      onClick={onClickDelete}
      disabled={todoItem?.completed}
    >
      削除
    </button>
  )
})

export default TodoDeleteButton
