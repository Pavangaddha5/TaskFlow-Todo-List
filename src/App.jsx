
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import TodoFilter from "./components/TodoFilter";
import TodoStats from "./components/TodoStats";
import TodoActions from "./components/TodoActions";

function App() {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");

    return savedTasks
      ? JSON.parse(savedTasks)
      : [
          { id: 1, title: "Learn React", completed: false },
          { id: 2, title: "Practice JavaScript", completed: true },
          { id: 3, title: "Build Todo Application", completed: false }
        ];
  });

  const [filter, setFilter] = useState("all");

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (title) => {
    setTasks([...tasks, {
      id: Date.now(),
      title,
      completed: false
    }]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleTask = (id) => {
    setTasks(tasks.map((task) =>
      task.id === id
        ? { ...task, completed: !task.completed }
        : task
    ));
  };

  const editTask = (id, newTitle) => {
    setTasks(tasks.map((task) =>
      task.id === id
        ? { ...task, title: newTitle }
        : task
    ));
  };

  const clearCompleted = () => {
  setTasks(tasks.filter((task) => !task.completed));
};

const completedCount = tasks.filter(
  (task) => task.completed
).length;

  const filteredTasks = tasks.filter((task) => {
    if (filter === "pending") return !task.completed;
    if (filter === "completed") return task.completed;
    return true;
  });

  return (
    <div className="app">
      <Navbar />
      <TodoForm onAddTask={addTask} />
      <TodoStats tasks={tasks} />
      <TodoFilter filter={filter} setFilter={setFilter} />
      <TodoActions
      onClearCompleted={clearCompleted}
      completedCount={completedCount}
    />
      <TodoList
        tasks={filteredTasks}
        onDeleteTask={deleteTask}
        onToggleTask={toggleTask}
        onEditTask={editTask}
      />
    </div>
  );
}

export default App;
