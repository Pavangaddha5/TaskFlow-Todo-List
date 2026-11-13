
import { useState } from "react";
import "./TodoItem.css";

function TodoItem({ task, onDeleteTask, onToggleTask, onEditTask }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(task.title);

  const handleSave = () => {
    if (newTitle.trim() === "") return;

    onEditTask(task.id, newTitle.trim());
    setIsEditing(false);
  };

  return (
    <div className="todo-item">
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => onToggleTask(task.id)}
      />

      {isEditing ? (
        <input
          type="text"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
        />
      ) : (
        <span className={task.completed ? "completed" : ""}>
          {task.title}
        </span>
      )}

      {isEditing ? (
        <button onClick={handleSave}>Save</button>
      ) : (
        <button onClick={() => setIsEditing(true)}>Edit</button>
      )}

      <button onClick={() => onDeleteTask(task.id)}>Delete</button>
    </div>
  );
}

export default TodoItem;
