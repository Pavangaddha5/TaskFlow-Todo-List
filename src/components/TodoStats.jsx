
import "./TodoStats.css";

function TodoStats({ tasks }) {
  const total = tasks.length;
  const completed = tasks.filter((task) => task.completed).length;
  const pending = total - completed;

  return (
    <div className="todo-stats">
      <div className="stat-card">
        <h3>{total}</h3>
        <p>Total Tasks</p>
      </div>

      <div className="stat-card">
        <h3>{completed}</h3>
        <p>Completed</p>
      </div>

      <div className="stat-card">
        <h3>{pending}</h3>
        <p>Pending</p>
      </div>
    </div>
  );
}

export default TodoStats;
