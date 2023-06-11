import { useState, useEffect } from "react";
import Task from "./Task";

function TaskList() {
  const [taskList, setTaskList] = useState([]);
  const [newTaskText, setNewTaskText] = useState("");

  useEffect(() => {
    const storedTasks = localStorage.getItem("tasks");
    if (storedTasks) {
      setTaskList(JSON.parse(storedTasks));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(taskList));
  }, [taskList]);

  const handleTaskCompletion = (index) => {
    const updatedTaskList = [...taskList];
    updatedTaskList[index].completed = !updatedTaskList[index].completed;
    setTaskList(updatedTaskList);
    localStorage.setItem("tasks", JSON.stringify(updatedTaskList));
  };

  const handleInputChange = (event) => {
    setNewTaskText(event.target.value);
  };

  const handleAddTask = () => {
    if (newTaskText.trim() !== "") {
      const newTask = {
        text: newTaskText,
        completed: false
      };
      setTaskList([...taskList, newTask]);
      setNewTaskText("");
      localStorage.setItem("tasks", JSON.stringify([...taskList, newTask]));
    }
  };

  return (
    <div>
      <h2>Tareas:</h2>
      <input
        type="text"
        value={newTaskText}
        onChange={handleInputChange}
        placeholder="Nueva tarea"
      />
      <button onClick={handleAddTask}>Agregar tarea</button>
      <ul>
        {taskList.map((item, index) => (
          <Task
            key={index}
            text={item.text}
            completed={item.completed}
            onComplete={() => handleTaskCompletion(index)}
          />
        ))}
      </ul>
    </div>
  );
}

export default TaskList;