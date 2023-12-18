import { useState } from "react";
import "../styles.css";
import Task from "./components/Task";
import TaskForm from "./TaskForm";

export default function TaskList() {
  const [tasks, setTasks] = useState([]);
  const [editingTask, setEditingTask] = useState(null);

  function addTask(newTask) {
    setTasks([...tasks, { ...newTask, id: nanoid() }]);
  }

  function updateTask(id, newTitle) {
    setTasks(tasks.map(task => task.id === id ? { ...task, title: newTitle } : task));
    setEditingTask(null); 
  }

  function beginEdit(task) {
    setEditingTask(task);
  }

  return (
    <div>
      {editingTask ? (
        <TaskForm updateTask={updateTask} taskToEdit={editingTask} />
      ) : (
        <TaskForm addTask={addTask} />
      )}
      <div className="task_list">
        {/* ...tasks.map... */}
      </div>
    </div>
  );
}
