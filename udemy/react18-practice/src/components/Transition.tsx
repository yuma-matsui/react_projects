import { FC, useState } from "react"
import { Avatar } from "./Avatar"
import type { Task } from "../types/task"
import { TaskList } from "./TaskList"

const member = {
  a: 'A',
  b: 'B',
  c: 'C'
}

const generateDummyTasks = (): Array<Task> => {
  return (
    Array(10000)
      .fill('')
      .map((_, index) => {
        const id: number = index + 1
        const assignee = id % 3 === 0 ? member.a : id % 2 === 0 ? member.b : member.c
        return {
          id,
          title: `タスク${id}`,
          assignee
        }
      })
  )
}

const tasks = generateDummyTasks()

const filteringAssignee = (assignee: string) => {
  if (assignee === '') return tasks
  return tasks.filter(task => task.assignee === assignee)
}

export const Transition: FC = () => {
  const [selectedAssignee, setSelectedAssignee] = useState<string>('')
  const [taskList, setTaskList] = useState<Array<Task>>(tasks)
  const [isShowList, setIsShowList] = useState<boolean>(false)

  const onClickAssignee = (assignee: string) => {
    setSelectedAssignee(assignee)
    setTaskList(filteringAssignee(assignee))
  }

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}
    >
      <p>Transition</p>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <Avatar onClick={onClickAssignee} isSelected={selectedAssignee === member.a}>A</Avatar>
        <Avatar onClick={onClickAssignee} isSelected={selectedAssignee === member.b}>B</Avatar>
        <Avatar onClick={onClickAssignee} isSelected={selectedAssignee === member.c}>C</Avatar>
      </div>
      <br />
      <button onClick={ () => onClickAssignee('') }>リセット</button>
      <br />
      <br />
      <button onClick={ () => setIsShowList(!isShowList) }>表示切り替え</button>
      {
        isShowList &&
        <TaskList
          taskList={taskList}
        />
      }
    </div>
  )
}
