import { useState } from 'react'
import type { Task } from './schemas'
import NewTaskInput from './NewTaskInput'
import TaskList from './TaskList'

const initialTasks: Task[] = [
  { id: 1, title: 'Read Chapter 3', done: false },
  { id: 2, title: 'Build TaskCard', done: true },
  { id: 3, title: 'Start TaskList', done: false },
]

function TaskBoard() {
  const [tasks, setTasks] = useState(initialTasks)

  function handleAddTask(title: string) {
    setTasks((currentTasks) => {
      const nextId = currentTasks.reduce(
        (largestId, task) => Math.max(largestId, task.id),
        0,
      ) + 1

      return [...currentTasks, { id: nextId, title, done: false }]
    })
  }

  return (
    <section aria-labelledby="board-title" className="board">
      <div className="board-header">
        <h2 id="board-title">Your tasks</h2>
        <span className="task-count">
          {tasks.length} {tasks.length === 1 ? 'task' : 'tasks'}
        </span>
      </div>
      <NewTaskInput onAddTask={handleAddTask} />
      <TaskList tasks={tasks} />
    </section>
  )
}

export default TaskBoard
