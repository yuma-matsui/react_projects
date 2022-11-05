import { TitleHeader, TodoCreateForm, TodoLists } from "./components"
import { TodoListsProvider } from "./providers/TodoListsProvider"

function App() {  
  return (
    <>
      <TitleHeader />
      <TodoListsProvider>
        <TodoLists />
        <TodoCreateForm />
      </TodoListsProvider>
    </>
  )
}

export default App
