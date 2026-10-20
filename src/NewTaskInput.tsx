import { useState, type FormEvent } from 'react'

type NewTaskInputProps = {
  onAddTask: (title: string) => void
}

function NewTaskInput({ onAddTask }: NewTaskInputProps) {
  const [text, setText] = useState('')

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const title = text.trim()

    if (!title) return

    onAddTask(title)
    setText('')
  }

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <input
        aria-label="New task title"
        className="new-task-input"
        onChange={(event) => setText(event.currentTarget.value)}
        placeholder="Add a task..."
        value={text}
      />
      <button className="add-task-button" disabled={!text.trim()} type="submit">
        Add
      </button>
    </form>
  )
}

export default NewTaskInput
