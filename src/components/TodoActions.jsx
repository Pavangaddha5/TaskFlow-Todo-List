import "./TodoActions.css";

function TodoActions({ onClearCompleted, completedCount }) {
  return (
    <div className="todo-actions">
      <button
        onClick={onClearCompleted}
        disabled={completedCount === 0}
      >
        Clear Completed
      </button>
    </div>
  );
}

export default TodoActions;