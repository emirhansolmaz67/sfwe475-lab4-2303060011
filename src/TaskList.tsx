import type { Task } from './schemas'
import TaskCard from './TaskCard'

type TaskListProps = {
  tasks: Task[]
}

function TaskList({ tasks }: TaskListProps) {
  return (
    <ul aria-label="Tasks" className="task-list">
      {tasks.length === 0 ? (
        <li className="empty-state">No tasks yet. Add one above to get started.</li>
      ) : (
        tasks.map((task) => (
          <TaskCard key={task.id} title={task.title} done={task.done} />
        ))
      )}
    </ul>
  )
}

export default TaskList
