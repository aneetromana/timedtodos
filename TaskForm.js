import { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import "../styles.css";

export default function TaskForm({ addTask, updateTask, taskToEdit }) {
  const [title, setTitle] = useState("");

  useEffect(() => {
    if (taskToEdit) {
      setTitle(taskToEdit.title);
    } else {
      setTitle("");
    }
  }, [taskToEdit]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskToEdit) {
      updateTask(taskToEdit.id, title);
    } else {
      addTask({ title, task_done: false, id: nanoid() });
    }
    setTitle("");
  };

  return (
    <div className="task_form">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Write a Task"
          value={title}
        />
        <button type="submit">
          {taskToEdit ? "Save" : "Add"}
        </button>
        {taskToEdit && (
          <button type="button" onClick={() => setTitle("")}>
            Cancel
          </button>
        )}
      </form>
    </div>
  );
}
