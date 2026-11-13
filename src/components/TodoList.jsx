
import TodoItem from "./TodoItem";
import "./TodoList.css";

function TodoList({ tasks, onDeleteTask, onToggleTask, onEditTask }) {
  return (
    <div className="todo-list">
      <h2>My Tasks</h2>

      {tasks.length === 0 ? (
        <p className="empty-message">No tasks found. Add a new task!</p>
      ) : (
        tasks.map((task) => (
          <TodoItem
            key={task.id}
            task={task}
            onDeleteTask={onDeleteTask}
            onToggleTask={onToggleTask}
            onEditTask={onEditTask}
          />
        ))
      )}
    </div>
  );
}

export default TodoList;
