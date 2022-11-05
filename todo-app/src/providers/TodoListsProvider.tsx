import { ReactNode, useEffect, useState } from "react";
import { FC } from "react";
import { createContext, Dispatch, SetStateAction } from "react";
import { Todo } from "../types";

type todoListsContextType = {
  todoItems: Array<Todo>;
  setTodoItems: Dispatch<SetStateAction<Array<Todo>>>
}

type Props = {
  children: ReactNode;
}

export const todoListsContext = createContext<todoListsContextType>({} as todoListsContextType)

export const TodoListsProvider: FC<Props> = ({ children }) => {
  const [todoItems, setTodoItems] = useState<Array<Todo>>([])

  useEffect(() => {
    const items = localStorage.getItem('todo-items')
    if (items) setTodoItems(JSON.parse(items))
  }, [])

  return (
    <todoListsContext.Provider value={{ todoItems, setTodoItems }}>
      { children }
    </todoListsContext.Provider>
  )
}
