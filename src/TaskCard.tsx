import { useState } from 'react'
import type { Task } from './schemas'

type TaskCardProps = Pick<Task, 'title' | 'done'>

function TaskCard({ title, done: initialDone }: TaskCardProps) {
  const [done, setDone] = useState(initialDone)

  return (
    <li className={`task-card${done ? ' task-card--done' : ''}`}>
      <input
        aria-label={`Mark "${title}" as done`}
        checked={done}
        className="task-checkbox"
        onChange={(event) => setDone(event.currentTarget.checked)}
        type="checkbox"
      />
      <p className="task-title">{title}</p>
    </li>
  )
}

export default TaskCard
