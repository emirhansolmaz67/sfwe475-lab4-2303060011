# React notes

`title` is a prop: the parent supplies it, and `TaskCard` reads it but does not own it. `done` is state inside the card, so the checkbox can change it and React can re-render the card. A child should ask its parent to change a prop rather than trying to assign to it.

Each task's `id` stays attached to that task when the list changes. An array index describes a task's current position instead, so after filtering or reordering React can reuse a card for the wrong task and its local state may appear on another row.

The text box is controlled because its `value` comes from React state and `onChange` updates that state as I type. If I remove `onChange`, the value no longer changes, so the input cannot be edited and React warns that a controlled field has no change handler.

When I click Add, `NewTaskInput` passes the trimmed title to `TaskBoard` through `onAddTask`. `TaskBoard` owns the tasks state and appends a new task; React then passes the updated array through `TaskList` to render the new `TaskCard`.
