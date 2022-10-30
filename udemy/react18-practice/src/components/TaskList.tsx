import { FC, useDeferredValue } from "react"
import { Task } from "../types/task"

type Props = {
  taskList: Array<Task>;
}

export const TaskList: FC<Props> = ({ taskList }) => {
  const deferredTaskList = useDeferredValue(taskList)
  return (
    <>
      { deferredTaskList.map(task => (
          <div key={task.id} style={{ width: '300px', margin: 'auto', background: 'lavender' }}>
            <p>タイトル: {task.title}</p>
            <p>担当: {task.assignee}</p>
          </div>
        ))
      }
    </>
  )
}
