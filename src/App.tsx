import TaskBoard from './TaskBoard'
import './App.css'

function App() {
  return (
    <main className="app-shell">
      <header className="app-header">
        <p className="eyebrow">A little more focus, every day</p>
        <h1>Task Board</h1>
        <p className="app-description">
          Keep your next steps clear and move through them one at a time.
        </p>
      </header>
      <TaskBoard />
      <footer className="app-footer">Small steps add up.</footer>
    </main>
  )
}

export default App
