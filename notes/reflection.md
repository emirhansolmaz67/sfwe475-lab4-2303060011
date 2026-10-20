# Self-check

### Why can't `FilterBar` and `TaskList` share filter state directly?

They are sibling components, so neither should reach into the other's local state. A shared parent such as `TaskBoard` can own the filter and pass its value to `TaskList` and the selection callback to `FilterBar`. The current core version does not implement the optional filter UI.

### What could go wrong if `TaskList` used array indexes as keys?

An index identifies a position, not a task. If tasks are filtered or reordered, React may keep a card's component state at that position and display it alongside a different task; the stable `task.id` avoids that mismatch.

### In this app, what flows down and what requests flow up?

`TaskBoard` passes the `tasks` array down to `TaskList`, which passes each task's `title` and `done` values to `TaskCard`. When I add a task, `NewTaskInput` calls the `onAddTask` function it received from `TaskBoard`, asking the state owner to update the list.
